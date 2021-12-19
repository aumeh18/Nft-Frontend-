


function SignUp() {
   
   

    return (


        <div className="phase1">

            <div className="form-box" style={{"marginTop": "120px"}}>
                <div className="header-text" style={{ "color": "white" }}>Sign-up</div>


                <input className="field form-control" name="firstName" type="text" placeholder="Choose Username" />

                <input className="field form-control" name="email" type="text" placeholder="Email Address"
                />

                <input className="field form-control" name="password" type="password" placeholder="password" />

                <input className="field form-control" name="password" type="password" placeholder="password" />

                <label for="terms"></label><span style={{ "color": "white" }}>Agree with <a href="...">Terms & Conditions</a></span>

                <div style={{ "display": "none" }} className="alert alert-danger user-errors">
                </div>

                <div style={{ "display": "none" }} className="alert alert-success user-success">
                    You have registered successfully!
                </div>

                <button className="btn btn-primary" onClick="registerUser()" style={{ "padding": "10px", "fontsize": "16px", "borderradius": "10px", "width": "10rem", "margin": "10px 45px" }}>
                    SIGN UP
                </button>

            </div>

        </div>


    )
}
export default SignUp;