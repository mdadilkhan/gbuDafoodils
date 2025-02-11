const { getCollectionRef } = require('../utility/mongoDBClient.js')
const { apiResponseBody } = require('../utility/apiResponseBody.js')
const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config()
const Razorpay = require('razorpay');
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');



// const razorpay = new Razorpay({
//     key_id: 'rzp_test_IqmS1BltCU4SFU',
//     key_secret: 'tJA2Z7X9lDyG8FHfmZ6J2qv6'
// });


const razorpay = new Razorpay({
    key_id: 'rzp_live_IIwhdZvx1c4BGz',
    key_secret: 'MKwPrI8XsBlj2cmzbuFnZ51s'
    
});


exports.getNotification = async (event) => {
    try {
        const { email } = event.body;

        if (!email) {
            return apiResponseBody(400, false, "Email is required.");
        }

        // Get the collection reference
        const collection = await getCollectionRef("notifications");

        // Insert the email into the collection
        const result = await collection.insertOne({ email });
        console.log("result>>",result);
        // Check the result and respond accordingly
        if (result.acknowledged) {
            console.log("Email successfully added to notifications.");
            return apiResponseBody(200, true, "Email added to notifications.");
        } else {
            console.log("Failed to add email to notifications.");
            return apiResponseBody(500, false, "Failed to add email to notifications.");
        }
    } catch (error) {
        console.error("Error during saving email to notifications:", error);
        return apiResponseBody(500, false, "Internal Server Error");
    }
};

exports.createOrder= async (event) => {
    try {

        const data=event.body.data;
        console.log("data>>",data);
        const totalPrice=data.price
        console.log("totalprice>>",totalPrice);
        
        const options = {
            amount: (totalPrice* 100), // amount in the smallest currency unit
            currency: 'INR',
            receipt: uuidv4(),
        };

        const order = await razorpay.orders.create(options);
        console.log("iside order crate",order);
      
        return apiResponseBody(200, true, order);

    } catch (error) {
        return apiResponseBody(500, false, "Internal Server Error");
    }
}


exports.saveUserDetails = async (event) => {
  try {
    // Parse event.body to get user data (assuming it's JSON)
    const data = event.body;
    console.log("User data received:", data);

    // Validate the required fields (for example, email and name)
    if (!data.email || !data.name) {
      return apiResponseBody(400, false, "Name and Email are required.");
    }

    // Get the collection reference for "userDetails"
    const collection = await getCollectionRef("userDetails");

    // Insert the user details into the collection
    const result = await collection.insertOne(data);

    // Check if the insertion was successful
    if (result.acknowledged) {
      console.log("User details successfully saved:", result.insertedId);
      return apiResponseBody(200, true, "User details saved successfully.");
    } else {
      console.log("Failed to save user details.");
      return apiResponseBody(500, false, "Failed to save user details.");
    }
  } catch (error) {
    console.error("Error while saving user details:", error);
    return apiResponseBody(500, false, "Internal Server Error");
  }
};






const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "support@ensolab.in",
      pass: "edkbdgozzjesjvhh",
     
    },
  });
  
  function sendEmail(email,orderId,paymentId) {
  
    const mailOptions = {
      from: "sumeetenso@gmail.com",
      to: email,
      subject: "Course Enrollment",
      text: `Congratulations on your enrollment! this is you ${orderId} and ${paymentId}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  }
  
  exports.verifyOrder = async (event) => {
    console.log("Inside verify", event.body);
  
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        currentPayementDetails, // Assuming this is part of event.body
      } = event.body;

     console.log(currentPayementDetails);
     
      // Verify the payment signature
      const hmac = crypto.createHmac("sha256", razorpay.key_secret); // Use env variables
      hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
      const generated_signature = hmac.digest("hex");
  
      if (generated_signature === razorpay_signature) {
        console.log("Inside success");
  
        // Save payment details to the user collection
        const collection = await getCollectionRef("users");
  
        // Use the first email from the members array as the user identifier
        const userIdentifier = currentPayementDetails.email;
  
        if (!userIdentifier) {
          return apiResponseBody(400, false, "No valid user email found.");
        }
  
        // Find the user and update their payment details
        const updateResult = await collection.updateOne(
          { email: userIdentifier }, // Filter by user identifier
          {
            $set: {
              lastPaymentDetails: {
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                signature: razorpay_signature,
                ...currentPayementDetails,
              },
            },
            $push: {
              paymentHistory: {
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                signature: razorpay_signature,
                ...currentPayementDetails,
                date: new Date(),
              },
            },
          },
          { upsert: true } // Create a new document if no match is found
        );
  
        if (updateResult.matchedCount === 0) {
          console.log("New user record created");
        } else {
          console.log("User payment details updated");
        }
  
        // Send emails to all members
        // currentPayementDetails.members.forEach((member) => {
        //   if (member.email, razorpay_order_id, razorpay_payment_id) {
        //     sendEmail(member.email);
        //   }
        // });
  
        return apiResponseBody(200, true, "Payment verified and emails sent successfully.");
      } else {
        console.log("Inside failure");
        return apiResponseBody(400, false, "Payment verification failed.");
      }
    } catch (error) {
      console.log("Error during payment verification:", error);
      return apiResponseBody(500, false, "Internal Server Error");
    }
  };
