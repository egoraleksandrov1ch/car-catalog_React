import React from 'react';

export default class Container extends React.Component {
    constructor (props) {
        super(props)
        
    };
    render () {
        return (
            <div className='card' style={ {width: '400px',} }>
                <img src='img/cla.jpeg' className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>
                        mercedes
                    </h5>
                    <p>lorem</p>
                </div>
            </div>
        )
    };
}