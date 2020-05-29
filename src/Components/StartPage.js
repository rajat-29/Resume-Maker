import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export class StartPage extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div  className="list-group">
  
                        <button type="button" className="list-group-item">Personal Details </button>
                        <button type="button" className="list-group-item" disabled>Educational Background</button>
                        <button type="button" className="list-group-item" disabled>Skills</button>
                        <button type="button" className="list-group-item" disabled>Projects Details</button>
                        <button type="button" className="list-group-item" disabled>Experience</button>
                        <button type="button" className="list-group-item" disabled>Awards / Achievements</button>
                        
                        <Button type="button" variant="outline-success" className="mt-4" size="lg">Start</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StartPage;