import { useEffect } from 'react';
import brand1 from '../../../../assets/brand1.jpg';
import brand2 from '../../../../assets/brand2.jpg';
import brand3 from '../../../../assets/brand3.jpg';
import Aos from 'aos';

const Brand = () => {
    useEffect(()=>{
        Aos.init();
    },[]) 

    //
    return (
        <div  data-aos="zoom-in-up" className="grid md:grid-cols-3 gap-4 md:pt-20 justify-center items-center pb-20">
            <div className='text-center'>
                <img className='inline' src={brand1} alt="" />
                <h2 className='font-bold text-2xl mb-4 text-[#131135]'>Reliable Dealings</h2>
                <p className='text-xl font-medium px-14'>Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
            </div>
            <div className='text-center '>
                <img className='inline' src={brand2} alt="" />
                <h2 className='font-bold text-2xl mb-4 text-[#131135]'>Data Secured</h2>
                <p className='text-xl font-medium px-14'>Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
            </div>
            <div className='text-center '>
                <img className='inline' src={brand3} alt="" />
                <h2 className='font-bold text-2xl mb-4 text-[#131135]'>Live Chat Supprt 24</h2>
                <p className='text-xl font-medium px-14'>Consectetur adipisicing elit sed do eiusmod tempor incididunt utnale labore etdolore</p>
            </div>
        </div>
    );
};

export default Brand;