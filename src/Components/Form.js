import React, { Component } from 'react'
import Front from './StartPage'
import PersonalDetails from './PersonalDetails';
import EducationalDetails from './EducationalDetails';
import Skills from './Skills';
import Project from './Project';
import Awards from './awards';
import Experience from './experience';
import Final from './final';

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
            skill: [],
            nonSkill: [],
            projects: [],
            awards: [],
            experience: [],
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

        if([input] == 'skill') {
            const l1 = this.state.skill.concat(value);
            this.setState({
                [input] : l1
            })
        }
        else if([input] == 'nonSkill') {
            const l1 = this.state.nonSkill.concat(value);
            this.setState({
                [input] : l1
            })
        }
        else if([input] == 'projects') {
            const l1 = this.state.projects.concat(value);
            this.setState({
                [input] : l1
            })
        }
        else if([input] == 'awards') {
            const l1 = this.state.awards.concat(value);
            this.setState({
                [input] : l1
            })
        }
        else if([input] == 'experience') {
            const l1 = this.state.experience.concat(value);
            this.setState({
                [input] : l1
            })
        }
        else {
            this.setState({
                [input] : event.target.value,
            })
        } 
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
            case 3:
                return (
                    <Skills nextStep={this.nextStep} prevStep={this.prevStep} handleChanges={this.handleChanges} values={this.state}/>
            )
            case 4:
                return (
                    <Project nextStep={this.nextStep} prevStep={this.prevStep} handleChanges={this.handleChanges} values={this.state}/>
            )
            case 5:
                return (
                    <Awards nextStep={this.nextStep} prevStep={this.prevStep} handleChanges={this.handleChanges} values={this.state}/>
            )
            case 6:
                return (
                    <Experience nextStep={this.nextStep} prevStep={this.prevStep} handleChanges={this.handleChanges} values={this.state}/>
            )
            case 7:
                return (
                    <Final prevStep={this.prevStep}  values={this.state} />
                )
                
        }
    }
}

export default Form;