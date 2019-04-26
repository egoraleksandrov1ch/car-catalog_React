import React from 'react';

export default class Container extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            view: true,
        }
        this.openMore = this.openMore.bind(this);
    };
    openMore () {
        this.setState({
            view: !this.state.view,
        });
    };
    render () {
        let arrow = this.state.view ? '↓' : '↑';
        return (
            <div className='card position-relative' style={ {width: '400px', margin: '10px 0'} }>
                <img src={this.props.car.photoCar} className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>
                        {this.props.car.carManufacturer} {this.props.car.carModel} 
                    </h5>
                    <p className='card-text'>
                        Color: {this.props.car.color}
                    </p>
                    <p className='card-text'>
                        Price: {this.props.car.price} $
                    </p>
                    <p className='card-text' style={{display:this.state.view ? 'none' : 'block'}}>
                        Type of fuel: {this.props.car.typeOfFuel}
                    </p>
                    <p className='card-text' style={{display:this.state.view ? 'none' : 'block'}}>
                        Volume of car: {this.props.car.volumeOfCar} L
                    </p>
                    <p className='card-text' style={{display:this.state.view ? 'none' : 'block'}}>
                        Production year: {this.props.car.productionYear}
                    </p>
                    <p className='card-text' style={{display:this.state.view ? 'none' : 'block'}}>
                        Description: {this.props.car.carDescription}
                    </p>
                    <button 
                        type='button' 
                        className='btn btn-outline-success position-absolute' 
                        style={ {bottom: '20px', right: '20px'} }
                        onClick={this.openMore}
                    >
                        {arrow}
                    </button>
                </div>
            </div>
        )
    };
}