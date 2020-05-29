import React, { Component } from 'react'
import Front from './StartPage'


class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            step: 0,
        }
    }

    render() {
        
        switch (this.state.step) {
            case 0:
                return (
                    <Front nextStep={this.nextStep} />
                )
        }
    }
}

export default Form;