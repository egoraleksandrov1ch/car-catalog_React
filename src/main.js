import React from 'react';
import Container from './container';
import Menu from './menu';

export default class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        };
    };
    render () {
        return (
            <main>
                <header>
                    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                        <a className='navbar-brand'  href='#'>Car-catalog</a>
                        <button className='navbar-toggler' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>All car</a>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a className='nav-link dropdown-toggle' href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Car manufacturer</a>
                                    <div className='dropdown-menu' aria-labelledby="navbarDropdown">
                                        {/* name car teg */}
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>Price</a>
                                </li>
                            </ul> 
                        </div>
                    </nav>
                </header>
            </main>
        )
    };
}