import bannerImg from '../../../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero  min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div style={{ background: 'linear-gradient(180deg, #222222D4 0%, #00000000 110%)' }} className="hero-overlay bg-opacity-60"></div>
            <div className="ml-14 lg:pr-[800px]">
                <div className="">
                    <h1 className="mb-5 md:leading-[55px] text-5xl font-bold text-white ">
                        Hire the best freelancers for: <span className='text-[#46b9ee]'>web development, digital marketing, and graphics design</span> jobs, online.</h1>
                    <p className="mb-5 text-xl  text-white">
                        FreeLand your land your price. Explore our best pricing options and find your dream jobs or employer
                      </p>
                    <button className="btn btn-primary border-0 text-[#131135] bg-[#46b9ee]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;