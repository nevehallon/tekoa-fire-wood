import React, {Component} from 'react';
import img from './images/NevehAllon.jpeg'

class AboutNaveh extends Component {

    render() {
        return (
            <div id="about">
              <img src={img}></img>  
              <h3>WELCOME!</h3>
              <p className="sum">
              Hey there! Just some info about me, so you can get a sense of who I am and what I love to do. From Tekoa, Israel and I am here to help you design your webpage wether you are an individual, artist or business owner. I am an open minded individual that is ready to soak up as much information as possible in order to strengthen my skill-set to provide a well rounded service for my clients. I love interpreting clients concepts into visual format. Looking forward to working with you!
</p>
<p className="sum">
              I have completed all "front end" classes of "FreeCodeCamp".
              I have learned everything from scratch, driven by my passion for  programming.
              I am willing to learn everything that involves programming in the web  domain, that will help me achieve my dream, which is to become one of  the most wanted and profitable full-stack programmers on the market.
              I am highly motivated to sharpen my skills, and bring everything I  have to the job I undertake.
              </p>
              <footer>
                            E-mail: 
                            <a href="mailto:NevehAllon@gmail.com">
                            NevehAllon@gmail.com
                            </a>
              </footer>
            </div>
        )
    }
}

export default AboutNaveh