import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";

const AllToys = () => {

    const allToys = useLoaderData()
    
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