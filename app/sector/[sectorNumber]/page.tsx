interface IParams {
    sectorNumber?: string;
}

const SectorPage = async ({ params }: { params: IParams }) => {
    return <div><h1>Sector {params.sectorNumber}</h1></div>
}

export default SectorPage;