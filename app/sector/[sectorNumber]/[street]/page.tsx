interface IParams {
    street?: string;
}

const StreetPage = async ({ params }: { params: IParams }) => {
    return <div><h2>Street {params.street}</h2></div>
}

export default StreetPage;