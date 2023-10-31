import { useState } from 'react';
import axios from 'axios';

export default function Plantpage() {

    const [result, setResult] = useState(null);

    const [prediction, setPrediction] = useState(false);
    const [detection, setDetection] = useState(false);

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectEnum, setSelectEnum] = useState("solution");

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
        console.log(event.target.files[0]);
    };

    const handleEnumChange = (event) => {
        setSelectEnum(event.target.value.toString());
        console.log(event.target.value.toString());
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('image', selectedImage);
            formData.append('enum', selectEnum);

            await axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/process-image/',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((response) => {
                console.log(response.data);
                setResult(response.data);
                setDetection(true);
            });

        } catch (error) {
            console.error(error);
            // Handle any error that occurs during the request
        }
    };

    const [Temperature, setTemperature] = useState(null);
    const [Precipitation, setPrecipitation] = useState(null);
    const [Elevation, setElevation] = useState(null);

    const handleTemperatureChange = (event) => {
        setTemperature(event.target.value);
        console.log(event.target.value);
    };

    const handlePrecipitationChange = (event) => {
        setPrecipitation(event.target.value);
        console.log(event.target.value);
    };

    const handleElevationChange = (event) => {
        setElevation(event.target.value);
        console.log(event.target.value);
    };

    const handlePredict = async () => {
        try {
            const formData = new FormData();
            formData.append('temperature', Temperature);
            formData.append('precipitation', Precipitation);
            formData.append('elevation', Elevation);

            await axios({
                method: 'POST',
                url: 'http://127.0.0.1:8000/api/plant_suggestion/',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }).then((response) => {
                console.log(response.data);
                setResult(response.data);
                setPrediction(true);
            });

        } catch (error) {
            console.error(error);
            // Handle any error that occurs during the request
        }
    }



    return (
        <section id="plant-page" className="plant-page">
            <div className="container" data-aos="fade-up">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="plant-section">
                            <div className="section-title">
                                <h2>Plant Disease Detection</h2>
                            </div>
                            <div className="section-description">
                                <p>Select a plant or leaf image</p>
                            </div>

                            <div className="controls">
                                <div className="mb-3">
                                    <input id="select-image" type="file" accept="image/*" onChange={handleImageChange} />
                                </div>

                                <div className="control-select mb-3">
                                    <select className="form-select" value={selectEnum} onChange={handleEnumChange} >
                                        <option value="solution">Disease detection</option>
                                        <option value="leaf">Leaf detection</option>
                                    </select>
                                </div>

                                <div className="d-flex justify-content-end align-items-center py-4">
                                    <button id="select-image-btn" className="select-image-btn btn" onClick={handleUpload}>Process Image</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="plant-section">
                            <div className="section-title">
                                <h2>Plant Suggestion</h2>
                            </div>
                            <div className="section-description">
                                <p>Suggestion an appropriate plant for particular temperature conditions</p>
                            </div>

                            <div className="controls">
                                {/* three text fields */}
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Temperature - °C</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" value={Temperature} onChange={handleTemperatureChange} placeholder="Eg: 34 (in °C)" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Precipitation - milimeter</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" value={Precipitation} onChange={handlePrecipitationChange} placeholder="Eg: 84 (in milimeter)" />
                                </div>
                                <div className="mb-3"> 
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Elevation - meter</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput1" value={Elevation} onChange={handleElevationChange} placeholder="Eg: 240 (in meter)" />
                                </div>
                                <div className="d-flex justify-content-end align-items-center py-4">
                                    <button id="select-image-btn" className="select-image-btn btn" onClick={handlePredict}>Suggest Plant</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col">
                        <div className="result-section py-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Results</h5>
                                    {result ? (<div>
                                        {detection ? (<p><b>Plant Disease Detection:</b> {result.prediction}</p>) :
                                            prediction ? (<div>
                                                <p><b>Plant Suggestion:</b></p>
                                                <ol>
                                                    {
                                                        result.predicted_plant.map((item, index) => {
                                                            return (
                                                                <li key={index}>{item}</li>
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </div>) : null}
                                    </div>) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}