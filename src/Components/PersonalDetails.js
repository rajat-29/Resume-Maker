import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class PersonalDetails extends Component {

    constructor(props) {
        super(props);

        this.continue = this.continue.bind(this);
        this.back = this.back.bind(this);
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
                        <img src="https://cdn1.iconfinder.com/data/icons/data-organization-3/66/21-512.png" className="profileImage"></img>
                    </div>
                    <div className="formStyle col-sm-6">
                        <form noValidate autoComplete="off">
                            <h2>Personal Details</h2><br />

                            <TextField required
                                label="Name : "
                                onChange={handleChanges('name')}
                                defaultValue={values.name}
                            />
                            <br /><br />

                            <TextField required
                                label="Email : "
                                onChange={handleChanges('email')}
                                defaultValue={values.email}
                            />
                            <br /><br />

                            <TextField required
                                label="Mobile Number : "
                                type="number"
                                onChange={handleChanges('mobile')}
                                defaultValue={values.mobile}
                            />
                            <br /><br />

                            <TextField required
                                label="City : "
                                onChange={handleChanges('city')}
                                defaultValue={values.city}
                            />
                            <br /><br />

                            <TextField required
                                label="Github Link : "
                                onChange={handleChanges('github')}
                                defaultValue={values.github}
                            />
                            <br /><br />

                            <TextField required
                                label="Linkedin Link : "
                                onChange={handleChanges('linkedin')}
                                defaultValue={values.linkedin}
                            />
                            <br /><br />

                            <TextField required
                                label="Bio : "
                                multiline
                                rowMax="10"
                                onChange={handleChanges('bio')}
                                defaultValue={values.bio}
                            />
                            <br /><br />
                            
                            <Button variant="contained" color="primary" className="m-2" onClick={this.back}>Previous</Button>
                            <Button variant="contained" color="primary" className="m-2" onClick={this.continue}>Next</Button>
                        </form>
                    </div>
                    <div className="col-sm-3">
                        <img src="https://cdn1.iconfinder.com/data/icons/data-organization-3/66/21-512.png" className="profileImage"></img>
                    </div>
                </div>
            </div>
        )
    }

}

export default PersonalDetails;