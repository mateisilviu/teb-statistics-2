import { GoogleMapGeocode } from "./google-map-geocode"

export interface TermoModel {
    alertType: string,
    sector: string,
    termicPoint: string,
    street: string,
    flat: string,
    geocode: GoogleMapGeocode,
    causeType: string,
    hourDate: string

}

export interface TermoModelDb {
    termoModel: Array<TermoModel>
}