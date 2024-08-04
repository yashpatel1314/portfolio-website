import '../css/about.css';
import '../css/general.css';
import '../css/action.css';
import '../css/projects.css';
import waterloo from '../photos/about/uwaterloo.jpg';
import westlane from '../photos/about/westlane.jpg';
import linamar from '../photos/about/linamar.jpg';
import welbilt from '../photos/about/welbilt.jpg';
import northland from '../photos/about/northlandpower.jpg';
import main from '../photos/profile/watdig.png';
import watdig from '../photos/about/watdig.png';
import watonomous from '../photos/about/watonomous.jpg';
import navigation from '../photos/about/navigation.jpg';
import math from '../photos/about/math.jpg';
import reading from '../photos/about/reading.jpg';

export default function About() {
    return(
      <div className="about-background">
        <div className='about-title' id='HobbiesInterests'>
          <h1>About Me</h1>
        </div>
        <div>
          <div className="row">
            <div className="column">
              <div className='hobbies-title'>
                <h2>Hobbies & Interests</h2>
              </div>
              <div className="hobbies-text">
                <ul>
                  <li>
                    Participating in marathons throughout Ontario.
                  </li>
                  <li>
                    Engaging in sports including basketball, soccer, golf, tennis, and badminton.
                  </li>
                  <li>
                    Pursuing knowledge in autonomous robotics developments.
                  </li>
                  <li>
                    Developing projects focused on addressing global challenges and improving efficiency.
                  </li>
                  <li>
                    Reading extensively and exploring various regions of the world.
                  </li>
                  <li>
                    Enjoying puzzle-solving and engaging with complex brain teasers.
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="about-main-picture">
                <img className="main-about-pic" src={main} alt="main" />
              </div>
            </div>
          </div>
          <div className='filler' id='skills'>
            <h1>SSSSSSSSSSSS</h1>
          </div>
          <div className='skills-title'>
            <h2>Skills</h2>
          </div>
          <div className="skills-row">
            <div className="column">
              <div className='skills-subtitle'>
                <h2>Programming and Robotics</h2>
              </div>
              <div className="skills-text">
                <ul>
                  <li>
                    C++
                  </li>
                  <li>
                    RobotC
                  </li>
                  <li>
                    Python
                  </li>
                  <li>
                    Git
                  </li>
                  <li>
                    ROS2
                  </li>
                  <li>
                    Java
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className='skills-subtitle'>
                <h2>Design</h2>
              </div>
              <div className="skills-text">
                <ul>
                  <li>
                    AutoCAD
                  </li>
                  <li>
                    SolidWorks
                  </li>
                  <li>
                    Inventor
                  </li>
                  <li>
                    Photoshop
                  </li>
                  <li>
                    Sketchup
                  </li>
                  <li>
                    GD&T
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className='skills-subtitle'>
                <h2>Web Development & Technologies</h2>
              </div>
              <div className="skills-text">
              <ul>
                  <li>
                    HTML
                  </li>
                  <li>
                    CSS
                  </li>
                  <li>
                    Javascript
                  </li>
                  <li>
                    React.js
                  </li>
                  <li>
                    Excel VBA
                  </li>
                  <li>
                    OpenCV
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='filler' id='education'>
            <h1>SSSSSSSSSS</h1>
          </div>
          <div className='education-title'>
            <h2>Education</h2>
          </div>
          <div className='education-title'>
            <h3>University of Waterloo</h3>
          </div>
          <div className="about-row">
            <div className="column">
              <div className="waterloo-text">
                <h3>Degree</h3>
                <li>
                  Candidate for a Bachelor of Applied Science - Honours Mechatronics Engineering
                </li>
                <h3>Relevant Course Load</h3>
                <li>
                  Digital Computation | Mechatronics Engineering Design | Data Structures and Algorithms | Digital Logic
                </li>
              </div>
            </div>
            <div className="column">
              <div className="picadjust">
                <img className="waterloo-pic" src={waterloo} alt="waterloo" />
              </div>
            </div>
          </div>
          <div className='education-title'>
            <h3>Westlane Secondary School</h3>
          </div>
            <div className='about-row'>
              <div className="column">
                <div className="westlane-text">
                  <h3>Degree</h3>
                  <li>
                    Ontario Secondary School Diploma (OSSD)
                  </li>
                  <h3>Relevant Experiences</h3>
                  <li>
                  Creating and facilitating my own Vex Robotics team for the school.
                  </li>
                  <li>
                    Completed my studies with an overall grade of 98.1%.
                  </li>
                </div>
              </div>
              <div className="column">
                <div className="picadjust">
                  <img className="westlane-pic" src={westlane} alt="westlane" />
                </div>
              </div>
            </div>
          <div className='filler' id='workexperience'>
            <h1>SSSSSSSSSS</h1>
          </div>
          <div className='work-title'>
            <h2>Work Experience</h2>
          </div>
          <div className='work-title'>
            <h3>Linamar Corporation</h3>
          </div>
          <div className="about-row">
            <div className="column">
              <div className="linamar-text">
                <ul>
                  <li>
                    Created detailed engineering drawings, models and schematics using both SolidWorks and AutoCAD, contributing to the
                    improvement of vehicle components and systems.
                  </li>
                  <li>
                    Revised Excel documents to organize company data and create drawing sections resulting in a more efficient and
                    streamlined document retrieval process.
                  </li>
                  <li>
                    Utilized AutoCAD to generate floor layouts for new sections of the manufacturing plant, increasing overall tool space and
                    total productivity by 15%.
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="picadjust">
                <img className="linamar-pic" src={linamar} alt="linamar" />
              </div>
            </div>
          </div>
          <div className='work-title'>
            <h3>Welbilt</h3>
          </div>
          <div className="about-row">
            <div className="column">
              <div className="welbilt-text">
                <ul>
                  <li>
                    Improved production efficiency by 20% through the implementation of welding fixtures for various skillet pan assemblies.
                  </li>
                  <li>
                    Designed new algorithms in Excel VBA that reduced time spent on organizing fixtures and calculating missing units.
                  </li>
                  <li>
                    Collaborated with cross-functional teams, including fabrication, steamers, kettles, and skillets departments, to ensure
                    successful product launches and punctual delivery.
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="picadjust">
                <img className="welbilt-pic" src={welbilt} alt="welbilt" />
              </div>
            </div>
          </div>
          <div className='work-title'>
            <h3>Northland Power Inc.</h3>
          </div>
          <div className="about-row">
            <div className="column">
              <div className="northland-text">
                <ul>
                  <li>
                    Educated on topics related to piping and instrumentation diagrams, multimeters, temperature control, changes in pressure, and flow measuring instruments that are used in the industry.
                  </li>
                  <li>
                    Cooperated with the TCLP maintenance team, assisting them in arranging tool areas as well as housekeeping of the workshop and plant area.
                  </li>
                  <li>
                    Observed the usage of different industrial automation platforms like PLC, DCS, and other HMI.
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="picadjust">
                <img className="northland-pic" src={northland} alt="northland" />
              </div>
            </div>
          </div>
          <div className='filler' id='designteams'>
            <h1>SSSSSSSSSS</h1>
          </div>
          <div className='design-team-title'>
            <h2>Design Teams</h2>
          </div>
          <div className='design-team-title'>
            <h3>WatDig</h3>
          </div>
          <div className="about-row">
            <div className="column">
              <div className="watdig-text">
                <ul>
                  <li>
                    Developed a React-based GUI that seamlessly subscribes to ROS2 nodes, displaying real-time data from published sources,
                    enhancing the user interface for autonomous vehicle monitoring.
                  </li>
                  <li>
                    Applied SolidWorks expertise for precision machining and design of the autonomous vehicle.
                  </li>
                  <li>
                  Competed in the Not-A-Boring-Competition in Texas, our team finished in first place, earning the navigation award.
                  </li>
                  <li>
                  Utilized ROS2 nodes, python, and Ultra Wideband (UWB) to localize a robot with reference to UWB anchor placements.
                  </li>
                  <li>
                    Created a goal manager to determine when the robot had reached its destination and had to move on to the next goal,
                    slowly and effectively completing the course with 98% accuracy
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="picadjust">
                <img className="watdig-pic" src={watdig} alt="yash" />
              </div>
            </div>
          </div>
          <div className='design-team-title'>
            <h3>Watonomous</h3>
          </div>
          <div className="about-row">
            <div className="column">
              <div className="wato-text">
                <ul>
                  <li>
                    Programmed a vehicle using ROS2 and C++ with a focus on autonomous vehicle development.
                  </li>
                  <li>
                    Demonstrated mechanical integration skills by engineering and attaching a custom roof rack to enhance the vehicle.
                  </li>
                </ul>
              </div>
            </div>
            <div className="column">
              <div className="picadjust">
                <img className="wato-pic" src={watonomous} alt="yash" />
              </div>
            </div>
          </div>
          <div className='filler' id='Awards'>
            <h1>SSSSSSSSSS</h1>
          </div>
          <div className='award-title'>
            <h2>Awards and Certificates</h2>
          </div>
          <div className='award-title'>
            <h3>Navigation Award</h3>
          </div>
          <div className="about-row">
            <div className="award-picadjust">
              <img className="award-pic" src={navigation} alt="yash" />
            </div>
          </div>
          <div className='award-title'>
            <h3>Kumon North America Math Completion Award</h3>
          </div>
          <div className="about-row">
            <div className="award-picadjust">
              <img className="award-pic" src={math} alt="yash" />
            </div>
          </div>
          <div className='award-title'>
            <h3>Kumon North America Reading Completion Award</h3>
          </div>
          <div className="about-row">
            <div className="award-picadjust">
              <img className="award-pic" src={reading} alt="yash" />
            </div>
          </div>
        </div>
      </div>
    ) 
  }