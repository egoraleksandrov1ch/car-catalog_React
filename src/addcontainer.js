import React from 'react';

export default class AddContainer extends React.Component {
    constructor (props) {
        super(props)
        
    };
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
                                    />
                                </div>

                                <div className='input-group mb-3'> {/* Production year */}
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Production year' 
                                        aria-label='productionYear' 
                                        aria-describedby='basic-addon1' 
                                        required
                                    />
                                </div>

                                <div className='input-group mb-3'> {/* Type of fuel */}
                                    <div className='input-group-prepend'>
                                        <label className='input-group-text' htmlFor='inputGroupSelect'>
                                            Type of fuel
                                        </label>
                                    </div>
                                    <select className='custom-select' id='inputGroupSelect'>
                                        <option selected>Choose..</option>
                                        <option value='1'>petrol</option>
                                        <option value='2'>diesel</option>
                                        <option value='3'>gas</option>
                                        <option value='4'>electric</option>
                                    </select>
                                </div>

                                <div className='input-group mb-3'> {/* Volume of car */}
                                    <input 
                                        type='text' 
                                        className='form-control' 
                                        placeholder='Volume of car' 
                                        aria-label='volumeOfCar' 
                                        aria-describedby='basic-addon1' 
                                        required
                                    />
                                    <div className='input-group-append'>
                                        <span className='input-group-text'>
                                            L
                                        </span>
                                    </div>
                                </div>

                                <div className='input-group mb-3 justify-content-around'> {/* Specifications */}

                                    <div className='flex-column'> {/* First block specifications */}
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck1' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck1'>
                                                Air conditioning
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck2' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck2'>
                                                Leather interior
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck3' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck3'>
                                                Alloy wheels
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck4' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck4'>    
                                                Xenon
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck5' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck5'>    
                                                Parktronic
                                            </label>
                                        </div>
                                    </div>

                                    <div className='flex-column'> {/* Second block specifications */}
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck6' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck6'>    
                                                Heated seats
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck7' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck7'> 
                                                Stability Control System
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck8' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck8'> 
                                                Navigation
                                            </label>
                                        </div>
                                        <div className='form-check'>
                                            <input 
                                                type='checkbox' 
                                                className='form-check-input' 
                                                value='' 
                                                id='defaultCheck9' 
                                            />
                                            <label className='form-check-label' htmlFor='defaultCheck9'>
                                                Speakerphone
                                            </label>
                                        </div>
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
                                        required
                                    />
                                    <div className='input-group-append'>
                                        <span className='input-group-text'>
                                            .00
                                        </span>
                                    </div>
                                </div>

                                <div className='input-group'> {/* Car description */}
                                    <textarea className='form-control' placeholder='Car description'>

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