import React, {Component} from 'react';
import './navbar.css';

export default class Navbar extends Component{
    render(){
        return(
            <div className='navbar'>
                <header>
                    <h2>MicroURL</h2>
                <nav>
                <ul class='links'>
                    <li><a href= '#'>Home</a></li>
                    <li><a href= '#'>About</a></li>
                    <li><a href= '#'>Pricing</a></li>
                    <li><a href= '#'>Solutions</a></li>
                </ul>
                </nav>
                <a class='cta' href='#'><button>Login</button></a>
                </header>

            </div>
        );
    }

}