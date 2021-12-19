








function Faq() {


    return (


        <center style={{"padding-top":"50px", "padding-bottom":"50px"}}>
            <div className="accordion col-sm-4 col-md-5 sidebar" id="accordionExample" style={{"width": "60.66666667%"}}>
                <h2 style={{ "color": "white" }} >  <strong>Frequently Asked Questions</strong></h2>
                <div className="accordion-item" style={{ "background-color": "#303030", "margin-bottom": "5px" }}>
                    <h2 className="accordion-header" id="headingOne" style={{ "background-color": "#303030" }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ "background-color": "#303030" }}>
                            <h4 style={{ "color": "white" }} >Can I try Hippy for free?</h4>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                        <div className="accordion-body">
                            <h5 style={{ "color": "white", "text-align": "left" }}>Yes, you get a free trial period when you sign up to HIPPY – and you can cancel your account at any time.</h5>
                        </div>
                    </div>
                </div>


                <div className="accordion-item" style={{ "background-color": "#303030", "margin-bottom": "5px" }}>
                    <h2 className="accordion-header" id="headingTwo" style={{ "background-color": "#303030" }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ "background-color": "#303030" }}>
                            <h4 style={{ "color": "white" }}>Can I import my playlists from other streaming services I use?</h4>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h5 style={{ "color": "white", "text-align": "left" }}>Yes, we want your transition to HIPPY to be as smooth as possible. You can import playlists here.</h5>
                        </div>
                    </div>
                </div>



                <div className="accordion-item" style={{ "background-color": "#303030" }}>
                    <h2 className="accordion-header" id="headingThree" style={{ "background-color": "#303030" }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ "background-color": "#303030" }}>
                            <h4 style={{ "color": "white" }}>How do I cancel?</h4>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h5 style={{ "color": "white", "text-align": "left" }}>HIPPY is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </center>


    )

}

export default Faq;
