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
import cs from "../assets/CS.svg"


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
      title: "Navigating the Mind: Basics of Psychopathology",
      description: [
        { text: "Compass of Communication: Therapeutic Rapport Building" },
        { text: "Essentials of establishing trust and rapport." },
        { text: "Techniques in verbal and non-verbal communication." },
      ],
    },
    {
      step: "02",
      title:
        "Uncovering the Clues - Case History & Mental Status Examination (MSE)",
      description: [
        { text: "The Art of Inquiry: Case History Taking" },
        { text: "Techniques for comprehensive history taking." },
        { text: "Building a narrative from the client's perspective." },
        { text: "Mind's Mirror: Conducting Mental Status Examinations" },
        { text: "Systematic approach to MSE." },
        { text: "Identifying red flags and risk factors." },
      ],
    },
    {
      step: "03",
      title: "The Healer's Hand - Intervention Strategies",
      description: [
        {
          text: " Cognitive Sculpting: Introduction to Cognitive Behavioral Therapy (CBT)",
          isSubheading: true,
        },
        { text: "Basics of CBT and its application with adults." },
        { text: "Techniques for restructuring cognitive distortions." },
        {
          text: " Healing Words: Introduction to Psychodynamic Therapy",
          isSubheading: true,
        },
        { text: "Core principles of psychodynamic therapy." },
        { text: "Understanding transference and countertransference." },
      ],
    },
    {
      step: "04",
      title: "Reel to Real : Crafting Case studies from Cinema",
      description: [
        { text: "Unpacking Trauma and Grief: Lessons from Masaan" },
        {
          text: "Family Dynamics and Mental Health. : insights from Kapoor & Sons",
        },
        {
          text: "The Journey of Healing : Understanding Therapy through Dear Zindagi",
        },
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
          Therapeutic Threads : Weaving Skills into Counseling Practice
          </h1>
          <div className="mt-8 max-w-screen-md ">
          <h6 className="text-tertiary font-sans text-[12px] sm:text-[18px] font-normal leading-[25px]">
          This internship blends theoretical foundations of psychopathology with practical insights, using real-case scenarios and Indian movie references to illustrate key concepts. Students will explore the dynamics of therapy rooms, gaining a comprehensive understanding of counselling/clinical psychology in both offline and online settings.
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
              <li className="text-[#696984]">Integrate Theory and Practice</li>
              <li className="text-[#696984]">
                Analyze and Curate Case Studies
              </li>
              <li className="text-[#696984]">Enhance Diagnostic Skills</li>
              <li className="text-[#696984]">
                Navigate the Therapeutic Process
              </li>
            </ul>
          </div>

          {/* Skills Section */}
          <div className="mb-8" id="skills">
            <h2 className="text-3xl font-bold text-primary mb-4">Skills:</h2>
            <div className="flex flex-wrap gap-2 sm:gap-10">
              {[
                "Analytical",
                "Diagnostic",
                "Culturally-sensitive",
                "Empathetic",
                "Reflective",
                "Therapeutic",
                "Critical-thinking",
                "Practical Problem-Solving",
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
            <div className="flex flex-col sm:flex-row" style={{boxShadow:"0px -3px 16px 0px rgba(0, 0, 0, 0.17)", borderRadius:"15px"}}>
              {[
                {
                  img: ped1,
                  title: (
                    <>
                      <span className="font-bold text-[#696984] ">
                        Interactive role-plays
                      </span>{" "}
                      <span className="font-light text-[#696984]">and </span>
                      <span className="font-bold text-[#696984]">
                        real-case scenarios{" "}
                      </span>{" "}
                      <span className="font-light text-[#696984]">
                        simulating therapeutic environments
                      </span>
                    </>
                  ),
                },
                {
                  img: ped2,
                  title: (
                    <>
                      <span className="font-bold text-[#696984]">
                        Case Discussions
                      </span>
                    </>
                  ),
                },
                {
                  img: ped3,
                  title: (
                    <>
                      <span className="font-bold text-[#696984] ">
                        Project-based learning{" "}
                      </span>{" "}
                      <span className="font-light text-[#696984]">using </span>
                      <span className="font-bold text-[#696984]">
                        movie snippets{" "}
                      </span>{" "}
                      <span className="font-light text-[#696984]">
                        and book references
                      </span>
                    </>
                  ),
                },
                {
                  img: ped4,
                  title: (
                    <>
                      <span className="font-bold text-[#696984] ">
                        Reflective activities
                      </span>{" "}
                      <span className="font-light text-[#696984]">
                        {" "}
                        for deeper understanding
                      </span>
                    </>
                  ),
                },
              ].map((method) => (
                <div
                  key={method.title}
                  className="flex p-4 text-center w-full justify-normal sm:justify-center items-center gap-2"
                >
                  <img src={method.img} alt="" />
                  <div className="">
                    <p className="font-semibold text-[18px] text-left">{method.title}</p>
                    {/* <p className="text-sm mt-2">{method.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Structure Section */}
          <div className="mb-8 w-full flex flex-col sm:flex-row-reverse" id="course">
            <div className="w-full sm:w-1/2 p-4 sm:block hidden">
              <img src={cs} alt="" className="w-full sm:w-[90%]"/>
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
                    className="border-b pb-4 border-gray-300"
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
                          <h4 className="font-semibold text-[20px] sm:text-3xl text-[#101566]">
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
                      <div className="ml-16 mt-2 text-sm text-[#101566]">
                        {course.description.map((point, i) =>
                          point.isSubheading ? (
                            // Render subheadings as a separate text element
                            <p key={i} className="font-bold mt-4 text-[#696984">
                              {point.text}
                            </p>
                          ) : (
                            // Render regular list items
                            <li
                              key={i}
                              className="ml-4 list-disc list-inside font-normal txt-[#696984]"
                            >
                              {point.text}
                            </li>
                          )
                        )}
                      </div>
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
                <li className="font-normal text-[#696984]">
                  Proficiency in conducting detailed case histories and mental
                  status examinations (MSE).
                </li>
                <li className="font-normal text-[#696984]">
                  Advanced skills in formulating and implementing intervention
                  strategies tailored to individual needs.
                </li>
                <li className="font-normal text-[#696984]">
                  Ability to craft and analyze case studies using cinema and
                  literature as references.
                </li>
                <li className="font-normal text-[#696984]">
                  Enhanced empathy and cultural sensitivity in understanding
                  diverse client backgrounds.
                </li>
                <li className="font-normal text-[#696984]">
                
                  Increased self-awareness and reflective practice, crucial for
                  professional growth and preventing burnout.
                </li>
                <li className="font-normal text-[#696984]">

                  Improved communication and rapport-building skills with
                  clients and colleagues.
                </li>
                <li className="font-normal text-[#696984]">
                  Ability to contribute to multidisciplinary teams with a
                  well-rounded clinical perspective.
                </li>
                <li className="font-normal text-[#696984]">
                  Readiness to address mental health challenges in diverse
                  settings, with a focus on culturally relevant practices.
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
            price={3500}
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
