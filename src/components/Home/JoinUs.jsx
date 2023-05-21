import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const JoinUs = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <h2 className='text-center font-bold py-5 text-4xl capitalize'>Join us</h2>
            <div className="px-1 mt-5 mb-5" data-aos="fade-zoom-in">
                <div className="relative">
                    <div className="bg-[url('https://i.postimg.cc/cJJ2knDc/joinus.jpg')] w-full bg-cover bg-center p-24">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]"></div>
                        <h1 className="text-white uppercase md:text-5xl font-semibold tracking-wider relative z-20 md:pb-5 text-center">Join us now to get <br /> the Joy of toy!</h1>
                        <Link to="/registration">
                            <button className="btn btn-outline btn-warning z-30 absolute bottom-10 text-center top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold mt-5">Join us now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;