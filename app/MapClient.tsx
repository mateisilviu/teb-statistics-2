'use client'

import MapComponent from "@/components/MapComponent"
import { MapProps } from "@/types/map"

interface MapClientProps {
    mapProps: MapProps,
    documentName: string,
    formattedAddress: string,
}

const MapClient: React.FC<MapClientProps> = ({ mapProps, documentName, formattedAddress }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-full h-full">
                <MapComponent center={mapProps.center} />
            </div>
        </div>
    )
}

export default MapClient;