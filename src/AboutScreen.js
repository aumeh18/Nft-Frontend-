function AboutScreen() {
    return (
        <div>

            <div>
                <div className="container" style={{ "color": "white" }}>
                    <div className="row">
                        <div className="col-6">
                            <h1>ABOUT NAMS</h1>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                        </div>
                        <div className="col-6">
                            <div style={{ "width": "100%", "height": "0", "padding-bottom": "100%", "position": "relative" }}>
                                <iframe src="https://giphy.com/embed/E3y79zUo2V4v8AFG2V" width="100%" height="100%" frameBorder="0" style={{"position":"absolute"}} class="giphy-embed" allowFullScreen></iframe>
                            </div>
                            <p><a href="https://giphy.com/gifs/doodles-burnttoast-by-burnt-toast-E3y79zUo2V4v8AFG2V"></a></p>


                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
}

export default AboutScreen;