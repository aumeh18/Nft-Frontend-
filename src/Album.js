
import { Link } from 'react-router-dom';

function Album() {

    return (

        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="flex-shrink-0 p-3 bg-white" style={{ "width": "280px", "height": "100%"}}>
                        <Link to
                            ="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                            <svg className="bi me-2" width="30" height="24"></svg>
                            <span className="fs-5 fw-semibold">Collapsible</span>
                        </Link>
                        <ul className="list-unstyled ps-0">
                            <li className="mb-1">
                                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                                    Home
                                </button>
                                <div className="collapse show" id="home-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li><Link to
                                            ="#" className="link-dark rounded">Overview</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Updates</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Reports</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                                    Explore
                                </button>
                                <div className="collapse" id="dashboard-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li><Link to
                                            ="#" className="link-dark rounded">Overview</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Weekly</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Monthly</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Annually</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="mb-1">
                                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                                    Messages
                                </button>
                                <div className="collapse" id="orders-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li><Link to
                                            ="#" className="link-dark rounded">New</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Processed</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Shipped</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Returned</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="border-top my-3"></li>
                            <li className="mb-1">
                                <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                    Account
                                </button>
                                <div className="collapse" id="account-collapse">
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                        <li><Link to
                                            ="#" className="link-dark rounded">New...</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Profile</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Settings</Link></li>
                                        <li><Link to
                                            ="#" className="link-dark rounded">Sign out</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card card card">
                        <div style={{ "width": "100%", "height": "0", "padding-bottom": "100%", "position": "relative", }}>
                        <img src="avatar.png" alt="Avatar" class="avatar" style={{"vertical-align": "middle","width": "50px", "height": "50px" ,"border-radius": "50%"}}/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div style={{ "width": "100%", "height": "0", "padding-bottom": "100%", "position": "relative" }}>
                            <img src="./EcstaticAcceptableCanine-size_restricted.gif" width="100%" height="100%" style={{ "position": "absolute" }} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <div className="card">
                            <div style={{ "width": "100%", "height": "0", "padding-bottom": "100%", "position": "relative" }}>
                                <img src="./EcstaticAcceptableCanine-size_restricted.gif" width="100%" height="100%" style={{ "position": "absolute" }} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
       


    )
}

export default Album;