import img from "../assets/images/sponsors/architect.png"

const Experience = () => {
    return (
        <div className="flex mt-16 gap-36  w-[74%] mx-auto">
            <div className=" space-y-3  w-[425px] ">
                <h1 className="text-2xl font-bold border-l-4 border-[#FF900E] pl-2">Features you will <br />
                    love & enjoy</h1>
                <p className="text-xs">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                <div className="shadow-xl p-5 pt-6 rounded-md ">
                    <p className="font-bold text-sm mb-2">Dexktop & Mobile Version</p>
                    <p className="text-xs">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
            </div>

            <div className="">
                <img className="w-[430px] h-[620px]" src={img} alt="" />
            </div>
        </div>
    );
};

export default Experience;