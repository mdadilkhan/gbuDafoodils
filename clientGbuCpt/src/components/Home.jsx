import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Dialogbox from "./Dialogbox";
import Card from "./Card";
import ped1 from "../assets/ped1.svg";
import ped2 from "../assets/ped2.svg";
import ped3 from "../assets/ped3.svg";
import ped4 from "../assets/ped4.svg";
import outcome1 from "../assets/outcomes1.svg";
import outcome2 from "../assets/courseImg.svg";
import CourseStructure from "../assets/CourseStructure.svg";
import Question from "../assets/Question.svg";
import cs from "../assets/CS.svg";
const pedagogy = [
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/blended-learning.svg",
    title: "Blended Learning",
    description: "A flexible mix of in-person and online learning, exposing students to various therapeutic delivery methods, including tele-therapy, face-to-face, and chat/video-based counseling."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/case-based.svg",
    title: "Role-Playing and Simulations",
    description: "Structured role-plays and mock sessions to develop empathy, communication, and therapeutic skills in a controlled environment."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/collaborative.svg",
    title: "Case-Based Learning",
    description: "Practical exploration of real-life cases to enhance diagnostic abilities and intervention planning."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/Community.svg",
    title: "Experiential Learning",
    description: "Hands-on engagement with counseling techniques, mental status examinations, and psychological assessments."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/Feedback.svg",
    title: "Guided Reading and Integration",
    description: "Application of theoretical knowledge from research papers and psychological frameworks to practice scenarios."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/collaborative.svg",
    title: "Collaborative Learning",
    description: "Peer counseling, group discussions, and cooperative activities to foster diverse therapeutic perspectives."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/reflective.svg",
    title: "Reflective Learning",
    description: "Continuous self-assessment through debriefs, feedback, and journaling to enhance self-awareness and professional growth."
  },
  {
    image: "https://corportal.s3.ap-south-1.amazonaws.com/jindalpedagogy/Feedback.svg",
    title: "Feedback-Oriented Assessment",
    description: "Constructive feedback from supervisors and peers to refine therapeutic techniques and case conceptualization skills."
  }
];

const Home = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("learning");
  const [openSection, setOpenSection] = useState(0);
  const [isModalOpen, setIsModal] = useState(false);
  const [currentMethod, setCurrentMethod] = useState();
  const showModal = (data) => {
    setCurrentMethod(data);
    setIsModal(true);
  };
  const handleCancel = () => {
    setIsModal(false);
  };

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const courses = [
    {
      step: "01",
      title: "Building the Foundations: Counseling Skills & Psychopathology",
      description: [
        "Developing the therapeutic alliance and understanding case conceptualization.",
        "Professional ethics, managing countertransference, and maintaining boundaries.",
        "Understanding of microskills used in a therapeutic alliance.",
        "Biopsychosocial perspectives in mental health and their role in diagnosis and treatment."
      ]
    },
    {
      step: "02",
      title: "Assessing the Client: Case History & Mental Status Examination (MSE)",
      description: [
        "Conducting structured and systematic MSE assessments.",
        "Conduction of structured and unstructured interviews.",
        "Identifying psychological markers, risk factors, and red flags in clinical practice.",
        "Documenting case histories with precision and sensitivity.",
        "Navigating ethical and confidentiality challenges in assessment."
      ]
    },
    {
      step: "03",
      title: "Whisper Catchers: Tuning into the Unspoken",
      description: [
        "Develop advanced observational skills to interpret non-verbal cues and emotional dynamics.",
        "Engage in mock counseling sessions with real-time feedback to refine therapeutic techniques.",
        "Participate in collaborative learning through peer discussions and therapeutic reflections."
      ]
    },
    {
      step: "04",
      title: "Reel to Real: Crafting Case Studies from Multimedia",
      description: [
        "Analyzing psychological narratives and mental health themes in real-life scenarios.",
        "Examining client-therapist relationships and therapeutic journeys in fictional and real-life portrayals."
      ]
    },
    {
      step: "05",
      title: "Assessments used in Different Settings",
      description: [
        "Understanding the use of testing, administration, and interpretation.",
        "Documentation of reports and result analysis."
      ]
    }
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
            Therapeutic Threads : Weaving Skills into Counseling Practice
          </h1>
          <div className="mt-8 w-full ">
            <h6 className="text-tertiary font-sans text-[12px] sm:text-[18px] font-normal leading-[25px]">
              This internship offers an in-depth exploration of counseling
              psychology and psychopathology, equipping students with both
              theoretical knowledge and practical experience in therapeutic
              skills, mental health assessment, and intervention strategies.
              Through self-reflection, real-world scenarios, case histories, and
              cinematic case studies, students will develop the ability to build
              effective therapeutic relationships, diagnose mental health
              conditions, and apply evidence-based interventions. Emphasis is
              placed on ethical considerations, cultural competence, and the
              ability to navigate complex psychological cases in diverse
              settings.{" "}
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
              For Post Graduate <br /> Students
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
            selectedSection === "course"
              ? "bg-[#614298] text-white"
              : "bg-white border border-disable text-disable1"
          }`}
          onClick={() => handleButtonClick("course")}
        >
          Course Structure
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
                Foundations of the therapeutic alliance, case conceptualization,
                and ethical decision-making.
              </li>
              <li className="text-[#696984]">
                Proficiency in conducting comprehensive case histories and
                mental status examinations (MSE).
              </li>
              <li className="text-[#696984]">
                Advanced observational skills for interpreting non-verbal cues
                and emotional dynamics.
              </li>
              <li className="text-[#696984]">
                Strategies for managing countertransference, professional
                boundaries, and client confidentiality.
              </li>
              <li className="text-[#696984]">
                Analytical and empathetic understanding of psychological themes
                through cinematic storytelling.
              </li>
              <li className="text-[#696984]">
                Risk identification, cultural sensitivity, and person-centered
                therapeutic interventions.
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mb-8" id="skills">
            <h2 className="text-3xl font-bold text-primary mb-4">Skills:</h2>
            <div className="flex flex-wrap gap-2 sm:gap-10">
              {[
                "Clinical assessment and diagnostic skills",
                "Case conceptualization and intervention planning",
                "Ethical decision-making and managing dilemmas",
                "Self-reflection and introspection",
                "Advanced communication and trust-building techniques",
                "Cultural competency and sensitivity",
                "Observational and analytical skills",
                "Critical thinking through case study and media analysis",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#F5F5F5] text-[#7355A8] text-[18px] font-medium px-4 py-2 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4 */}
          {/* Learning Methods Section */}
          <div className="flex flex-col gap-4 mb-8" id="pedagogy">
            <h2 className="text-3xl font-bold text-primary mb-4 rounded-2xl">
              Pedagogy:
            </h2>
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
                      <img
                        className="w-[2rem] h-[2rem] rounded-full"
                        src={Question}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                {/* Modal Container */}
                <div className="bg-[#FCFAFF] rounded-lg p-5 shadow-lg max-w-lg w-full relative">
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
                  <p className="text-gray-600 mt-2">
                    {currentMethod?.description}
                  </p>
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
              <img src={cs} alt="" className="w-full sm:w-[90%]" />
            </div>
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
              Course Structure
            </h2>
            <div className="sm:w-1/2 w-full">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Course Structure
              </h2>
              <div className="w-full p-4 block sm:hidden sm:mb-4 mb-0">
                <img src={cs} alt="" />
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
              <img src={outcome1} alt="" />
            </div>
            <h2 className="text-[20px] sm:text-3xl font-bold text-primary mb-4 block sm:hidden">
              Outcomes:
            </h2>
            <div className="w-full sm:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-4 sm:block hidden">
                Outcomes:
              </h2>
              <div className="w-full sm:w-1/2 p-4 block sm:hidden">
                <img src={outcome1} alt="" />
              </div>

              <ul className="list-disc ml-6 space-y-2">
  <li>
    <span className="font-bold">
      Mastery of Counseling Fundamentals and Psychopathology:{" "}
    </span>
    Students will develop a strong foundation in counseling techniques, ethical considerations, and the therapeutic alliance, enabling them to effectively engage with clients and build meaningful therapeutic relationships.
  </li>
  <li>
    <span className="font-bold">
      Proficiency in Clinical Assessment and Mental Status Examination:{" "}
    </span>
    Participants will gain hands-on experience in conducting case histories and MSEs, equipping them with the skills to systematically evaluate client presentations, identify key psychological markers, and document findings with accuracy.
  </li>
  <li>
    <span className="font-bold">
      Enhanced Skills in Observational Analysis and Non-Verbal Communication:{" "}
    </span>
    Through real-time supervised counseling sessions and peer feedback, students will sharpen their ability to interpret non-verbal cues, body language, and emotional dynamics crucial for effective client interactions.
  </li>
  <li>
    <span className="font-bold">
      Ethical and Professional Competence in Clinical Practice:{" "}
    </span>
    Students will navigate real-world ethical challenges, including confidentiality, informed consent, and boundary management, ensuring adherence to professional standards in therapeutic settings.
  </li>
  <li>
    <span className="font-bold">
      Application of Psychological Theories and Frameworks in Therapy:{" "}
    </span>
    By integrating biopsychosocial perspectives, students will develop a nuanced understanding of mental health conditions and apply relevant theoretical models in diagnostic and treatment planning.
  </li>
  <li>
    <span className="font-bold">
      Advanced Case Study Analysis Through Case Scenarios:{" "}
    </span>
    Using cinematic storytelling and real-world case studies, students will cultivate empathy, critical thinking, and analytical skills, fostering deeper insight into the lived experiences of individuals facing psychological challenges.
  </li>
  <li>
    <span className="font-bold">
      Proficiency in Psychological Assessments and Report Writing:{" "}
    </span>
    Participants will become adept at selecting, administering, and interpreting psychological tests across diverse settings, ensuring competency in assessment procedures and report documentation.
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
            price={2500}
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
