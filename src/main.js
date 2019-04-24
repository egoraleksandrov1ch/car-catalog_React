import React from 'react';
import AddContainer from './addcontainer';
import Container from './container';

export default class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {

        };
    };
    render () {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                        <a className='navbar-brand'  href='#'>Car-catalog</a>
                        <button 
                            className='navbar-toggler' 
                            type='button'
                            data-toggle='collapse'
                            data-target='#navbarSupportedContent'
                            aria-controls='navbarSupportedContent'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>All car</a>
                                </li>
                                <li className='nav-item dropdown'>
                                    <a 
                                        className='nav-link dropdown-toggle' 
                                        href='#'
                                        id='navbarDropdown'
                                        role='button' 
                                        data-toggle='dropdown' 
                                        aria-haspopup='true' 
                                        aria-expanded='false'
                                    >
                                        Car manufacturer
                                    </a>
                                    <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                        {/* name car teg */}
                                    </div>
                                </li>
                                <li className='nav-item'>
                                    <a href='#' className='nav-link'>Price</a>
                                </li>
                            </ul>
                            <button 
                                className='btn btn-outline-success my-2 my-sm-0' 
                                type='button'
                                data-toggle='modal' 
                                data-target='#modalAddContainer'
                            >
                                Add
                            </button>
                        </div>
                    </nav>
                </header>
                <main>
                    <AddContainer />
                    <section className='justify-content-around'>
                        <Container />
                    </section>
                </main>
            </div>
        )
    };
}