import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {

    render() {
        console.log(this.props.mode);

        const changed = () => {
            return this.props.mode === 'light' ? 'dark' : 'light';
        }

        return (

            <nav className={` fixed-top navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand start1" to="/home"> Daily News </Link>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item text-center   ">
                                <Link className="nav-link" aria-current="page" to="/">Home </Link>
                            </li>

                            <li className="nav-item text-center  "> <Link className="nav-link" to="/business"> Business      </Link> </li>
                            <li className="nav-item text-center "> <Link className="nav-link" to="/entertainment"> Entertainment </Link> </li>
                            <li className="nav-item text-center "> <Link className="nav-link" to="/general"> General       </Link> </li>
                            <li className="nav-item text-center "> <Link className="nav-link" to="/health"> Health        </Link> </li>
                            <li className="nav-item text-center "> <Link className="nav-link" to="/science"> Science       </Link> </li>
                            <li className="nav-item text-center "> <Link className="nav-link" to="/sports"> Sports        </Link> </li>
                            <li className="nav-item text-center "> <Link className="nav-link" to="/technology"> Technology    </Link> </li>

                            
                        </ul>
                        <div className="form-check form-switch  d-flex justify-content-center  ">
                                <input onClick={this.props.toggleMode} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                <label className={`form-check-label text-${changed()} mx-2 `} htmlFor="flexSwitchCheckDefault">
                                   <span>  </span> {changed() === 'light' ? 'Dark Mode ' : 'Light Mode '}    </label>
                            </div>

                    </div>
                </div>
            </nav>


        )
    }
}

export default Navbar
