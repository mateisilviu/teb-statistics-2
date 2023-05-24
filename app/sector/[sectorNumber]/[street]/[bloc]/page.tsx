interface IParams {
    bloc?: string;
}

const FlatPage = async ({ params }: { params: IParams }) => {
    return <div><h3>Bloc {params.bloc}</h3></div>
}

export default FlatPage;