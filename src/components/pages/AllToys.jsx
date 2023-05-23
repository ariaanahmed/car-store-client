import { useLoaderData } from "react-router-dom";
import AllToysCard from "./AllToysCard";
import useTitle from "../hooks/useTitle";

const AllToys = () => {

    const allToys = useLoaderData()

    useTitle('AllToys')

    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>seller</th>
                            <th>category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map((allToy) => <AllToysCard
                            key={allToy._id}
                            allToy={allToy}
                        ></AllToysCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;