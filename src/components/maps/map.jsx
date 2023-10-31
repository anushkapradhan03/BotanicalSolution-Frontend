/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useRef, useMemo, useEffect } from 'react'

// Components imports
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import L from 'leaflet'

export default function map({ center, userlocation }) {

    // eslint-disable-next-line no-unused-vars
    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(center)
    const [zoom, setZoom] = useState(5)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                    setZoom(13)
                    userlocation(marker.getLatLng())
                }
            },
        }),
        [],
    )

    return (
        <MapContainer className="map-container" center={[22.364293, 79.029432]} zoom={zoom} scrollWheelZoom={true} >
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
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
            </Marker>
        </MapContainer>
    )
}

map.defaultProps = {
    center: {
        lat: 23,
        lng: 77
    }
}
