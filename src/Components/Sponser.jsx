import img from "../assets/images/sponsors/amazon.png"
import img1 from "../assets/images/sponsors/figma.png"
import img2 from "../assets/images/sponsors/google.png"
import img3 from "../assets/images/sponsors/spotify.png"
import img4 from "../assets/images/sponsors/telerama.png"

const Sponser = () => {
    return (
        <div className=" px-3 md:w-[89%]  md:pr-6 lg:w-[80%] lg:pl-16 mb-10  mx-auto">
            <div className="text-center md:mt-20 mb-10">
                <h1 className="font-bold text-3xl mb-3">Our Sponspors</h1>
                <p className="text-xs w-96 mx-auto">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            </div>
            <div className="grid gap-5 md:gap-16 grid-cols-5">
                <img className="w-14 md:w-28" src={img} alt="" />
                <img className="w-14 md:w-28" src={img1} alt="" />
                <img className="w-14 md:w-28" src={img2} alt="" />
                <img className="w-14 md:w-28" src={img3} alt="" />
                <img className="w-14 md:w-28" src={img4} alt="" />
            </div>
        </div>
    );
};

export default Sponser;