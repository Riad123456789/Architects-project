import img from "../assets/images/sponsors/banner.png"

const Banner = () => {
    return (
        <div className="mt-10 md:mt-16 lg:mt-16 space-y-4">
            <p className="text-center text-2xl md:text-3xl font-bold  mx-auto lg:text-4xl">Brand New Group of Architects</p>
            <p className="text-center text-xs md:text-xs md:w-[600px] mx-auto ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
            <div className="flex justify-center">
                <button className="btn-sm btn bg-[#FF900E] border-none text-white lg:px-4">Explore More</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;