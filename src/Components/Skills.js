import React , {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Table from 'react-bootstrap/Table';

import Button from '@material-ui/core/Button';

class Skills extends Component {

    constructor(props) {
        super(props);

        this.state = {
            techSkill: '',
            nontechSkill: ''
        }

        this.addToTechSkill = this.addToTechSkill.bind(this);
        this.addToNonTechSkill = this.addToNonTechSkill.bind(this);
        this.continue = this.continue.bind(this);
        this.back = this.back.bind(this);
    }

    addToTechSkill(event) {
        this.setState({
            techSkill : event.target.value,
        })
    }

    addToNonTechSkill(event) {
        this.setState({
            nontechSkill : event.target.value,
        })
    }

    continue(event) {
        this.props.nextStep();
    }

    back(event) {
        this.props.prevStep();
    }

    render() {

        const { handleChanges,values }  = this.props;

        return (
            <div className="container">
                <div className="row">
                <div className="col-sm-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd8UwUitckpLaxWaZRzLZ46NH4XTI5trC1V6iRTaDAxK5AC8fA&s" className="profileImage"></img>
                    </div>
                    <div className="formStyle col-sm-6">
                        <form noValidate autoComplete="off">
                            <h2>Technical Skills</h2><br />

                            <TextField required
                                label="Tech Skills : "
                                onChange={this.addToTechSkill}
                                defaultValue={this.state.techSkill}
                            />

                            <Fab color="primary" onClick={handleChanges('skill',this.state.techSkill)}>
                                <AddIcon />
                            </Fab>
                            <br /><br />

                            <Table striped bordered hover>
                                <tbody>
                                    {values.skill.map((item,index) => (
                                            <tr key={index}> 
                                                <td>{item}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                            <br /><br /><br />

                            <h2>Non Technical Skills</h2><br />

                            <TextField required
                                label="Non Teh Skills : "
                                onChange={this.addToNonTechSkill}
                                defaultValue={this.state.nontechSkill}
                            />

                            <Fab color="primary" onClick={handleChanges('nonSkill',this.state.nontechSkill)}>
                                <AddIcon />
                            </Fab>
                            <br /><br />

                            <Table striped bordered hover>
                                <tbody>
                                    {values.nonSkill.map((item,index) => (
                                            <tr key={index}> 
                                                <td>{item}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                            <br /><br /><br />
                            
                            <Button variant="contained" color="primary" className="m-2" onClick={this.back}>Previous</Button>
                            <Button variant="contained" color="primary" className="m-2" onClick={this.continue}>Next</Button>
                        </form>
                    </div>
                    <div className="col-sm-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeZkrvQOoz0EZAcwFwuxWdcTM4ZGc4t_TJByGnZ9PpfY2pbXu&s" className="profileImage"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills;