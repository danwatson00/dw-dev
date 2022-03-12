import React from 'react'
import './Resume.css'

const Resume = () => 
  <div className="resume">
    <div className="resume-header">
      <h1>DAN WATSON</h1>
      <p>FULL STACK DEVELOPER + UI/UX DESIGNER</p>
    </div>
      <a className="download-pdf" href="DAN_WATSON_RESUME.pdf" target="_blank">
        <h3>DOWNLOADABLE PDF</h3>
      </a>
    <div className="resume-contact">
      <span>615-788-0177</span><br/>
      <a href="mailto:dan@danwatson.us">dan@danwatson.us</a><br/>
      <a href="https://www.linkedin.com/in/danwatson00/" target="_blank">LinkedIn Profile</a><br/>
      <a href="https://github.com/danwatson00" target="_blank">Github Profile</a>
    </div>
    <div className="education">
      <h2>EDUCATION</h2>
      <h3>NASHVILLE SOFTWARE SCHOOL</h3>
      <p>SIX MONTH FULL TIME CERTIFICATE PROGRAM</p>
      <p>FRONT END DEVELOPMENT AND UI/UX DESIGN</p>
      <h3>SAVANNAH COLLEGE OF ART AND DESIGN</h3>
      <p>MASTER OF FINE ARTS DEGREE</p>
      <p>PHOTOGRAPHY</p>
      <h3>CLARK UNIVERSITY</h3>
      <p>BACHELOR OF ARTS DEGREE</p>
      <p>STUDIO ART + COMMUNICATIONS AND CULTURE</p>
    </div>
    <div className="pro-skills">
      <h2>PROFESSIONAL SKILLS</h2>
      <div className="pro-1">
        <p>WEB DEVELOPMENT</p>
        <p>UI/UX DESIGN</p>
        <p>DIGITAL MARKETING</p>
        <p>GRAPHIC DESIGN</p>
      </div>
      <div className="pro-2">
        <p>PHOTOGRAPHY</p>
        <p>DESIGN SYSTEMS</p>
        <p>PROTOTYPING</p>
        <p>USER STORIES</p>
      </div>
    </div>
    <div className="development-skills">
      <h2 className="dev-skills-h2">DEVELOPMENT SKILLS</h2>
      <div className="skills-1">
        <p>REACT.JS</p>
        <p>VUE.JS</p>
        <p>JAVASCRIPT</p>
        <p>HTML5/CSS3</p>
        <p>SASS / SCSS</p>
        <p>GIT / GITHUB</p>
        <p>BOOTSTRAP</p>
        <p>SEMANTIC UI</p>
        <p>GRUNT / GULP</p>
        <p>VS CODE</p>
      </div>
      <div className="skills-2">
        <p>PHP</p>
        <p>MYSQL</p>
        <p>APIs</p>
        <p>XD</p>
        <p>SKETCH</p>
        <p>WORDPRESS</p>
        <p>SQUARESPACE</p>
        <p>TERMINAL</p>
        <p>ADOBE SUITE</p>
      </div>
    </div>
    <div className="experience">
      <h2>EXPERIENCE</h2>
      <h3>INGRAM CONTENT GROUP <span>JANUARY 2019 - PRESENT</span></h3>
      <p>FRONT END DEVELOPER CONTRACTER</p>
      <p>Develop and maintain multiple consumer - facing web properties for the Marketing Department</p>
      <p>Design and create wireframes and prototypes to increase UI / UX performance</p>
      <p>Implement dataLayers and integrate with Google Tag Manager and Salesforce Marketing Cloud to capture data</p>
      <p>Manage hosting, security, and maintenance of Consumer Marketing Team's Wordpress and custom websites</p>
      <p>Implement custom features and optimize Wordpress websites for speed and functionality</p>
      <h3>GITSUITE <span>DECEMBER 2018 - PRESENT</span></h3>
      <p>PART-TIME FULL STACK DEVELOPER</p>
      <h3>BARBERSHOP HARMONY SOCIETY</h3>
      <p>APPLICATION DEVELOPER</p>
      <p>Developed custom web applications and internal systems for a membership organization with over 20,000 active members</p>
      <p>Maintained and improved a database app that manages over 80,000 user profiles and is built with CakePHP MVC framework and MySQL</p>
      <p>Incorporated and evolved the aesthetic of the Society’s website and web applications while implementing UI/UX best practices and focusing usability on a member base whose average age is over 65 years old</p>
      <p>Designed prototypes according to specifications from and conversations with other departments and implemented those changes from concept to completion</p>
      <p>Utilized CraftCMS for content management and implemented customizations according to requests from marketing and other departments</p>
      <p>Wrote custom JavaScript, HTML, and CSS along with JQuery, SASS, SCSS, etc.</p>
      <h3>NASHVILLE SOFTWARE SCHOOL</h3>
      <p>APPRENTICE DEVELOPER</p>
      <p>Participated in hands on application of development fundamentals through group and individual projects reflecting real business problems</p>
      <p>Implemented source code version control with Git/GitHub</p>
      <p>Utilized project management/tracking with Github Projects & Issue Tracking</p>
      <p>Wrote DRY, modular, readable code and reusable components</p>
      <p>Performed DOM manipulation and AJAX calls with jQuery</p>
      <p>Built applications in the React framework with HTML, CSS, and JavaScript</p>
      <p>Used task Automation with Grunt: Linting with JSHint, module bundling with Browserify, and SASS compilation</p>
      <p>Styled and animated apps with CSS and SASS, Bootstrap, Flexbox, and CSS Grid</p>
      <p>Created user stories based on assessment of user experience and workflow</p>
      <p>Conveyed interactive story ideas and complex interactions with prototypes</p>
      <h3>WATSON STUDIOS</h3>
      <p>OWNER AND PHOTOGRAPHER</p>
    </div>
    <div className="projects">
      <h3>MY CAMERA BAGS</h3>
      <p>EQUIPMENT ORGANIZATION APP</p>
      <h3>HACK FOR THE COMMUNITY</h3>
      <p>FIRST PLACE PROJECT</p>
      <h3>MOODIBLE</h3>
      <p>WELLNESS TRACKING APP</p>
    </div>
  </div>

export default Resume