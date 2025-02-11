import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dialogbox from "./Dialogbox";
import Card from "./Card";
import ped1 from "../assets/ped1.svg";
import ped2 from "../assets/ped2.svg";
import ped3 from "../assets/ped3.svg";
import ped4 from "../assets/ped4.svg";
import outcome from "../assets/outcomes.svg";
import outcome2 from "../assets/courseImg.svg";
import CourseStructure from "../assets/CourseStructure.svg";

const Home = () => {
  
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("learning");
  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const courses = [
    {
      step: "01",
      title: "Foundations of Counseling skills",
      description: [
        "Overview of Counseling: Definition, Scope, and Purpose",
        "Roles & Responsibilities of a Counselor",
        "Insights into the therapeutic alliance, case conceptualization",
      ],
    },
    {
      step: "02",
      title: "Understanding self & professional practice",
      description: [
        " Importance of Self-Reflection in Counseling",
        "Tools & Techniques for Reflective Practice",
        "⁠Receiving  & utilising Supervision",
        "⁠Managing Personal Reactions & Countertransference",
        "Ethical Decision-Making Models",
        "Confidentiality, Informed Consent, and Client Rights",
        "Dealing with Ethical Dilemmas",
        "Professional Boundaries and Dual Relationships",
        "Cultural Competence and Sensitivity in Counseling",
      ],
    },
    {
      step: "03",
      title: "Whisper catchers: tuning into the unspoken",
      description: [
        "Tech-based activities to Understand  Therapeutic Alliance",
        "Observation of Counseling Sessions via  Case Verbatims",
        "Handling silence in sessions",
      ],
    },
  ];
  // Function to handle button click
  // const handleButtonClick = (section) => {
  //   setSelectedSection(section);
  //   document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  // };

  const handleButtonClick = (section) => {
    setSelectedSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  return (
    <>
      <div className="bg-background2 pb-10 rounded-b-[50px] relative ">
        <div className="w-full fixed top-0 z-50 ">
          <Header />
        </div>
        <div className="px-6 sm:px-12 md:px-12 w-full sm:w-[70%] pt-[7rem] sm:pt-[10rem] mb-10">
          <h1 className="text-primary text-[32px] sm:text-[64px] font-sans font-extrabold leading-[40px] sm:leading-[73px] tracking-tight">
            Mastering the Essentials: Foundations of Counseling Skills
          </h1>
          <div className="mt-8 max-w-screen-md ">
            <h6 className="text-tertiary font-sans text-[12px] sm:text-[18px] font-normal leading-[25px]">
              This course provides Undergraduate psychology students with a
              thorough introduction to essential counseling skills for effective
              practice. Combining theory and experiential learning, students
              will explore therapeutic relationships, case conceptualization,
              ethics, and self-reflection, with a strong focus on practical
              application through multimedia scenarios, role-plays, and
              reflective exercises.
            </h6>
          </div>
        </div>
        <div className="flex justify-evenly sm:flex-row flex-col items-center absolute bottom-0 sm:h-[100px] left-[10%] sm:left-[10%] top-[90%] w-[80%] h-max p-4 bg-white" style={{boxShadow:"0px -3px 16px 0px rgba(0, 0, 0, 0.17)", borderRadius:"15px"}}>
          <div className="border-b sm:border-b-0 sm:border-r border-[#614298] w-[90%] sm:w-[33%] pl-8 pr-4 sm:mb-0 mb-4">
            <p className="font-sans text-[16px] sm:text-[32px] font-extrabold text-primary leading-[43.65px] tracking-[0.005em] text-left">
              30 hours
            </p>
            <p className="text-primary text-[12px] sm:text-[16px] mb-2">Intensive Offline Paid Training</p>
          </div>
          <div className="flex items-center border-b sm:border-b-0 sm:border-r border-[#614298] w-[90%] sm:w-[33%] pl-8 pr-4 sm:mb-0 mb-4 h-[100%]">
            <p className="font-sans text-primary text-[16px] sm:text-[32px] font-extrabold leading-[43.65px] tracking-[0.005em] text-left">
              3 Modules
            </p>
            {/* <p className="text-primary">Intensive Offline Paid Training</p> */}
          </div>
          <div className="text-right sm:w-[33%] pl-8 w-[90%] ">
            <p className="font-sans text-[16px] sm:text-[32px] text-primary font-extrabold tracking-[0.005em] text-left">
              For Undergraduate <br /> Students
            </p>
          </div>
        </div>
      </div>







      <div className="sticky top-[80px] flex flex-wrap justify-start items-center gap-6 mt-[15rem] sm:mt-20 px-6 sm:px-12 md:px-12 bg-white  ">
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "learning"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("learning")}
        >
          Learning
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "skills"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("skills")}
        >
          Skills
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "pedagody"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("pedagogy")}
        >
          Pedagogy
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "outcomes"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("outcomes")}
        >
          Outcomes
        </button>
        <button
          className={`capitalize py-2.5 px-5 rounded-lg ${
            selectedSection === "course"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("course")}
        >
          Course Structure
        </button>
      </div>

      <div className="px-6 sm:px-12 md:px-12">
        <div className="bg-white text-gray-800 font-sans p-2 sm:p-8">
          {/* What Will Students Learn Section */}
          <div className="mb-8" id="learning">
            <h2 className="text-3xl font-bold text-primary mb-4">
              What will students learn:
            </h2>
            <p className="text-lg text-[#696984]">
              By the end of the course, students will be able to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-2 text-[#696984]">
              <li className="text-[#696984]">
                Establish and sustain effective therapeutic relationships with
                clients.
              </li>
              <li className="text-[#696984]">
                Accurately conceptualize cases and maintain detailed,
                confidential session documentation.
              </li>
              <li className="text-[#696984]">
                Apply self-reflection techniques to improve personal and
                professional development.
              </li>
              <li className="text-[#696984]">
                Utilize role-play and case scenarios to practice and refine
                their counseling skills in a controlled environment, preparing
                them for real-world counseling settings.
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mb-8" id="skills">
            <h2 className="text-3xl font-bold text-primary mb-4">Skills:</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Empathetic Listening",
                "Analytical Case Conceptualization",
                "Ethical Decision-Making",
                "Confidential Documentation",
                "Reflective Self-Awareness",
                "Effective Communication",
                "Relationship-Building",
                "Practical Problem-Solving",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#F5F5F5] text-[#7355A8] text-sm font-medium px-4 py-2 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4 */}
          {/* Learning Methods Section */}
          <div className="flex flex-col gap-4 mb-8" id="pedagogy">
            <h2 className="text-3xl font-bold text-primary mb-4">Pedagogy:</h2>
            <div className="flex flex-col sm:flex-row" style={{boxShadow:"0px -3px 16px 0px rgba(0, 0, 0, 0.17)", borderRadius:"15px"}}>
              {[
                {
                  img: ped1,
                  title: "Interactive role-plays",
                  description: "Simulating therapeutic environments",
                },
                {
                  img: ped2,
                  title: "Case Discussions",
                  description: "Exploring diverse scenarios",
                },
                {
                  img: ped3,
                  title: "Project-based learning",
                  description:
                    "Hands-on practice with tools and book references",
                },
                {
                  img: ped4,
                  title: "Reflective activities",
                  description: "For deeper understanding",
                },
              ].map((method) => (
                <div
                  key={method.title}
                  className="flex p-4 rounded-lg text-left gap-4 sm:gap-1"
                >
                  <img src={method.img} alt="" className="sm:w-[66px] sm:h-[66px] w-[48px] h-[48px]"/>
                  <div>
                    <h4 className="font-semibold text-lg">{method.title}</h4>
                    <p className="text-sm mt-2">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Structure Section */}
          <div className="mb-8 w-full flex flex-col sm:flex-row-reverse" id="course">
            <div className="w-full sm:w-1/2 p-4 sm:block hidden">
              <img src={outcome} alt="" className="w-full sm:w-[90%]"/>
            </div>
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
                Course Structure
              </h2>
            <div className="sm:w-1/2 w-full">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Course Structure
              </h2>
              <div className="w-full p-4 block sm:hidden sm:mb-4 mb-0">
              <img src={outcome2} alt="" />
              </div>
              <div className="space-y-6">
                {courses.map((course, index) => (
                  <div
                    key={course.step}
                    className="border-b pb-4  border-gray-300"
                  >
                    <div
                      className="flex items-center justify-between cursor-pointer mb-[18px]"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center">
                        <div className="text-[#101566] bg-secondary p-2 font-bold text-xl">
                          {course.step}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-[20px] sm:text-3xl">
                            {course.title}
                          </h4>
                        </div>
                      </div>
                      <div className="mr-4">
                        {openSection === index ? (
                          <span className="text-disable font-bold text-2xl">
                            -
                          </span>
                        ) : (
                          <span className="text-disable font-bold text-2xl">
                            +
                          </span>
                        )}
                      </div>
                    </div>
                    {openSection === index && (
                      <ul className="ml-4 sm:ml-16 mt-2 text-sm text-gray-600 list-disc list-inside">
                        {course.description.map((point, i) => (
                          <li key={i} className="text-[14px]">{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Outcomes Section */}
          <div className="mb-8 flex sm:flex-row flex-col w-full" id="outcomes">
            <div className="w-full sm:w-1/2 p-4 sm:block hidden">
              <img src={CourseStructure} alt="" />
            </div>
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
                Outcomes:
              </h2>
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Outcomes:
              </h2>
              <div className="w-full sm:w-1/2 p-4 block sm:hidden">
              <img src={CourseStructure} alt="" />
            </div>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <span className="font-bold">
                    Real-World Therapy Experience:{" "}
                  </span>
                  Gain firsthand exposure to the dynamics of a therapy space,
                  learning to create a safe and supportive environment for
                  clients.
                </li>
                <li>
                  <span className="font-bold">
                    Client Interaction Mastery:{" "}
                  </span>{" "}
                  Develop the ability to effectively engage with clients, build
                  trust, and navigate complex emotional landscapes.
                </li>
                <li>
                  <span className="font-bold">Advanced Case Handling: </span>{" "}
                  Learn to analyze and conceptualize diverse case scenarios,
                  enhancing decision-making and problem-solving skills.
                </li>
                <li>
                  <span className="font-bold">Role-Play Proficiency: </span>{" "}
                  Refine counseling techniques through role-play exercises,
                  simulating real-life situations to build confidence and
                  adaptability. .
                </li>
                <li>
                  <span className="font-bold">
                    Ethical and Professional Excellence:{" "}
                  </span>
                  Internalize ethical principles and best practices, ensuring
                  high standards in client care and professional conduct.
                </li>
                <li>
                  <span className="font-bold">
                    Enhanced Reflective Practice:{" "}
                  </span>{" "}
                  Cultivate self-awareness and reflective abilities, essential
                  for continuous personal and professional growth.
                </li>
                <li>
                  <span className="font-bold">Competitive Edge:</span> Acquire a
                  comprehensive skill set that sets you apart from peers,
                  positioning you as a capable and prepared mental health
                  professional ready to excel in the field.
                </li>
              </ul>
            </div>
          </div>

          {/* Enroll Now Button */}
        </div>
      </div>
      <div className="w-full">
        <Dialogbox
          isOpen={isDialogOpen}
          onClose={handleCloseDialog}
          title="Offline 30 hours internship fee structure"
        >
          <Card
            title={
              <span>
                Individual
                <br />
                fee
              </span>
            }
            price={3000}
            student={{ min: 1, max: 1 }}
          />
        
        </Dialogbox>
      </div>
      <div className="flex justify-center items-center p-4 sm:w-[50%] w-[90%] mx-auto border border-solid border-border rounded-md bg-[#FCFAFF]">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-[16px] sm:text-3xl text-[#7355A8]">MODE</span>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="online"
              className="appearance-none h-4 w-4 border border-#7355A8] rounded-full checked:bg-[#7355A8] checked:border-transparent focus:outline-none"
              defaultChecked
            />
            <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">Online</span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="offline"
              className="appearance-none h-4 w-4 border border-#7355A8] rounded-full checked:bg-[#7355A8] checked:border-transparent focus:outline-none"
              defaultChecked
            />
            <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">Offline</span>
          </label>
          <span className="font-bold text-[#7355A8] ml-8 text-[16px] sm:text-3xl">
            BATCHES
          </span>
          <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">Weekend</span>
        </div>
      </div>
      <div className="text-center my-8">
        <button
          onClick={handleOpenDialog}
          className="bg-secondary text-primary px-8 py-4 rounded-lg uppercase text-lg font-semibold"
        >
          Enroll Now
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
