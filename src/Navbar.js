import React, { Component } from 'react'
import useFetch from "react-fetch-hook";
import logo from './logo.svg';

class Navbar extends Component {
    render() {
        return (
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./logo192.png" alt="" width="24" height="24" class="d-inline-block align-text-top"></img>
                        Git Consulting</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="collapse" href="#posts" role="button" aria-expanded="true" aria-controls="posts">Posts</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Share</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contribute</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Navbar