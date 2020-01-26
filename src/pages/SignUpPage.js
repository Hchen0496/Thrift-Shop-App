import React from 'react'; 
import '../App.css';


class SignUpPage extends React.Component {
    render() {
        return (
            <div className="bg-sign-up"> {/*Implement first background image*/}
                <div className="form-inline">    
                    <div className="row">
                        <div className="sign-up-header">
                            Registration
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="password"
                            />
                        </div>
                        <div className="col-lg-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Re-enter password"
                            />
                            
                        </div>
                        <div className="col-lg-12">
                        <button type="button" class="btn btn-primary">Submit</button>
                        </div>         
                    </div>
                </div>
            </div>         
        ); 
    }
}

export default SignUpPage;