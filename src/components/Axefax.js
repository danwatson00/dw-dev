import React, { Component } from 'react';
import ProjectTemplate from './ProjectTemplate';
import Guitarist from '../images/guitarist.jpg'

class Axefax extends Component {
  render() {
    return (
      <div className="axefax">
        <ProjectTemplate
          bkg="axefaxBkg"
          ask="Design and develop a web app using Vue.js for GitSuite. The 
          app showcases GitSuite’s AxeFax API. The API contains serial number 
          data for thousands of guitars and other musical instruments."
          challenge="Getting to create this app from start to finish on my own 
          for a successful startup was an exciting challenge. With a tight 
          budget and short timeline, I had to come up with a design quickly, 
          without a traditional case study. To make things interesting, this 
          was also my first project using Vue.js."
          imgName='guitarist'
          imgAlt="guitarist in front of speakers"
          g1h="Make it Fast"
          g1p="The site and API call had to be fast and responsive. So, I made the site lightweight and kept extraneous code to a minimum."
          g2h="Ease of Use"
          g2p="GitSuite’s target audience is musicians and music instrument repair people, I.e. non-tech people that may not be sophisticated web users."
          g3h="Rockin' Style"
          g3p="GitSuite’s target audience is musicians and music instrument repair people, I.e. non-tech people that may not be sophisticated web users."
          tech="I was especially excited about this project because I got to do all of the work from design to development. Starting with wireframes, I created functioning mockups with Adobe XD. I worked with GitSuite to create the look they were trying to achieve.The company’s existing sites were made with Vue.js so I decided to try making the app in Vue.js.I also used Javscript, HTML, and CSS."
          techIcons={['vue', 'javascript', 'html5', 'css3', 'webpack', 'xd']}
          learned="This was my first for-hire project for a startup company. It was interesting to learn how they operate and how their needs are different from other types of businesses. I was happy to be given the freedom to approach the project in the way that I wanted. I was grateful they trusted me to come up with the vision for the application and execute it.I was also excited to use the Vue.js framework for the first time.Vue and React share many similarities as well as some interesting differences.I 'm not ready to declare one better than the other yet, but I am excited to keep working with both."
        />
      </div>
    );
  }
}

export default Axefax;