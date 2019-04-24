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
                tabindex='-1' 
                role='dialog' 
                aria-labelledby='exampleModalCenterTitle' 
                aria-hidden='true'
            >
                <div className='modal-dialog modal-dialog-centered' role='document'>
                    <div className='modal-content'>
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
                        <div className='modal-body'>
                            
                        </div>
                        <div className='modal-footer'>
                            <button 
                                className='btn btn-outline-secondary' 
                                type='button' 
                                data-dismiss='modal'
                            >
                                Close
                            </button>
                            <button 
                                type='button' 
                                className='btn btn-outline-success'
                                onClick={}
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