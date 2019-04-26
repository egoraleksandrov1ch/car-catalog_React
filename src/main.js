import React from 'react';
import AddContainer from './addcontainer';
import Container from './container';

const catalog = [
    {
        carManufacturer: 'Mercedes-Benz',
        carModel: 'CLA200',
        color: 'white',
        productionYear: '2019',
        typeOfFuel: 'petrol',
        volumeOfCar: '1.6',
        price: '35600',
        carDescription: 'New car',
        photoCar: 'img/cla.jpeg'
    },
    {
        carManufacturer: 'Mercedes-Benz',
        carModel: 'GLE350',
        color: 'white',
        productionYear: '2017',
        typeOfFuel: 'diesel',
        volumeOfCar: '3',
        price: '69500',
        carDescription: 'Original PTS. 1 owner Guaranteed by the manufacturer. Factory paintwork. Full set of keys',
        photoCar: 'img/gle.jpeg'
    },
    {
        carManufacturer: 'Mercedes-Benz',
        carModel: 'SL350',
        color: 'gray',
        productionYear: '2012',
        typeOfFuel: 'petrol',
        volumeOfCar: '3.5',
        price: '41850',
        carDescription: 'The car is in perfect condition, all in its own paint, one owner! All history service from an authorized dealer, original mileage. Maximum grade! Rich equipment. Beautiful car with a small and original mileage only for you at the authorized BMW dealer.',
        photoCar: 'img/sl350.jpeg'
    },
    {
        carManufacturer: 'Porsche',
        carModel: 'Boxster',
        color: 'green',
        productionYear: '2003',
        typeOfFuel: 'petrol',
        volumeOfCar: '2.7',
        price: '12500',
        carDescription: 'Boxster in good condition. In Belarus since 2011 from the USA. There are photos from the auction which came. Reaches the Alps and back without any problems! Checked;) Mid-motor classic on the mechanics, a rare color Dark Teal. Motor 2.7 is the most trouble-free and reliable - not subject to bully. No leaks and no problems. All ownership history is on the drive. Just do not ride. For the winter in the garage. I answer only the adequate questions of people who understand. The price is discussed in the presence of money, I will consider exchange options.',
        photoCar: 'img/boxster.jpeg'
    },
    {
        carManufacturer: 'Porsche',
        carModel: 'Macan',
        color: 'blue',
        productionYear: '2016',
        typeOfFuel: 'diesel',
        volumeOfCar: '3',
        price: '48900',
        carDescription: 'none',
        photoCar: 'img/macan.jpeg'
    },
    {
        carManufacturer: 'Porsche',
        carModel: 'Panamera Turbo',
        color: 'silver',
        productionYear: '2018',
        typeOfFuel: 'petrol',
        volumeOfCar: '4',
        price: '195000',
        carDescription: 'none',
        photoCar: 'img/panamera.jpeg'
    },
    {
        carManufacturer: 'Tesla',
        carModel: 'Model X',
        color: 'silver',
        productionYear: '2017',
        typeOfFuel: 'electric',
        volumeOfCar: '-',
        price: '119227',
        carDescription: 'Uragan: 3.1 seconds up to 100 km / h. Power - 772 hp PURCHASE ON CREDIT / LEASING IS POSSIBLE European version: 8 years warranty for the battery, engines and drive, 4 years for everything else.',
        photoCar: 'img/modelx.jpeg'
    },
    {
        carManufacturer: 'Tesla',
        carModel: 'Model S',
        color: 'red',
        productionYear: '2016',
        typeOfFuel: 'electric',
        volumeOfCar: '-',
        price: '63500',
        carDescription: 'none',
        photoCar: 'img/models.jpeg'
    },
    {
        carManufacturer: 'Tesla',
        carModel: 'Model 3',
        color: 'red',
        productionYear: '2018',
        typeOfFuel: 'electric',
        volumeOfCar: '-',
        price: '69900',
        carDescription: 'none',
        photoCar: 'img/model3.jpeg'
    },
    {
        carManufacturer: 'Audi',
        carModel: 'R8',
        color: 'yellow',
        productionYear: '2018',
        typeOfFuel: 'petrol',
        volumeOfCar: '5.2',
        price: '153625',
        carDescription: 'New car from the warehouse of the official dealer in Moscow. Delivery to Minsk insured by auto. Price is excluding delivery of the car to the Republic of Belarus. Exact information on a complete set and on existence specify at our managers. It is possible to purchase a car in leasing, credit. Call!',
        photoCar: 'img/r8.jpeg'
    },
    {
        carManufacturer: 'Audi',
        carModel: 'A7',
        color: 'black',
        productionYear: '2011',
        typeOfFuel: 'petrol',
        volumeOfCar: '3',
        price: '24700',
        carDescription: 'Pre-call to view this vehicle. Regardless of the weather, you can comfortably and carefully inspect the car that interests you in our car dealership. We will be happy to answer all your questions. We invite you to Test Drive! Ability to pass any service station.',
        photoCar: 'img/a7.jpeg'
    },
    {
        carManufacturer: 'Audi',
        carModel: 'Q3',
        color: 'blue',
        productionYear: '2018',
        typeOfFuel: 'petrol',
        volumeOfCar: '2',
        price: '30846',
        carDescription: 'New car from the warehouse of the official dealer in Moscow. Delivery to Minsk insured by auto. Price is excluding delivery of the car to the Republic of Belarus. Exact information on a complete set and on existence specify at our managers. It is possible to purchase a car in leasing, credit. Call!',
        photoCar: 'img/q3.jpeg'
    }
];
export default class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            catalogArr: [],
            nameCar: [],
        };
    };
    componentDidMount () {
        let newArr = [...catalog];
        let arrTwo = [];
        let name;
        for (let i = 0; i < newArr.length; i++) {
            if(newArr[i].carManufacturer !== name) {
                name = newArr[i].carManufacturer;
                arrTwo.push(name);
            }
        }
        this.setState({
            catalogArr: newArr,
            nameCar: arrTwo,
        }, () => console.log(this.state.catalogArr));
    };
    // newCar (car) {
    //     let newArr = [...this.state.catalogArr];
    //     newArr.push(car);
    //     console.log(this.state.catalogArr);
    //     let arrTwo = [];
    //     let name;
    //     for (let i = 0; i < newArr.length; i++) {
    //         if(newArr[i].carManufacturer !== name) {
    //             name = newArr[i].carManufacturer;
    //             arrTwo.push(name);
    //         }
    //     }
    //     this.setState({
    //         catalogArr: newArr,
    //         nameCar: arrTwo,
    //     });
    // };
    render () {
        let newContainer = this.state.catalogArr.map( (car, index) => {
            return (
                <Container 
                    key={index}
                    car={car}
                />
            )
        });
        let nameCar = this.state.nameCar.map( (car,index) => {
            return (
                <a href='#' className='dropdown-item' key={index}>
                    {car}
                </a>
            )
        });
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                        <a className='navbar-brand' href='#'>Car-catalog</a>
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
                                        {nameCar}
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
                    <AddContainer 
                        newCar={this.newCar}
                    />
                    <section className='d-flex justify-content-around flex-wrap'>
                        {newContainer}
                    </section>
                </main>
            </div>
        )
    };
}