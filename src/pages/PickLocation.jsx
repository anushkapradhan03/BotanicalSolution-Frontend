import { useState, useRef, useMemo, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";


import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'

import L, { map } from 'leaflet'

export default function PickLocation() {
    const [position, setPosition] = useState([22.364293, 79.029432])
    const markerRef = useRef(null)

    const navigate = useNavigate();

    const params = useParams();
    console.log(params)

    useEffect(() => {
        const lat = parseFloat(params.lat);
        const lng = parseFloat(params.lng);
    
        if (!isNaN(lat) && !isNaN(lng)) {
          setPosition([lat, lng]);
        }
      }, [params.lat, params.lng]);

    const eventHandlers = useMemo(
        () => ({
          dragend() {
            const marker = markerRef.current
            if (marker != null) {
                let {lat, lng} = marker.getLatLng()
              setPosition([lat, lng])
            }
          },
        }),
        [],
      )

    function handleSelectLocation() {
        navigate(`/pollutionandplants/${position[0]}/${position[1]}`)
    }

    return (
        <section id="pick-location" className="pick-location">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Please pick your Location</h2>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="latlng d-flex p-2 pt-0">
                            <span><b>Latitude: </b>{position[0]},</span>
                            <span><b>Longitude: </b>{position[1]}</span>
                        </div>
                        {/* {centerCoords ? <Map center={{
                            lat: centerCoords.lat,
                            lng: centerCoords.lng
                        }} userlocation={userlocation} /> : null} */}

                        <MapContainer className="map-container" center={position} zoom={5} scrollWheelZoom={true} >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker
                                icon={
                                    L.icon({
                                        iconUrl: '/geo-alt-fill.svg',
                                        iconRetinaUrl: '/geo-alt-fill.svg',
                                        iconSize: [30, 30],
                                        iconAnchor: [15, 30],
                                        popupAnchor: [0, -30],
                                        className: 'marker-icon'
                                    })
                                }
                                draggable={true}
                                eventHandlers={eventHandlers}
                                position={position}
                                ref={markerRef}>
                            </Marker>
                        </MapContainer>

                        <div className="d-flex justify-content-center p-4">
                            <button className="btn selectlocation-btn w-75" onClick={() => {
                                handleSelectLocation()
                            }}>
                                Select location
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
