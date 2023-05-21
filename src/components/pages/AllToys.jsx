import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";
import useTitle from "../hooks/useTitle";

const AllToys = () => {

    const allToys = useLoaderData()

    useTitle('AllToys')
    
    return (
        <div>
            { allToys.map((allToy) => <AllToysCard
                    key={allToy._id}
                    allToy={allToy}
                ></AllToysCard>)
            }
        </div>
    );
};

export default AllToys;