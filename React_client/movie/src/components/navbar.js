import React, { Component } from 'react'

export default class navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark fixed-top" id="navbar">
            
            <a id="navbar_title" class="navbar-brand" href="#">FLICK DEETS</a>  
            <br/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mr-5 ">
                    <li class="nav-item mx-2">
                        <a class="nav-link" href="/searchcommunities">
                            {/* <i class="fa fa-search" style="font-size:20px;"></i> */}
                        </a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link" href="/register">Register</a>
                    </li>
                </ul>
            </div>
            
        </nav> 
        
        )
    }
}
