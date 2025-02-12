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
import Question from "../assets/Question.svg"
const pedagogy = [
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/blended-learning.svg",
    title: "Blended Learning",
    description: "Flexible learning through online and offline formats, including in-person, teletherapy, video/audio/chat-based sessions."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/case-based.svg",
    title: "Role-Playing and Simulations",
    description: "Realistic client interactions through structured role-plays and mock therapy sessions."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/collaborative.svg",
    title: "Case-Based Learning",
    description: "Application of theories and diagnostic techniques to real-life scenarios."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/Community.svg",
    title: "Experiential Learning",
    description: "Hands-on practice in clinical interviewing, diagnostic assessments, and intervention planning."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/reflective.svg",
    title: "Reflective Learning",
    description: "Journaling, feedback sessions, and peer reviews to build self-awareness and critical thinking."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/Feedback.svg",
    title: "Guided Reading and Integration",
    description: "Engaging with research papers, case studies, and evidence-based practices."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/Feedback.svg",
    title: "Feedback-Oriented Assessment",
    description: "Continuous assessment with constructive feedback for skill refinement."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/collaborative.svg",
    title: "Collaborative Learning",
    description: "Group discussions, team projects, and peer mentoring to develop holistic perspectives."
  }
];


const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("learning");
  const [openSection, setOpenSection] = useState(0);
  const[isModalOpen,setIsModal]=useState(false);
  const [currentMethod,setCurrentMethod]=useState();
  const showModal=(data)=>{
    setCurrentMethod(data);
    setIsModal(true);
  }
  const handleCancel=()=>{

    setIsModal(false);

  }
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const courses = [
    {
      step: "01",
      title: "Foundations of Clinical and Counseling Psychology",
      description: [
        "Overview of both fields: similarities, differences, and applications.",
        "Client-centered approach and ethical considerations.",
      ],
    },
    {
      step: "02",
      title: "Micro-skills of Counseling",
      description: [
        "Techniques for building rapport and gathering comprehensive client information.",
        "Understanding the different skill sets used by a therapist and application of skills in a practical setting.",
      ],
    },
    {
      step: "03",
      title: "Clinical Interviewing",
      description: [
        "Structured and unstructured interviews.",
        "Understanding the concepts of case history & MSE.",
        "Structure for case conceptualization and reports based on the same.",
      ],
    },
    {
      step: "04",
      title: "Cultural Competency and Diversity in Therapy",
      description: [
        "Working with diverse populations and tailoring interventions accordingly.",
        "Addressing biases and developing cultural sensitivity.",
      ],
    },
    {
      step: "05",
      title: "Assessments used in Different Settings",
      description: [
        "Understanding the use of testing, administration, and interpretation.",
        "Documentation of reports and result analysis.",
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
              This psychology internship helps students build a strong
              foundation in counseling microskills, clinical interviewing, and
              basic therapeutic techniques. It combines theory with hands-on
              experience to prepare students for roles in mental health
              settings. The program emphasizes essential skills, ethical
              awareness, cultural sensitivity, and modern approaches to mental
              well-being support..
            </h6>
          </div>
        </div>
        <div
          className="flex justify-evenly sm:flex-row flex-col items-center absolute bottom-0 sm:h-[100px] left-[10%] sm:left-[10%] top-[90%] w-[80%] h-max p-4 bg-white"
          style={{
            boxShadow: "0px -3px 16px 0px rgba(0, 0, 0, 0.17)",
            borderRadius: "15px",
          }}
        >
          <div className="border-b sm:border-b-0 sm:border-r border-[#614298] w-[90%] sm:w-[33%] pl-8 pr-4 sm:mb-0 mb-4">
            <p className="font-sans text-[16px] sm:text-[32px] font-extrabold text-primary leading-[43.65px] tracking-[0.005em] text-left">
              30 hours
            </p>
            <p className="text-primary text-[12px] sm:text-[16px] mb-2">
              Intensive Offline Paid Training
            </p>
          </div>
          <div className="flex items-center border-b sm:border-b-0 sm:border-r border-[#614298] w-[90%] sm:w-[33%] pl-8 pr-4 sm:mb-0 mb-4 h-[100%]">
            <p className="font-sans text-primary text-[16px] sm:text-[32px] font-extrabold leading-[43.65px] tracking-[0.005em] text-left">
              5 Modules
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
                The goals, processes, and stages of both clinical and counseling
                psychology..
              </li>
              <li className="text-[#696984]">
                The roles and responsibilities of psychologists in different
                settings.
              </li>
              <li className="text-[#696984]">
                Client-centered approaches to prioritize clients’ needs,
                perspectives, and strengths.
              </li>
              <li className="text-[#696984]">
                Proficiency in structured and unstructured clinical interviewing
                techniques.
              </li>
              <li className="text-[#696984]">
                Ethical and legal considerations in a therapeutic relationship &
                setting.{" "}
              </li>
              <li className="text-[#696984]">
                The importance of self-awareness, emotional regulation, and
                reflective practice.{" "}
              </li>
              <li className="text-[#696984]">
                Techniques in active listening, empathy, conflict resolution,
                goal-setting, and behavioral modification.{" "}
              </li>
              <li className="text-[#696984]">
                Hands-on experience in documentation & case writing.{" "}
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mb-8" id="skills">
            <h2 className="text-3xl font-bold text-primary mb-4">Skills:</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Clinical interviewing & rapport building",
                "Active listening & empathy",
                "Diagnostic skills & treatment planning",
                "Cultural sensitivity & ethical decision-making",
                "Case documentation & report writing",
                "Emotional regulation & self-awareness",
                "Clinical assessment & scoring",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#F5F5F5] text-[#7355A8] text-[1.2rem] font-medium px-4 py-2 rounded-md"
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
            <div
              className="flex flex-wrap flex-col sm:flex-row bg-[#FCFAFF]"
              style={{
                boxShadow: "0px -3px 16px 0px rgba(0, 0, 0, 0.17)",
                borderRadius: "15px",
              }}
            >
              {pedagogy?.map((method) => (
                <div
                  key={method.title}
                  className="flex items-center p-4 rounded-lg text-left sm:gap-2 w-full sm:w-1/4 justify-center"
                >
                  <img
                    src={method?.image}
                    alt={method.title}
                    className="sm:w-[66px] sm:h-[66px] w-[48px] h-[48px]"
                  />
                  <h4 className="font-bold text-[1.4rem] font-nunito w-[40%]">
                    {method.title}
                  </h4>
                  <div>
                    <div
                      size={24}
                      onClick={() => showModal(method)}
                      className="cursor-pointer text-purple-600 hover:text-purple-800"
                    >
                    <img className="w-[2rem] h-[2rem] rounded-full" src={Question}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Modal Component */}
            {isModalOpen && (
  <div 
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    {/* Modal Container */}
    <div 
      className="bg-[#FCFAFF] rounded-lg p-5 shadow-lg max-w-lg w-full relative"
    >
      {/* Close Button */}
      <span
        onClick={handleCancel}
        className="absolute top-3 right-3 text-lg text-gray-600 hover:text-gray-800 cursor-pointer"
      >
        &#10005;
      </span>

      {/* Modal Title */}
      <h2 className="text-xl font-semibold text-gray-800">
        {currentMethod?.title}
      </h2>

      {/* Modal Description */}
      <p className="text-gray-600 mt-2">{currentMethod?.description}</p>
    </div>
  </div>
)}

          </div>

          {/* Course Structure Section */}
          <div
            className="mb-8 w-full flex flex-col sm:flex-row-reverse"
            id="course"
          >
            <div className="w-full sm:w-1/2 p-4 sm:block hidden">
              <img src={outcome} alt="" className="w-full sm:w-[90%]" />
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
                          <li key={i} className="text-[14px]">
                            {point}
                          </li>
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
              <div className="w-full sm:w-1/2  p-4 block sm:hidden">
                <img src={CourseStructure} alt="" />
              </div>
              <ul className="list-disc ml-6 space-y-2 text-[1.6rem]">
                <li>
                  <span className="font-bold">
                    Competence in Clinical and Counseling Techniques:{" "}
                  </span>
                  Students will master skills in client-centered therapy,
                  diagnostics, and interventions tailored to diverse
                  populations.
                </li>
                <li>
                  <span className="font-bold">
                    Enhanced Diagnostic and Treatment Planning Abilities:{" "}
                  </span>
                  Proficiency in using DSM-5 and ICD-11 to accurately assess and
                  classify mental health conditions.
                </li>
                <li>
                  <span className="font-bold">
                    Development of Strong Therapeutic Skills:{" "}
                  </span>
                  Mastery in active listening, rapport building, goal-setting,
                  and behavioral interventions.
                </li>
                <li>
                  <span className="font-bold">
                    Stronger Self-Awareness and Emotional Regulation:{" "}
                  </span>
                  Capacity for reflective practice, professional growth, and
                  resilience in challenging mental health settings.
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
            price={2200}
            student={{ min: 1, max: 1 }}
          />
        </Dialogbox>
      </div>
      <div className="flex justify-center items-center p-4 sm:w-[50%] w-[90%] mx-auto border border-solid border-border rounded-md bg-[#FCFAFF]">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-[16px] sm:text-3xl text-[#7355A8]">
            MODE
          </span>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="online"
              className="appearance-none h-4 w-4 border border-#7355A8] rounded-full checked:bg-[#7355A8] checked:border-transparent focus:outline-none"
              defaultChecked
            />
            <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
              Online
            </span>
          </label>
          <label className="flex items-center space-x-1">
            <input
              type="radio"
              value="offline"
              className="appearance-none h-4 w-4 border border-#7355A8] rounded-full checked:bg-[#7355A8] checked:border-transparent focus:outline-none"
              defaultChecked
            />
            <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
              Offline
            </span>
          </label>
          <span className="font-bold text-[#7355A8] ml-8 text-[16px] sm:text-3xl">
            BATCHES
          </span>
          <span className="text-[#7355A8] text-[12px] sm:text-2xl font-light">
            Weekend
          </span>
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
