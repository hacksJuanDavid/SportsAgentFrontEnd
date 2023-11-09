"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

// Componente: HeroLocation
const DynamicMap = dynamic(() => import("./mapcomponent"), { ssr: false });

export default function HeroLocation() {
    const [geoData, setGeoData] = useState({ lat: 3.4516, lng: -76.5320 });

    return (
        <>
            <div className="hero min-h-screen bg-neutral text-black">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold m-2">Location in the Map</h1>
                        <DynamicMap geoData={geoData} />
                    </div>
                </div>
            </div>
        </>
    );
}
