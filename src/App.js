import React, { Component } from "react";
import { Card, CardBody, Row } from "reactstrap";
import $ from "jquery";
import "./App.css";

class First extends Component {
    state = {
        formData: {
            companyName: ""
        },
        files: [],
    };
    
    handleChange = async e => {
        readFile(e.target.files[0], this.fileCallback);
        function readFile(file, fileCallback) {
            var reader = new FileReader();
            reader.onload = fileCallback;
            reader.readAsDataURL(file);
        }
    };
  
    fileCallback = e => {
        let file = e.target.result;
        const files = [...this.state.files];
        files.push(file);
        this.setState({ files });
    };
    
    openFileDialog = () => {
        $(".input-field").click();
    };

    onSubmit = async data => {
        console.log("form submitted");
    };

    render() {
        const imgDivs = this.state.files.map((el, index) => {
            return (
                <div key={index} className="upload-input">
                    <img style={{ maxWidth: "100%", maxHeight: "100%" }} alt="propertyImage"
                        src={el ? el : ""} className="upload-output">
                    </img>
                </div>
            );
        });
        
        return (
            <Card>
                <CardBody className="cardBodyWrapper">
                    <div 
                        style={{
                            display: "inline-block",
                            padding: "15px",
                            backgroundColor: "#e7e7ed",
                            width: "100%",
                            float: "left",
                        }} >
                        <Row className="customFlexRow">Section 1 : Add Photos of the property</Row>
                    </div>
                    <input className="input-field" type="file" style={{ display: "none" }} onChange={e => this.handleChange(e)} />
                    <div className="row m-tp">{imgDivs}
                        <div className="col-md-4">
                            <div className="upload-input" onClick={this.openFileDialog}>
                                <div className="mid-plus">
                                    <span className="plus">+</span>
                                    <p>Upload your File</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <center><button type="submit" className={"btn btn-secondary"}
                        style={{
                            backgroundColor: "#2699fb",
                            color: "#FFF",
                            fontWeight: "bold",
                        }}>Assign to Client
                    </button></center>
                </CardBody>
            </Card>
            );
        }
    }
export default First;
