import Marquee from "react-fast-marquee";

import client1 from '../../assets/clients/client1.jpg';
import client2 from '../../assets/clients/client2.jpg';
import client3 from '../../assets/clients/client3.jpg';
import client4 from '../../assets/clients/client4.jpg';
import client5 from '../../assets/clients/client5.jpg';

const OurClients = () => {
    return (
        <div className='pb-5 w-full'>
            <h3 className='text-center font-bold py-5 text-3xl'>Happy Clients</h3>
            <Marquee pauseOnHover={true} className="border py-5">
                <div className='p-2 border rounded-full' style={{ width: '18rem' }}>
                    <img src={client1} className="rounded-full" alt='client-img' />
                </div>
                <div className='p-2 border rounded-full' style={{ width: '18rem' }}>
                    <img src={client2} className="rounded-full" alt='client-img' />
                </div>
                <div className='p-2 border rounded-full' style={{ width: '18rem' }}>
                    <img src={client3} className="rounded-full" alt='client-img' />
                </div>
                <div className='p-2 border rounded-full' style={{ width: '18rem' }}>
                    <img src={client4} className="rounded-full" alt='client-img' />
                </div>
                <div className='p-2 border rounded-full' style={{ width: '18rem' }}>
                    <img src={client5} className="rounded-full" alt='client-img' />
                </div>
            </Marquee>
        </div>
    );
};

export default OurClients;