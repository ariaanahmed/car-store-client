import { useLoaderData } from "react-router-dom";

const SportCars = () => {

    const sportCars = useLoaderData();
    const newArryOfDatas = sportCars.Other;
    console.log(newArryOfDatas)
    return (
        <div>
            <h2 className='font-bold py-5 text-4xl uppercase text-center'>Sport Cars Details</h2>
            <img className='block mx-auto' src={sportCars.img} alt="" />
            <div className='flex-row md:flex container mx-auto gap-5'>
                {
                    newArryOfDatas.map((data,) => {
                        return (
                            <div className='card w-full border bg-base-100 shadow-xl mx-auto mb-10' key={data.idx}>
                                <figure className="px-10 pt-10">
                                    <img src={data.vehicle_image} alt={data.name} className="rounded-xl" />
                                </figure>
                                <div className='card-body text-left font-semibold text-md'>
                                    <p className='card-title'>{data.vehicle_name}</p>
                                    <p>Quantity: {data.quantity}</p>
                                    <p>Seller: {data.seller}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SportCars;