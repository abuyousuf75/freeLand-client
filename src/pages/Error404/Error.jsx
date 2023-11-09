
import { Link } from 'react-router-dom';
import img from '../../assets/404.png'
const Error = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="mt-10 md:mt-16 mb-10 text-4xl text-center">Oppsss...</h2>
           <div className='w-1/2 m-auto text-center flex justify-center items-center'>
           <img className='text-center' src={img} alt="404" />
          
           </div>
          <div className='text-center'>
         <Link to ='/'>
         <button className='text-xl text-[#fff] px-10 py-4 font-bold bg-[#46b9ee]'>Back Home</button>
         </Link>
          </div>
        </div>
    );
};

export default Error;