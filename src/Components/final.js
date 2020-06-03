import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import * as jsPDF from 'jspdf'
import * as html2canvas from 'html2canvas'
import ReactDOM from 'react-dom';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

class final extends Component {

    constructor(props) {
        super(props);
    }

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("download.pdf");
            })
            ;
    }

    pdfExportComponent;
    exportPDFWithMethod = () => {
        savePDF(ReactDOM.findDOMNode(this.pdfExportComponent), { paperSize: 'A4' });
    }

    render() {

    const {values}  = this.props;
    
        return (
            <div className="container">
                <div style={{ border: "2px solid black" }}>
                <PDFExport ref={(component) => this.pdfExportComponent = component} paperSize="A4">
                    <div className="container m-3" id="divToPrint">

                        <div style={{ paddingLeft: "10px" }}>
                            <h3>{values.name}</h3>
                            <h5 style={{ marginBottom: 0 }}>{values.bio}</h5>
                        </div>

                        <div style={{ marginTop: 0, paddingLeft: "10px" }}>
                            <h5>Emailid: {values.email}</h5>
                            <h5>Mobile no: {values.mobile}</h5>
                            <h5>City: {values.citys}</h5>
                            <h5>Github Link: {values.github}</h5>
                            <h5>Linkedin Link: {values.linkedin}</h5>
                        </div>

                        <div className="mt-4">
                            <h4>EDUCATION</h4>
                            <hr />
                            <p><b>{values.university}</b></p>
                            <p>{values.location}</p>
                            <p>Degree: {values.degree}  ({values.startYear} - {values.endYear})</p>
                            <p>CGPA/PER(%) :{values.cgpa}</p>
                        </div>

                        <div className="mt-4">

                            {(values.skill.length == 0 && values.ntskill.length == 0) ? (<h4></h4>) :
                                (<h4>SKILLS</h4>)
                            }<hr />

                            <div className="row">
                                <div className="col-sm-6">
                                    {values.skill.length !== 0 &&
                                        <h5>Technical Skills</h5>}
                                    <ul>
                                        {values.skill.length !== 0 &&
                                            values.skill.map((item, index) => (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="col-sm-6">
                                        {values.nonSkill.length !== 0 &&
                                            <h5>Behavioral Skills</h5>}
                                        <ul>
                                            {values.nonSkill.length !== 0 &&
                                                values.nonSkill.map((item, index) => (
                                                <li key={index}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                </div>
                            </div>

                            <div className="mt-4">
                                {values.projects.length != 0 &&
                                    (<div>
                                        <h4>PROJECTS</h4><hr />
                                        <ul>{
                                            values.projects.map((item, index) => (
                                                <li key={index}>
                                                    <h5>{item.projectName}</h5>
                                                    <p>({item.startDate} - {item.endDate})</p>
                                                    <p>{item.projectName}</p>
                                                    <p>Skills used: {item.skill}</p>
                                                </li>
                                            ))
                                        }
                                        </ul>
                                    </div>
                                    )
                                }
                            </div>

                            <div className="mt-4">
                                {values.awards.length != 0 &&
                                    (<div>
                                        <h4>AWARDS / ACHIEVEMENTS</h4><hr />
                                            <ul>                                            {
                                            values.awards.map((item, index) => (
                                                <li key={index}>
                                                    <p>{item}</p>
                                                </li>
                                            ))
                                            }
                                            </ul>
                                    </div>
                                    )
                                }
                            </div>

                            <div className="mt-4">
                                {values.experience.length != 0 &&
                                (<div>
                                    <h4>Experience</h4><hr />
                                        <ul>
                                        {
                                            values.experience.map((item, index) => (
                                                <li key={index}>
                                                    <h5>{item.companyName}</h5>
                                                    <p>({item.startDate} - {item.endDate})</p>
                                                    <p>{item.jobTitle}</p>
                                                    <p>Skills used:{item.desc}</p>
                                                </li>
                                            ))
                                        }
                                        </ul>
                                </div>
                                )
                                }
                            </div>

                        </div>

                    </div>
                    </PDFExport>

                <div className="mb5">
                        <Button type="button" variant="outline-success" className="mt-4" size="lg" onClick={this.exportPDFWithMethod}> Download resume </Button>
                </div>
            </div>
        </div>
        )
    }

}

export default final;