import { useEffect, useState } from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom'

// import required modules
import { Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function PollutantsAndPlants() {

    const { lat, lng } = useParams();

    const [data, setData] = useState(null)

    const [aqi, setAqi] = useState({
        value: 0,
        quality: null,
    })
    const [pollutants, setPollutants] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get('https://Botanical Solution-backend.onrender.com/api/getplantsandpollutiondata', {
                params: {
                    lat: lat,
                    lon: lng
                }
            }).then((res) => {
                if (res.data.status === "success") {
                    return res.data.data
                }
            }).catch((error) => {
                console.error(error)
            })
            console.log(data)
            setData(data)
        }
        fetchData()
    }, [lat, lng])

    useEffect(() => {
        if (data) {
            setAqi(data.aqi)
            setPollutants(data.pollutantandplants)
        }
    }, [data])

    return (
        <>
            <section id="parameter-container" className="parameter-container my-0 py-0" >
                <div className="page-header d-flex-col align-items-center" >
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center" data-aos="fade-up" data-aos-delay="300">
                            {/* <div className="col-lg-6 text-center">
                                <h2>Pollutants</h2>
                            </div> */}


                            <div className="stats-item text-center w-100 h-100">
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                    className="purecounter">{aqi.value}</span>
                                <p>{aqi.quality}</p>
                                <p>Air Quality Index (AQI)</p>
                                {/* <i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i> */}
                            </div>


                        </div>
                        {pollutants.length > 0 ? <div className="row mt-5 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="400">

                            <div className="col-lg-2 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter">{pollutants[0].value}</span>
                                    <p>{pollutants[0].quality}</p>
                                    <p>SO<sub>2</sub></p>
                                    {/* <i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i> */}
                                </div>
                            </div>

                            <div className="col-lg-2 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter">{pollutants[1].value}</span>
                                    <p>{pollutants[1].quality}</p>
                                    <p>NO<sub>2</sub></p>
                                    {/* <i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i> */}
                                </div>
                            </div>

                            <div className="col-lg-2 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter">{pollutants[2].value}</span>
                                    <p>{pollutants[2].quality}</p>
                                    <p>PM 10</p>
                                    {/* <i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i> */}
                                </div>
                            </div>

                            <div className="col-lg-2 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter">{pollutants[3].value}</span>
                                    <p>{pollutants[3].quality}</p>
                                    <p>PM 2.5</p>
                                    {/* <i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i> */}
                                </div>
                            </div>

                            <div className="col-lg-2 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter">{pollutants[4].value}</span>
                                    <p>{pollutants[4].quality}</p>
                                    <p>O<sub>3</sub></p>
                                    {/* <i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i> */}
                                </div>
                            </div>

                            <div className="col-lg-2 col-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                                        className="purecounter">{pollutants[5].value}</span>
                                    <p>{pollutants[5].quality}</p>
                                    <p>CO</p>
                                    {/* <i className="bi bi-arrow-left-square-fill"><Bs0Circle /></i> */}
                                </div>
                            </div>

                        </div> : null}
                    </div>
                </div>

                <div className="plants-recommandation">
                    <div className="container position-relative">
                        {(data && pollutants.length > 0) ?
                            pollutants.map((pollutant, index) => {

                                if (pollutant.plants) {
                                    return (
                                        <div key={index} className='plantsforpollutant'>
                                            <div className='pollutant-name'>
                                                <h3>{pollutant.pollutantName}</h3>
                                            </div>
                                            <div className='plants'>
                                                <Swiper
                                                    slidesPerView={3}
                                                    spaceBetween={30}
                                                    pagination={{
                                                        clickable: true,
                                                    }}
                                                    modules={[Pagination]}
                                                    className="mySwiper"
                                                >
                                                    {pollutant.plants.map((plant, pindex) => {
                                                        const plantname = plant.name.split(' ').join('').toLowerCase();
                                                        return (
                                                            <SwiperSlide key={pindex}>
                                                                <div className='plant'>
                                                                    <div className='plantimage'>
                                                                        <img className='img-fluid' src={"/images/plants/"+plantname+".jpg"} alt={plant.name} />
                                                                    </div>
                                                                    <div className='plantname m-0 p-2'>
                                                                        <h4>{plant.name}</h4>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        )
                                                    })
                                                    }
                                                </Swiper>
                                            </div>
                                        </div>
                                    )
                                }
                            }) : null}
                    </div>
                </div>
            </section>
        </>
    )
}
