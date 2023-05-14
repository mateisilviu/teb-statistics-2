export interface GoogleMapGeocode {

    administrativeLevels: {
        level1long: string,
        level1short: string,
        level2long: string,
        level2short: string,
        city: string,
        country: string,
        countryCode: string,
    },
    extra: {
        confidence: number
        establishment: string,
        googlePlaceId: string,
        neighborhood: string,
        premise: string,
        subpremise: string,
        formattedAddress: string,
        latitude: number,
        longitude: number,
        provider: string,
        streetName: string,
        streetNumber: string,
    }

}

