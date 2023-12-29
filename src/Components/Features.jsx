import img from "../assets/images/sponsors/team1.png"
import img1 from "../assets/images/sponsors/team2.png"
import img2 from "../assets/images/sponsors/team3.png"
import img3 from "../assets/images/sponsors/team4.png"

const Features = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row md:justify-center gap-8 md:gap-16 mt-7 md:mt-14 p-3">
                <div className="grid grid-cols-2 md:grid md:grid-cols-2 gap-8">
                    <img className="w-[260px]" src={img} alt="" />
                    <img className="w-[260px]" src={img1} alt="" />
                    <img className="w-[260px]" src={img2} alt="" />
                    <img className="w-[260px]" src={img3} alt="" />
                </div>
                <div className="flex  md:items-center ">
                    <div className="space-y-3 md:space-y-4 text-center md:text-left">
                        <h1 className="text-[#727272] text-3xl ">Quick list
                            <span className="text-black font-bold"> of Our </span> <br />
                            <span className="text-[#FF900E] font-bold">Features</span></h1>
                        <p className="w-96 text-xs">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                        <button className="btn-success btn  bg-[#FF900E] border-none text-white lg:px-4">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;