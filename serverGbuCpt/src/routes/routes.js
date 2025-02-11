const {createOrder,verifyOrder,getNotification,saveUserDetails} = require('../controller/user.controller')

exports.routes = {
  ["/createOrder"]:{
    POST :createOrder,
  },
  ["/verifyOrder"]:{
    POST: verifyOrder
  },
  ["/getNotification"]:{
    POST: getNotification
  },
  ["/saveUserDetails"]:{
    POST: saveUserDetails
  },
};
