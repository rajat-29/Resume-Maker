import React, { Component } from 'react'
import Front from './StartPage'
import PersonalDetails from './PersonalDetails';
import EducationalDetails from './EducationalDetails';

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            step: 0,
            name: '',
            email: '',
            mobile: '',
            city: '',
            github: '',
            linkedin: '',
            bio: '',
            university: '',
            location: '',
            degree: '',
            startYear: '',
            endYear: '',
            cgpa: '',
        }

        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
    }

    nextStep(event) {
        const { step } = this.state;
        this.setState({
            step : step + 1,
        });
    }

    prevStep(event) {
        const { step } = this.state;
        this.setState({
            step : step - 1,
        });
    }

    handleChanges = (input, value) => event => {
        this.setState({
            [input] : event.target.value,
        })
    }


    render() {
        
        switch (this.state.step) {
            case 0:
                return (
                    <Front nextStep={this.nextStep} />
                )
            case 1:
                return (
                    <PersonalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChanges={this.handleChanges} values={this.state}/>
                )
            case 2:
                return (
                    <EducationalDetails nextStep={this.nextStep} prevStep={this.prevStep} handleChanges={this.handleChanges} values={this.state}/>
            )
                
        }
    }
}

export default Form;