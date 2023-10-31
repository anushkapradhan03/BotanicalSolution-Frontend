/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef } from 'react'

// Data
import states from '/src/data/states.json';

// import { BsFillArrowLeftSquareFill } from 'react-icons/bs'

import { Player } from '@lottiefiles/react-lottie-player';

import Swal from 'sweetalert2';

import axios from 'axios';
import { useNavigate, useNavigation } from 'react-router-dom';

export default function hero({ searchfunction }) {

    const lottieref = useRef(null)

    const [userAddress, setUserAddress] = useState({
        locality: "",
        city: "",
        state: "",
        country: "India"
    })

    function handlechange(event) {
        const { name, value } = event.target
        setUserAddress(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function search() {
        // console.log(userAddress)
        searchfunction(userAddress)
        setUserAddress({
            locality: "",
            city: "",
            state: "",
            country: "India"
        });
    }
    const navigate = useNavigate()

    function handleOnClick(e) {
        e.preventDefault();

        navigate('/plantselect')
    }

    return (
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row gy-4 d-flex justify-content-between">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-end">
                        <h2 data-aos="fade-up">Find your perfect plant match</h2>
                        <p data-aos="fade-up" data-aos-delay="100">Simplify the process of selecting plants and create a
                            healthy and thriving garden. Additionally, choose from a wide variety to purchase plants and gardening
                            accessories,
                            making the process of gardening even more convenient.</p>

                        <div className="buttons d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                            <button type="button" className="button btn btn-primary" onClick={handleOnClick}>Get Suggestion</button>
                            <button type="button" className="button btn btn-primary" onClick={handleOnClick}>Select Image</button>
                        </div>
                        {/* <input type="file" hidden id="plant-image" accept="image/*" className="plant-image" onChange={handleImageChange} /> */}

                        {/* <form action="#" name="search-form" className="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                            <input form="search-form" name='locality' type="text" className="form-control" placeholder="Locality" value={userAddress.locality} onChange={handlechange}></input>
                            <input form="search-form" name='city' type="text" className="form-control" placeholder="City" value={userAddress.city} onChange={handlechange}></input>
                            <select form="search-form" name='state' type="text" className="form-control" placeholder="State" defaultValue={""} value={userAddress.state} onChange={handlechange}>
                                <option value="" disabled hidden>State</option>
                                {states.map((state, index) => {
                                    return (
                                        <option key={index} value={state.name}>{state.name}</option>
                                    )
                                })}
                            </select>
                            <input form="search-form" name='country' type="text" className="form-control" placeholder="Country" onChange={handlechange}></input>
                            <button form="search-form" type="button" className="btn btn-primary" onClick={() => { search() }}>Search</button>
                        </form> */}

                        {/* <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Air Quality Index</p><i className="bi bi-arrow-left-square-fill"><BsFillArrowLeftSquareFill /></i>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Sunlight</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Rainfall</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                                        className="purecounter"></span>
                                    <p>Soil</p>
                                </div>
                            </div>

                        </div> */}
                    </div>

                    <div className="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        {/* <img src="/src/assets/img/hero-img.svg" className="img-fluid mb-3 mb-lg-0" alt="" /> */}
                        <Player
                            ref={lottieref} // set the ref to your class instance
                            autoplay={true}
                            loop={true}
                            src="https://assets8.lottiefiles.com/packages/lf20_xd9ypluc.json"
                            className="hero-lottie img-fluid mb-3 mb-lg-0"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
