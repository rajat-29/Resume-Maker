import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class StartPage extends Component {

    constructor(props) {
        super(props);

        this.continue = this.continue.bind(this);
    }

    continue(event) {
        this.props.nextStep();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div  className="list-group">
  
                        <button type="button" className="list-group-item" onClick={this.continue}>Personal Details </button>
                        <button type="button" className="list-group-item" disabled>Educational Background</button>
                        <button type="button" className="list-group-item" disabled>Skills</button>
                        <button type="button" className="list-group-item" disabled>Projects Details</button>
                        <button type="button" className="list-group-item" disabled>Experience</button>
                        <button type="button" className="list-group-item" disabled>Awards / Achievements</button>
                        
                        <Button type="button" variant="outline-success" className="mt-4" size="lg" onClick={this.continue}>Start</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartPage;