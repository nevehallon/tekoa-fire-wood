import React, {Component} from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from "react-redux";
import { Container, Divider, Header, Message } from "semantic-ui-react";
import fire2 from './images/1_cord2.png';
import fire4 from './images/1-2_cord2.png';
import fire3 from './images/1-4_cord2.png';
import fire5 from './images/apt_cord2.png';

import ProfileForm from "./ProfileForm";
import $ from 'jquery';
import axios from 'axios';



const delivery = ({ handle }) => {
let url = 'https://script.google.com/macros/s/AKfycbw-iVL9grnngrgRLhoVJNPI2zWre1UbIFqdX8dp5BmOembzai4V/exec';

 handle = (props) => {
  console.log(JSON.stringify(props, null, 2));
  axios
  .get(url, { headers: {'Content-Type': 'application/json'}})
  .then(res=> { 
    console.log(JSON.stringify(res));
  }
  )
    .catch((err)=> {});
};

      return (  

 <div id="find-me">
    <h2>WE DELIVER!</h2>
    <hr className="star-dark"></hr>
        <div className="container">
        { ReactHtmlParser(html) } 
        </div>
        <Container>
    <Divider hidden />

    <Header as="h1" dividing>
    ALWAYS SEASONED &

READY TO BURN FIREWOOD.
    </Header>
    
    <div className="sizes">
      <div>
      <img src={fire2}/>
        <p className="legend">
                      4 Cubic Meters 10cm x 40cm
        </p>
      </div>
      <div>
      <img src={fire3}/>
        <p className="legend">
                      2 Cubic Meters 10cm x 20cm
        </p>
      </div>
      <div>
      <img src={fire4}/>
        <p className="legend">
                      1 Cubic Meter 10cm x 10cm
        </p>
      </div>
      <div>
      <img src={fire5}/>
        <p className="legend">
                      Apartment Stack 5cm x 10cm
        </p>
      </div>      
    </div>

    <ProfileForm onSubmit={(event) => handle(event)} />
    
    <Message>
      <Message.Header>Form data:</Message.Header>
      <pre>{JSON.stringify(this.props, null, 2)}</pre>
    </Message>
  </Container>
  </div>
      );
      };


const mapStateToProps = state => {
  return state.form.profile
    ? {
        values: state.form.profile.values,
        submitSucceeded: state.form.profile.submitSucceeded
      }
    : {};
};

const html = '<p class="sum"><strong><em class="color">Tekoa Firewood</em></strong> delivers all over Jerusalem and all over the Jerusalem area. All firewood is stacked neatly at your location. We never throw your firewood over the fence or leave a mess. Our <strong><em class="color1">delivery</em></strong> options vary based off your location. Interested in your specific <strong><em class="color1">delivery</em></strong> pricing? Options and prices are available at check-out or simply give us a call!</p>';

export default connect(mapStateToProps)(delivery);