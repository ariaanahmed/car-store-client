import { useLoaderData } from "react-router-dom";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
    const allMyToys = useLoaderData()
    return (
        <div className="container mx-auto mb-10">
            <h2 className="text-center font-bold py-5 text-3xl">Total Added Toys: {allMyToys.length}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    allMyToys.map((myToy) => <MyToysCard
                        key={myToy._id}
                        myToy={myToy}
                    ></MyToysCard>)
                }
            </div>

        </div>
    );
};

export default MyToys;