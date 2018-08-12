import React, {Component} from 'react';

class FindMe extends Component {

    render() {
        return (
            <div id="find-me">
                <h2>FIND ME</h2>
                <hr class="star-dark"></hr>
                <div class="container">
                    <a target="_blank" href="https://www.freecodecamp.org/neveh22">
                        <i class="fab fa-free-code-camp fa-5x"></i>
                    </a>
                    <a target="_blank" href="https://github.com/nevehallon">
                        <i class="fab fa-github fa-5x"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/neveh-allon/">
                        <i class="fab fa-linkedin fa-5x"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default FindMe