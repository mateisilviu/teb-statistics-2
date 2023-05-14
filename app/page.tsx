import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import dynamic from "next/dynamic";
import getAvarii from "./actions/getAvarii";
import MapClient from "./MapClient";
import { MapProps } from "@/types/map";

//import { useLoadScript, GoogleMap } from '@react-google-maps/api';
//import { useMemo } from 'react';

export default async function IndexPage() {

  // console.log(avarii);

  const mapPropsPopulated: MapProps = {
    center: [45.4, 25.6],
    markers: [
      {
        position: [45.4, 25.6],
        description: "blaa",
      }
    ]
  };

  return (
    <MapClient documentName="blaa" formattedAddress="blaaa" mapProps={mapPropsPopulated} />
  );
}
