import img1 from '../../assets/gellary/1.png';
import img2 from '../../assets/gellary/2.jpg';
import img3 from '../../assets/gellary/3.jpg';
import img4 from '../../assets/gellary/4.jpg';
import img5 from '../../assets/gellary/5.jpg';
import img6 from '../../assets/gellary/6.jpg';
import img7 from '../../assets/gellary/7.jpg';
import img8 from '../../assets/gellary//8.jpg';

const Gellary = () => {
    return (
        <div>
            <h2 className='px-1 text-center font-bold text-4xl py-8'>Photo Gellary</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-1 px-1 mx-auto'>
                <div>
                    <img className='w-full h-60' src={img1} alt="img-card" />
                </div>
                <div>
                    <img className='w-full h-60' src={img2} alt="img-card" />
                </div>
                <div>
                    <img className='w-full h-60' src={img3} alt="img-card" />
                </div>
                <div>
                    <img className='w-full h-60' src={img4} alt="img-card" />
                </div>
                <div>
                    <img className='w-full h-60' src={img5} alt="img-card" />
                </div>
                <div>
                    <img className='w-full h-60' src={img6} alt="img-card" />
                </div>
                <div>
                    <img className='w-full h-60' src={img7} alt="img-card" />
                </div>
                <div>
                    <img className='w-full h-60' src={img8} alt="img-card" />
                </div>
            </div>
        </div>
    );
};

export default Gellary;