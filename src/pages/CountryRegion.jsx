import { useParams } from "react-router"

const CountryRegion = () => {
    const { regionName } = useParams();
    return (
        <div>{regionName}</div>
    )
}

export default CountryRegion