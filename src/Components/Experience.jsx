import img from "../assets/images/sponsors/architect.png"

const Experience = () => {
    return (
        <div className=" flex flex-col lg:flex-row  p-4 pr-1 gap-6 mt-9 md:mt-10  lg:gap-60   lg:w-[74%] mx-auto relative">
            <div className=" space-y-3  lg:w-[425px] ">
                <h1 className="text-2xl font-bold border-l-4 border-[#FF900E]  pl-2">Features you will <br />
                    love & enjoy</h1>
                <p className="text-xs">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                <div style={{ boxShadow: " 0px 4px 30px 0px rgba(0, 0, 0, 0.06)" }} className=" p-5 pt-6 rounded-md ">
                    <p className="font-bold text-sm mb-2">Dexktop & Mobile Version</p>
                    <p className="text-xs">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
                <div style={{ boxShadow: " 0px 4px 30px 0px rgba(0, 0, 0, 0.06)" }} className=" p-5 pt-6 rounded-md  ">
                    <p className="font-bold text-sm mb-2">Drag & Drop Builder</p>
                    <p className="text-xs">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
                <div style={{ boxShadow: " 0px 4px 30px 0px rgba(0, 0, 0, 0.06)" }} className=" p-5 pt-6 rounded-md ">
                    <p className="font-bold text-sm mb-2">Awesome Modern Design</p>
                    <p className="text-xs">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
                <div style={{ boxShadow: " 0px 4px 30px 0px rgba(0, 0, 0, 0.06)" }} className=" p-5 pt-6 rounded-md ">
                    <p className="font-bold text-sm mb-2">Super Easy to Edit</p>
                    <p className="text-xs">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                </div>
            </div>

            <div className="">
                <div className="">
                    <img className=" w-[350px] h-[470px]  ml-7 md:h-[50%]  md:w-[90%] md:ml-16  lg:w-[440px] lg:h-[620px]" src={img} alt="" />
                </div>

                <div className="border w-36 md:w-52 text-center bg-[#FF900E] text-white py-4 md:py-6 rounded-md absolute 
                    left-[2%] top-[94%]  md:left-[1%] md:top-[94%]   lg:left-[58%] lg:top-[83%]">
                    <p className="text-2xl md:text-4xl font-bold">10+Year</p>
                    <p>Experience</p>
                </div>
            </div>

        </div>
    );
};

export default Experience;