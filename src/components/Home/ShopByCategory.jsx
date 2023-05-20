import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {

    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tabs').then((res) => res.json())
            .then((data) => setToys(data))
    }, [])

    return (
        <div className='pt-20'>
            <Tabs className="text-center border-t-black">
                <TabList>
                    <Tab>Regular Cars</Tab>
                    <Tab>Trucks</Tab>
                    <Tab>Sports Cars</Tab>
                </TabList>
                <TabPanel>
                    <h2 className='font-bold py-5 text-4xl uppercase'>Regular Cars</h2>
                    {toys.map(toy => {
                        if (toy.category === 'regular cars') {
                            return (
                                <div className='card w-96 border bg-base-100 shadow-xl mx-auto mb-10' key={toy._id}>
                                    <figure className="px-10 pt-10">
                                        <img src={toy.img} alt={toy.name} className="rounded-xl" />
                                    </figure>
                                    <div className='card-body text-left font-semibold text-md'>
                                        <p className='card-title'>{toy.name}</p>
                                        <p>Price: {toy.price}</p>
                                        <p>Rating: {toy.star_rating}</p>
                                        <Link to={`/regularcars/${toy._id}`}>
                                            <button className='btn btn-primary'>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </TabPanel>
                <TabPanel>
                    <h2 className='font-bold py-5 text-4xl uppercase'>Trucks</h2>
                    {toys.map(toy => {
                        if (toy.category === 'truck') {
                            return (
                                <div className='card w-96 border bg-base-100 shadow-xl mx-auto mb-10' key={toy._id}>
                                    <figure className="px-10 pt-10">
                                        <img src={toy.img} alt={toy.name} className="rounded-xl" />
                                    </figure>
                                    <div className='card-body text-left font-semibold text-md'>
                                        <p className='card-title'>{toy.name}</p>
                                        <p>Price: {toy.price}</p>
                                        <p>Rating: {toy.star_rating}</p>
                                        <Link to={`/truck/${toy._id}`}>
                                            <button className='btn btn-primary'>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </TabPanel>
                <TabPanel>
                    <h2 className='font-bold py-5 text-4xl uppercase'>Sports Cars</h2>
                    {toys.map(toy => {
                        if (toy.category === 'sport cars') {
                            return (
                                <div className='card w-96 border bg-base-100 shadow-xl mx-auto mb-10' key={toy._id}>
                                    <figure className="px-10 pt-10">
                                        <img src={toy.img} alt={toy.name} className="rounded-xl" />
                                    </figure>
                                    <div className='card-body text-left font-semibold text-md'>
                                        <p className='card-title'>{toy.name}</p>
                                        <p>Price: {toy.price}</p>
                                        <p>Rating: {toy.star_rating}</p>
                                        <Link to={`/sportcars/${toy._id}`}>
                                            <button className='btn btn-primary'>View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;