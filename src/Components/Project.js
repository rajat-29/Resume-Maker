import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Project extends Component {

    constructor(props) {
        super(props);

        this.state = {
            techSkill: '',
            nontechSkill: '',

            projectName: '',
            desc: '',
            startDate: '',
            endDate: '',
            skill: '',
        }

        this.continue = this.continue.bind(this);
        this.back = this.back.bind(this);

        this.project = this.project.bind(this);
        this.description = this.description.bind(this);
        this.startDate = this.startDate.bind(this);
        this.endDate = this.endDate.bind(this);
        this.skill = this.skill.bind(this);
    }

    project(event) {
        this.setState({
            projectName: event.target.value,
        })
    }

    description(event) {
        this.setState({
            description: event.target.value,
        })
    }

    startDate(event) {
        this.setState({
            startDate: event.target.value,
        })
    }

    endDate(event) {
        this.setState({
            endDate: event.target.value,
        })
    }

    skill(event) {
        this.setState({
            skill: event.target.value,
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
            <div className="container-fluid back">
                <div className="row">
                <div className="col-sm-3">
                        <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v172-tang-70-icons_2.jpg?auto=format&bg=transparent&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-3.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=e2fc33696f04ac0b532f54282547bdb2" className="profileImage"></img>
                    </div>
                    <div className="formStyle col-sm-6">
                        <form noValidate autoComplete="off">
                            <h2>Projects</h2><br />

                            <TextField required
                                label="Project Name : "
                                onChange={this.project}
                                defaultValue={this.state.projectName}
                            />
                            <br /><br />

                            <TextField required
                                label="Project Desciption : "
                                onChange={this.description}
                                defaultValue={this.state.description}
                            />
                            <br /><br />

                            <TextField required
                                label="Start Date : "
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.startDate}
                                defaultValue={this.state.startDate}
                            />
                            <br /><br />

                            <TextField required
                                label="End Date : "
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={this.endDate}
                                defaultValue={this.state.endDate}
                            />
                            <br /><br />

                            <TextField required
                                label="Skill Used  : "
                                onChange={this.skill}
                                defaultValue={this.state.skill}
                            />
                            <br /><br />

                            <Button variant="light" onClick={handleChanges('projects', this.state)}>Save Details</Button>
                            <br /><br />

                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Project Name</th>
                                        <th>Project Description</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Skill Used</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {values.projects.length != 0 ?
                                    (values.projects.map((item,index) => (
                                        <tr key={index}>
                                            <td>{item.projectName}</td>
                                            <td>{item.description}</td>
                                            <td>{item.startDate}</td>
                                            <td>{item.endDate}</td>
                                            <td>{item.skill}</td>
                                        </tr>
                                    ))) :
                                    (
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>No Projects !!</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    )
                                    }
                                </tbody>
                            </Table>

                        <Button variant="contained" color="primary" className="m-2" onClick={this.back}>Previous</Button>
                        <Button variant="contained" color="primary" className="m-2" onClick={this.continue}>Next</Button>
                        
                        </form>
                    </div>
                    <div className="col-sm-3">
                        <img src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/19795616721571183081-512.png" className="profileImage"></img>
                    </div>
                </div>
            </div>
        )
    }

}

export default Project; 