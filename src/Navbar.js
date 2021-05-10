import React, { Component } from 'react'
import useFetch from "react-fetch-hook";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component {
    render() {
        return (
            <div class="container-fluid">
                <a class="navbar-brand banner-font" href="#">
                    <img src="avatar.jpg" alt="" class="avatar"></img>
                               Git.Consulting</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link
                                activeClass="active"
                                to="posts"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} >

                                <a class="btn nav-link" href="" role="button">Posts</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="btn nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Share</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <span class="navbar-text">
                            Ping
      </span>
                        <li class="nav-item">
                            <a class="nav-link icon-color" href="https://github.com/natemellendorf"><i class="bi-github" role="img" aria-label="GitHub"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link icon-color" href="https://www.linkedin.com/in/nathan-mellendorf/"><i class="bi-linkedin" role="img" aria-label="Linkedin"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link icon-color" href="mailto:nate.mellendorf@gmail.com"><i class="bi-google" role="img" aria-label="Gmail"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar