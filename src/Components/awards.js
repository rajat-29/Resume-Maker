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
            awards: '',
        }

        this.awards = this.awards.bind(this);
        this.continue = this.continue.bind(this);
        this.back = this.back.bind(this);
    }

    awards(event) {
        this.setState({
            awards : event.target.value,
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
                            <h2>Awards / Achievements</h2><br />

                            <TextField required
                                label="Awards : "
                                onChange={this.awards}
                                defaultValue={this.state.awards}
                            />

                            <Fab color="primary" onClick={handleChanges('awards',this.state.awards)}>
                                <AddIcon />
                            </Fab>
                            <br /><br />

                            <Table striped bordered hover>
                                <tbody>
                                    {values.awards.map((item,index) => (
                                            <tr key={index}> 
                                                <td>{item}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                            <br /><br />
                            
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