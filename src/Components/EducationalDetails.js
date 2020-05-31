import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EducationalDetails extends Component {

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
                        <img src="https://png.pngtree.com/svg/20170525/curriculum_20182.png" className="profileImage"></img>
                    </div>
                    <div className="formStyle col-sm-6">
                        <form noValidate autoComplete="off">
                            <h2>Educational Details</h2><br />

                            <TextField required
                                label="University Name : "
                                onChange={handleChanges('university')}
                                defaultValue={values.university}
                            />
                            <br /><br />

                            <TextField required
                                label="Location : "
                                onChange={handleChanges('location')}
                                defaultValue={values.location}
                            />
                            <br /><br />

                            <TextField required
                                label="Degree : "
                                onChange={handleChanges('degree')}
                                defaultValue={values.degree}
                            />
                            <br /><br />

                            <TextField required
                                label="Starting Year : "
                                type="number"
                                onChange={handleChanges('startYear')}
                                defaultValue={values.startYear}
                            />
                            <br /><br />

                            <TextField required
                                label="Ending Year : "
                                type="number"
                                onChange={handleChanges('endYear')}
                                defaultValue={values.endYear}
                            />
                            <br /><br />

                            <TextField required
                                label="CGPA : "
                                onChange={handleChanges('cgpa')}
                                defaultValue={values.cgpa}
                            />
                            <br /><br />

                            <Button variant="contained" color="primary" className="m-2" onClick={this.back}>Previous</Button>
                            <Button variant="contained" color="primary" className="m-2" onClick={this.continue}>Next</Button>
                        </form>
                    </div>
                    <div className="col-sm-3">
                        <img src="https://png.pngtree.com/svg/20170525/curriculum_20182.png" className="profileImage"></img>
                    </div>
                </div>
            </div>
        )
    }

}

export default EducationalDetails;