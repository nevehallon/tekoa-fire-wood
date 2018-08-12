import React, { Component } from 'react';
import Modal from 'react-modal';
import img1 from './images/react-map.png'
import img2 from './images/react-project1-b.png'
import img3 from './images/memory-game.png'
import img4 from './images/work-portfolio.png'
import img5 from './images/feed.png'
import img6 from './images/reviews.png'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('body')
  
class WorkPortfolio extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
          modalIsOpen: false,
          con1: false,
          con2: false,
          con3: false,
          con4: false,
          con5: false,
          con6: false
        };
     
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      handleClick1() {

        this.setState({
            modalIsOpen: true,
            con1: true,
            con2: false,
            con3: false,
            con4: false,
            con5: false,
            con6: false
        });
    }

    handleClick2() {

        this.setState({
            modalIsOpen: true,
            con1: false,
            con2: true,
            con3: false,
            con4: false,
            con5: false,
            con6: false
        });
    }

    handleClick3() {

        this.setState({
            modalIsOpen: true,
            con1: false,
            con2: false,
            con3: true,
            con4: false,
            con5: false,
            con6: false
        });
    }

    handleClick4() {

        this.setState({
            modalIsOpen: true,
            con1: false,
            con2: false,
            con3: false,
            con4: true,
            con5: false,
            con6: false
        });
    }

    handleClick5() {

        this.setState({
            modalIsOpen: true,
            con1: false,
            con2: false,
            con3: false,
            con4: false,
            con5: true,
            con6: false
        });
    }

    handleClick6() {

        this.setState({
            modalIsOpen: true,
            con1: false,
            con2: false,
            con3: false,
            con4: false,
            con5: false,
            con6: true
        });
    }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    render() {
                
        let data = [
            {
                id: img1, 
                con: 1,
                this: this,
                title: 'Neighborhood-Map-React',
                url: 'https://nevehallon.github.io/Neighborhood-Map-React/', 
                description: 'A single-page web application, built using the React framework, that displays a Google Map with various points/markers. One can search all included landmarks and, when selected, more information about a landmark is shown from the FourSquare APIs.', 
                extra: `This site was built using:
                React,
                FourSquare API,
                Google maps API,
                CSS,
                JavaScript,
                ☕️ & 🎧`,
                custom: 
                    <div>
                      Check the online demo <a target="_blank" href="https://nevehallon.github.io/Neighborhood-Map-React/">here</a>
                    </div>
            }, 
            {
                id: img2, 
                con: 2,
                this: this, 
                title: 'My Reads',
                url: 'https://github.com/nevehallon/reactnd-project-myreads-starter', 
                description: 'In the MyReads project, I have created a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that was use to persist information as you interact with the application.', 
                extra: `This site was built using:
                React,
                CSS,
                JavaScript,
                ☕️ & 🎧`,
                custom: <div>
                Check out the Github repo <a target="_blank" href="https://github.com/nevehallon/reactnd-project-myreads-starter">here</a>
              </div>
            }, 
            {
                id: img3,  
                con: 3,
                this: this,
                title: 'Memory Game',
                url: 'https://github.com/nevehallon/fend-project-memory-game-2', 
                description: 'Matching game that require players to match similar elements. As the name implies, participants need to find a match of a picture on a card. For example, cards composed of 15 pairs, are face down in random order. The Player turns over two cards at a time, with the goal of turning over a matching pair, by using their memory. For more advanced gameplay, try and beat your best time with the fewest amount of moves. (the fewer the moves the more stars you get ⭐️ 🌟 ⭐️) - A fun game that gave me valuable insight into giving a page functionality using only vanilla Javascript. No JQuery needed!', 
                extra: `This site was built using:
                Font Awesome,
                Google Fonts,
                Animate.css,
                Hero Patterns,
                CSS,
                JavaScript,
                ☕️ & 🎧`,
                custom: <div>
                Check out the Github repo <a target="_blank" href="https://github.com/nevehallon/fend-project-memory-game-2">here</a>
              </div>
            }, 
            {
                id: img4,  
                con: 4,
                this: this,
                title: 'Personal web-site template',
                url: 'https://nevehallon.github.io/my-app/', 
                description: 'Page utilizes a css-Grid layout. It has Cross-Device Compatibility making use of responsive images, implemented error free, with media-queries. This project really gave me an opportunity to solidify my sense of branding and aesthetics by taking control of the style and layout of the page. I am confident in my ability to create and provide solutions with functionality built right in.', 
                extra: `This site was built using:
                React,
                CSS,
                JavaScript,
                ☕️ & 🎧`,
                custom: <div>
                Check the online demo <a target="_blank" href="https://nevehallon.github.io/my-app/">here</a>
              </div>
            }, 
            {
                id: img5,  
                con: 5,
                this: this,
                title: 'Feed Reader Testing',
                url: 'https://nevehallon.github.io/Neighborhood-Map-React/', 
                description: 'This project is based on the concept of test-driven JavaScript programming. Here, I have used the starter code given by Udacity and the jasmine testing framework to create a series of test suites for the long-term efficiency of my application. Not much went into the design or layout but a lot was learned about taking a test driven approach to development.', 
                extra: `This site was built using:
                Jasmine 2.2 testing framework,
                jQuery,
                handlebarsjs,
                Google API,
                Google Font,
                icomoon,
                normalize.css,
                CSS,
                JavaScript,
                ☕️ & 🎧`,
                custom: <div>
                Check out the Github repo <a target="_blank" href="https://github.com/nevehallon/frontend-nanodegree-feedreader">here</a>
              </div>
            }, 
            {
                id: img6,  
                con: 6,
                this: this,
                title: 'Restaurant Reviews',
                url: 'https://github.com/nevehallon/mws-restaurant-stage-1', 
                description: 'A fully responsive and accessable page Using Cache API and a ServiceWorker, the data is cached for the website so that any page (including images) that has been visited is accessible offline.', 
                extra: `This site was built using:
                JQuery,
                CSS,
                JavaScript,
                ☕️ & 🎧`,
                custom: <div>
                Check out the Github repo <a target="_blank" href="https://github.com/nevehallon/mws-restaurant-stage-1">here</a>
              </div>
            } 
        ]

        return (
            <div id="portfolios">
                <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
                {
                data.map( function(i, index) {
                    return (
                        <div className="item" className={i.this.state[`con${i.con}`] ? "on" : "off"}>
                        <button onClick={i.this.closeModal}>close</button>
                            <div class="project-meta">
                            <a target="_blank" href={`${i.url}`}>
                            <img src={`${i.id}`}></img>
                            </a>
                                <h2 class="project-title">{i.title}</h2>
                                    <div class="project-description">
                                        <p>{i.description}</p>
                                        <div>
                                        {i.custom}
                                        </div>
                                        <p>{i.extra}</p>
                                    </div>
                            </div>
                        </div>
                        )
                    })  
                }
                </Modal>

                <div className="img-1">
                  <img src={img1} onClick={(e) => this.handleClick1(e)}></img>
                  <h2>React Map</h2>
                </div>
                <div className="img-2">
                  <img src={img2} onClick={(e) => this.handleClick2(e)}></img>
                  <h2>My Reads</h2>
                </div>
                <div className="img-3">
                  <img src={img3} onClick={(e) => this.handleClick3(e)}></img>
                  <h2>Memory Game</h2>
                </div>
                <div className="img-4">
                  <img src={img4} onClick={(e) => this.handleClick4(e)}></img>
                  <h2>Personal web-site template</h2>
                </div>
                <div className="img-5">
                  <img src={img5} onClick={(e) => this.handleClick5(e)}></img>
                  <h2>Feed Reader Testing</h2>
                </div>
                <div className="img-6">
                  <img src={img6} onClick={(e) => this.handleClick6(e)}></img>
                  <h2>Restaurant Reviews</h2>
                </div>
            </div>
        )
    }
}

export default WorkPortfolio