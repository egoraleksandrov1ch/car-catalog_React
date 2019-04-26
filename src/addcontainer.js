import React from 'react';

export default class AddContainer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            carManufacturer: '',
            carModel: '',
            color: '',
            productionYear: '',
            typeOfFuel: '',
            volumeOfCar: '',
            price: '',
            carDescription: '',
            carPhoto: '',
        }
        this.carManufacturer = this.carManufacturer.bind(this);
        this.carModel = this.carModel.bind(this);
        this.color = this.color.bind(this);
        this.productionYear = this.productionYear.bind(this);
        this.typeOfFuel = this.typeOfFuel.bind(this);
        this.volumeOfCar = this.volumeOfCar.bind(this);
        this.price = this.price.bind(this);
        this.carDescription = this.carDescription.bind(this);
        this.carPhoto = this.carPhoto.bind(this);
        this.addNewContainer = this.addNewContainer.bind(this);
    };
    addNewContainer () {
        let newCar = {
            carManufacturer: this.state.carManufacturer,
            carModel: this.state.carModel,
            color: this.state.color,
            productionYear: this.state.productionYear,
            typeOfFuel: this.state.typeOfFuel,
            volumeOfCar: this.state.volumeOfCar,
            price: this.state.price,
            carDescription: this.state.carDescription,
            photoCar: this.state.carPhoto
        }
        this.props.newCar(newCar);
        this.setState({
            carManufacturer: '',
            carModel: '',
            color: '',
            productionYear: '',
            typeOfFuel: '',
            volumeOfCar: '',
            price: '',
            carDescription: '',
            carPhoto: '',
        });
    };
    carManufacturer (e) {
        this.setState({
            carManufacturer: e.target.value,
        });
    };
    carModel (e) {
        this.setState({
            carModel: e.target.value,
        });
    };
    color (e) {
        this.setState({
            color: e.target.value,
        });
    };
    productionYear (e) {
        this.setState({
            productionYear: e.target.value,
        });
    };
    typeOfFuel (e) {
        this.setState({
            typeOfFuel: e.target.value,
        });
    }
    volumeOfCar (e) {
        this.setState({
            volumeOfCar: e.target.value,
        });
    };
    price (e) {
        this.setState({
            price: e.target.value,
        });
    };
    carDescription (e) {
        this.setState({
            carDescription: e.target.value,
        });
    };
    carPhoto (e) {
        this.setState({
            carPhoto: e.target.value,
        }, () => console.log(this.state.carPhoto));
    }
    render () {
        return (
            <div 
                className='modal fade' 
                id='modalAddContainer' 
                tabIndex='-1' 
                role='dialog' 
                aria-labelledby='exampleModalCenterTitle' 
                aria-hidden='true'
            >
                <div className='modal-dialog modal-dialog-centered' role='document'>
                    <div className='modal-content'>

                        {/* header */}
                        <div className='modal-header'>
                            <h5 className='modal-title' id='exampleModalCenterTitle'>
                                Add new car
                            </h5>
                            <button 
                                className='close' 
                                type='button' 
                                data-dismiss='modal' 
                                aria-label='Close'
                            >
                                <span aria-hidden='true'>
                                    &times;
                                </span>
                            </button>
                        </div>

                        {/* body */}
                        <div className='modal-body'>
                            <form>
                                <div className='input-group mb-3'> {/* Car manufacturer */}
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Car manufacturer' 
                                        aria-label='carManufacturer' 
                                        aria-describedby='basic-addon1'
                                        value={this.state.carManufacturer}
                                        onChange={this.carManufacturer}
                                        required
                                    />
                                </div>

                                <div className='input-group mb-3'> {/* Car model */}
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Car model' 
                                        aria-label='carModel' 
                                        aria-describedby='basic-addon1'
                                        value={this.state.carModel}
                                        onChange={this.carModel}
                                        required
                                    />
                                </div>

                                <div className='input-group mb-3'> {/* Color */}
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Color' 
                                        aria-label='color' 
                                        aria-describedby='basic-addon1'
                                        value={this.state.color}
                                        onChange={this.color}
                                    />
                                </div>

                                <div className='input-group mb-3'> {/* Production year */}
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Production year' 
                                        aria-label='productionYear' 
                                        aria-describedby='basic-addon1'
                                        value={this.state.productionYear}
                                        onChange={this.productionYear}
                                        required
                                    />
                                </div>

                                <div className='input-group mb-3'> {/* Type of fuel */}
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Type of fuel' 
                                        aria-label='typeOfFuel' 
                                        aria-describedby='basic-addon1'
                                        value={this.state.typeOfFuel}
                                        onChange={this.typeOfFuel}
                                        required
                                    />
                                </div>

                                <div className='input-group mb-3'> {/* Volume of car */}
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Volume of car' 
                                        aria-label='volumeOfCar' 
                                        aria-describedby='basic-addon1'
                                        value={this.state.volumeOfCar}
                                        onChange={this.volumeOfCar}
                                        required
                                    />
                                    <div className='input-group-append'>
                                        <span className='input-group-text'>
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className='input-group mb-3'> {/* Price */}
                                    <div className='input-group-prepend'>
                                        <span className='input-group-text'>
                                            $
                                        </span>
                                    </div>
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Price'
                                        value={this.state.price}
                                        onChange={this.price}
                                        required
                                    />
                                    <div className='input-group-append'>
                                        <span className='input-group-text'>
                                            .00
                                        </span>
                                    </div>
                                </div>

                                <div className='input-group'> {/* Car description */}
                                    <textarea 
                                        className='form-control' 
                                        placeholder='Car description'
                                        value={this.state.carDescription}
                                        onChange={this.carDescription}
                                    >

                                    </textarea>
                                </div>

                                <div className='form-group'> {/* Photo car */}
                                    <label htmlFor='exampleFormControlFile1'>
                                        Photo car
                                    </label>
                                    <input 
                                        type='file' 
                                        className='form-control-file' 
                                        id='exampleFormControlFile1' 
                                        accept='image/jpeg, image/png'
                                        value={this.state.carPhoto}
                                        onChange={this.carPhoto}
                                        required
                                    />
                                </div>
                            </form>
                        </div>

                        {/* footer */}
                        <div className='modal-footer'>
                            <button 
                                className='btn btn-outline-secondary' 
                                type='button' 
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                            <button 
                                type='submit' 
                                className='btn btn-outline-success'
                                data-dismiss='modal'
                                onClick={this.addNewContainer}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}