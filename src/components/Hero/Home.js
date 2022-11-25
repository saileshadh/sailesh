import React from "react";
import "./Home.css";
import hero from "../pic/hero.jpg";
import TypeWriterEffect from 'react-typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="lefttop">
            <h1>
              Hi, I’m <span>Sailesh Adhikari</span>
            </h1>
            <h2>
              
           
     <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
          " Frontend Developer.",
          " Seeker.",
          " Problem Solver.",
          " Passionate Learner.",
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
            </h2>

            <p>
              I am a frontend developer . I have a serious passion for making<br />
              application user friendly. I am interested in IT and everthing in
              its <br /> orbit.I am interested in the frontend spectrum and working
              on <br />ambitious projects with positive people.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND ME</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <a href="https://twitter.com/saileshadh1"><i class="fa fa-twitter"></i></a>
                  </button>
                  <button className="btn_shadow">
                    <a href="https://github.com/saileshadh">
                    <i class="fa fa-github"></i></a>
                  </button>
                  <button className="btn_shadow"><a href="https://www.linkedin.com/in/sailesh-adhikari-10186a237/">
                  <i class="fa fa-linkedin"></i></a>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>About</h4>
                <a href=".public/cv.pdf" download={true}>
                  <button className="btn_shadow">Download CV</button>
                  
                </a>
                <a href="#contact">
                  <button className="btn_shadow">Hire Me</button>
                  
                  
                </a>
                
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
