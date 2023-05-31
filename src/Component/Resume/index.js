import "./index.css";
import { IoIosCall, IoLogoGithub } from "react-icons/io";
import { IoSchoolOutline, IoLayersOutline } from "react-icons/io5";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { MdMailOutline, MdOutlineDraw } from "react-icons/md";
import { TbBrandLinkedin } from "react-icons/tb";
import { GiAchievement, GiSkills } from "react-icons/gi";

function Resume() {
  return (
    <div className="resume-bg">
      <div className="profile-container">
        <div>
          <img
            src="https://res.cloudinary.com/dqrp5aeqy/image/upload/v1685350601/IMG-20230527-WA0004_dapntb.jpg"
            alt="BhanuPrakash"
            className="image"
          />
        </div>
        <div className="social-media-details">
          <div className="name-container">
            <h1 className="name-heading">BhanuPrakash Pujala</h1>
            <p className="role-heading"> ( Aspiring Data Analyst )</p>
          </div>
          <div className="social-media-container">
            <IoIosCall color="#C19CFE" className="social-icon" />
            <p className="text-style">+91 939-806-2171</p>
          </div>
          <div className="social-media-container">
            <MdMailOutline color="#C19CFE" className="social-icon" />
            <p className="text-style">pujalabhanuprakash@gmail.com</p>
          </div>
          <div className="social-media-container">
            <TbBrandLinkedin color="#C19CFE" className="social-icon" />
            <p>
              <a
                href="https://www.linkedin.com/in/pujala-bhanuprakash-a62666192"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-style ${"link"}`}
              >
                linkedin.com/in/pujala-bhanuprakash-a62666192
              </a>
            </p>
          </div>
          <div className="social-media-container">
            <IoLogoGithub color="#C19CFE" className="social-icon" />
            <p className="text-style">
              <a
                href="https://github.com/Bhanuprakashpujala"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-style ${"link"}`}
              >
                https://github.com/Bhanuprakashpujala
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="profile-sub-container">
        <hr />
        <p className="description">
          To work for an organization where I could willingly obtain a position
          that will allow me to utilize my data analytical skills and knowledge
          to grow along with the organization objective. I am a quick learner
          with full passion towards learning and developing my capabilities and
          also competent for working in a team and individually as well.
        </p>
        <div className="container">
          <IoSchoolOutline color="#8D4DFD" className="icon" />
          <h1 className="sub-heading">EDUCATION</h1>
        </div>
        <hr />
        <div className="education-container">
          <div>
            <h1 className="name">A.V.College. Osmania-University , HYD</h1>
            <p className="group">
              B.SC in Statistics <span>( 8.77 CGPA )</span>
            </p>
          </div>
          <p className="year-of-pass">2019 - 2022</p>
        </div>
        <div className="education-container">
          <div>
            <h1 className="name">Gowthami Junior College , NKP</h1>
            <p className="group">
              Intermediate <span>( 90.3 % )</span>
            </p>
          </div>
          <p className="year-of-pass">2017 - 2019</p>
        </div>
        <div className="education-container">
          <div>
            <h1 className="name">Government - High School , NKP</h1>
            <p className="group">
              Matriculation <span>( 8.3 CGPA )</span>
            </p>
          </div>
          <p className="year-of-pass">2016 - 2017</p>
        </div>
        <div className="container">
          <MdOutlineDraw color="#8D4DFD" className="icon" />
          <h1 className="sub-heading">SKILLS</h1>
        </div>
        <hr />
        <ul className="custom-list-1">
          <li className="skill-list">Exploratory Data Analysis</li>
          <li className="skill-list">Data Visualization</li>
          <li className="skill-list">Statistics</li>
          <li className="skill-list">Tableau</li>
          <li className="skill-list">SQL</li>
          <li className="skill-list">Micro - Soft Excel (365)</li>
        </ul>
        <div className="container">
          <AiOutlineFolderOpen color="#8D4DFD" className="icon" />
          <h1 className="sub-heading">PROJECTS</h1>
        </div>
        <hr />
        <ul className="custom-list-2">
          <li className="project-heading">
            <>Cricket Player's Analysis (FDA)</>
            <p className="project-description">
              Collected the data from ESPNcricinfo using web scraping techniques
              and tools like Python and its libraries, Performed EDA and
              Descriptive statistics to analyze the best player Team-wise and
              player-wise.
            </p>
          </li>
          <li className="project-heading">
            <>Music store Data Analysis (SQL)</>
            <p className="project-description">
              Used constraints to create table for database designed for a music
              store, Analyzed data-based on the clients requirements by writing
              the queries to get required output, Used functions like group
              by, joins, window functions to solve the queries.
            </p>
          </li>
          <li className="project-heading">
            <>Zomato Delivery analysis (Tableau)</>
            <p className="project-description">
              Created dashboard for Zomato Delivery analysis.
            </p>
          </li>
        </ul>
        <div className="container">
          <GiAchievement color="#8D4DFD" className="icon" />
          <h1 className="sub-heading">ACHIEVEMENTS</h1>
        </div>
        <hr />
        <ul className="custom-list-1">
          <li className="skill-list">
            Proven Python and SQL proficiency with 5-star rating on Hacker rank.
          </li>
          <li className="skill-list">
            Successfully completed a certification in becoming a data minja and
            mastering the art of exploratory data analysis in Python.
          </li>
          <li className="skill-list">
            Proven academic excellence by scoring 73 marks on the CUCET (COMMON
            UNIVERSITY ENTRANCE TEST) for MSC Statistics.
          </li>
        </ul>
        <div className="container">
          <GiSkills color="#8D4DFD" className="icon" />
          <h1 className="sub-heading">PERSONAL COMPETENCIES</h1>
        </div>
        <hr />
        <ul className="custom-list-2">
          <li className="skill-list">Self - Confidence</li>
          <li className="skill-list">Attention To Detail </li>
          <li className="skill-list">Analytical Thinking</li>
        </ul>
        <div className="container">
          <IoLayersOutline color="#8D4DFD" className="icon" />
          <h1 className="sub-heading">LANGUAGES</h1>
        </div>
        <hr />
        <ul className="custom-list-1">
          <li className="skill-list">Telugu</li>
          <li className="skill-list">English</li>
          <li className="skill-list">Hindi</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
