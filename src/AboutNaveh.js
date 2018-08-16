import React, {Component} from 'react';
import img from './images/NevehAllon.jpeg'

class AboutNaveh extends Component {

    render() {
        return (
            <div id="about">
              <a target="_blank" href="https://www.linkedin.com/in/neveh-allon/"><img src={img}></img></a>  
              <h3>WELCOME!</h3>
              <p className="sum">
              Hi There from Israel! I am here to help you design your webpage wether you are an individual, artist, business owner or company.
</p>
<p className="sum">
              Feel free to get in touch.
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