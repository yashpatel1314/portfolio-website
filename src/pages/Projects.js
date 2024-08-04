import React from 'react';
import '../css/general.css';
import '../css/action.css';
import '../css/projects.css';
import ImageCarousel from '../components/ImageCarousel';
import react1 from '../photos/carouselphotos/react0.png';
import react2 from '../photos/carouselphotos/react1.png';
import react3 from '../photos/carouselphotos/react2.png';
import robot1 from '../photos/carouselphotos/robot1.png';
import robot2 from '../photos/carouselphotos/robot2.png';
import robot3 from '../photos/carouselphotos/robot3.png';
import robot4 from '../photos/carouselphotos/robot4.png';
import rover1 from '../photos/carouselphotos/rover1.png';
import rover2 from '../photos/carouselphotos/rover2.png';
import rover3 from '../photos/carouselphotos/rover3.png';
import barbending1 from '../photos/carouselphotos/barbending1.png';
import barbending2 from '../photos/carouselphotos/barbending2.png';
import light1 from '../photos/carouselphotos/light1.png';
import light2 from '../photos/carouselphotos/light2.png';
import kettle1 from '../photos/carouselphotos/kettle1.png';
import kettle2 from '../photos/carouselphotos/kettle2.png';
import toolstand1 from '../photos/carouselphotos/toolstand1.png';
import toolstand2 from '../photos/carouselphotos/toolstand2.png';

export default function Projects() {
  const react = [react1, react2, react3];
  const robot = [robot1, robot2, robot3, robot4];
  const light = [light1, light2];
  const rover = [rover1, rover2, rover3];
  const barbending = [barbending1, barbending2];
  const kettle = [kettle1, kettle2]
  const toolstand = [toolstand1, toolstand2];

  return (
    <div className="projects-background">
      <div className="project-title" id="computing-programming">
        <h1>Projects</h1>
      </div>
      <div className="project-title" >
        <h2>Computing & Programming</h2>
      </div>
      <div className="project-title">
        <h3>React Based GUI @ WatDig</h3>
      </div>
      <div className="row">
        <div className="column">
          <div className="gui-project-text">
            <ul>
              <li>
                Developed a React Native-based Graphical User Interface (GUI) that seamlessly subscribes to ROS2 nodes, 
                displaying real-time data from published sources,
                enhancing the user interface for autonomous vehicle monitoring.
              </li>
              <li className="list-gap">
                The GUI was used to display gyro sensor data and live updates from consistently changing csv files. These files contained the environment, obstacles, and checkpoints that we would have to incorporate into our robot path.
              </li>
              <li className="list-gap">
                Used an android to display the data and added a scroll feature for seamless viewings and transitions.
              </li> 
            </ul>
          </div>
        </div>
        <div className="column">
          <ImageCarousel images={react} className="android" />
        </div>
      </div>
      <div className="project-title">
        <h3>
          Automated Forklift Prototype @ The University of Waterloo
        </h3>
      </div>
      <div className="project-row">
        <div className="column">
          <div className="robot-project-text">
            <ul>
              <li>
                Constructed detailed flowcharts to map out a robot's path as well as implementing a method to make the robot
                automatically understand what needs to be lifted, then using those flowcharts to create a program on RobotC.
              </li>
              <li className="list-gap">
              Employed EV3 mechanics and 3D printed parts to provide a stable base for the program to function smoothly.
              </li>
              <li className="list-gap">
                The design incorporated a forklift system into the robot to lift a block and hold it there until it was time to drop it at the home checkpoint.
              </li> 
            </ul>
          </div>
        </div>
        <div className="column">
          <ImageCarousel className="carousel-sizing" images={robot}/>
        </div>
      </div>
      <div className="project-title">
        <h3 id="traffic-light-system">
          Traffic Light System w/ Arduino @ Westlane Secondary School
        </h3>
      </div>
      <div className="project-row">
        <div className="column">
          <div className="traffic-project-text">
            <ul>
              <li>
                Developed an arduino-based traffic light system that would mimic a 4-way stop with a crosswalk and train functionality.
              </li>
              <li className="list-gap">
                Was built entirely with cardboard and scrap materials aside from the wiring and the LEDs.
              </li>
              <li className="list-gap">
                Wires were soldered together to the LEDs, and the wiring and Arduino are hidden under the system. 
              </li> 
            </ul>
          </div>
        </div>
        <div className="column">
          <ImageCarousel className="carousel-sizing" images={light}/>
        </div>
      </div>
      <div className='filler' id="mechanical-design">
        <h1>ssssssssssss</h1>
      </div>
      <div className='project-title' >
        <h2>Mechanical Design</h2>
      </div>
      <div className='project-title'>
        <h3>Rover Design @ WatDig</h3>
      </div>
      <div className="project-row">
        <div className="column">
          <div className="rover-project-text">
            <ul>
              <li>
                Using 1/8th inch aluminum plates, the machining of those plates, machined axels, and the wheels are the parts of the mechanical subsystem. Also including the holder for the batteries, UWB, and motor drivers.
              </li>
              <li className="list-gap">
                The electrical subsystem consisted of an emergency stop, 4 lithium batteries, and 3 motor drivers.
              </li>
              <li className="list-gap">
                This entire award-winning subsystem was designed and exact within the span of 4 months by 5 university students.
              </li> 
            </ul>
          </div>
        </div>
        <div className="column">
          <ImageCarousel className="carousel-sizing" images={rover}/>
        </div>
      </div>
      <div className='project-title'>
        <h3>Bar Bending Machine @ Welbilt</h3>
      </div>
      <div className="project-row">
        <div className="column">
          <div className="bar-project-text">
            <ul>
              <li>
                Created a bar bending machine out of primarily mild steel.
              </li>
              <li className="list-gap">
                The intention was to create a machine that could bend a bar of any length to any angle of choice.
              </li>
              <li className="list-gap">
                Used Autodesk Inventor to create the assembly and is still being used currently in that place of employment.
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <ImageCarousel className="carousel-sizing" images={barbending}/>
        </div>  
      </div>
      <div className='project-title'>
        <h3>Kettle Handle @ Welbilt</h3>
      </div>
      <div className="project-row">
        <div className="column">
          <div className="kettle-project-text">
            <ul>
              <li>
                Created a kettle handle out of mild steel.
              </li>
              <li className="list-gap">
                The intention was to create a safety measure for thse who pushed the carts using the kettles and slipped, or damaged the kettles themselves.
              </li>
              <li className="list-gap">
                Used Autodesk Inventor to create the assembly and is still being used currently in that place of employment.
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <ImageCarousel className="carousel-sizing" images={kettle}/>
        </div>  
      </div>
      <div className='project-title'>
        <h3>Tool Stand @ Welbilt</h3>
      </div>
      <div className="project-row">
        <div className="column">
          <div className="toolstand-project-text">
            <ul>
              <li>
                Created a Tool Stand out of mild steel and sheet metal.
              </li>
              <li className="list-gap">
                The intention was to create a stand for measuring tools that would normally be left on the ground. A very dangerous place to leave a tool, and can injure someone's back when they are constantly attempting to pick it up.
              </li>
              <li className="list-gap">
                Used Autodesk Inventor to create the assembly and is still being used currently in that place of employment.
              </li>
            </ul>
          </div>
        </div>
        <div className="column">
          <ImageCarousel className="carousel-sizing" images={toolstand}/>
        </div>  
      </div>
      <div className='footer' />
    </div>
  );
}