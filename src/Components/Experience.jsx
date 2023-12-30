import img from "../assets/images/sponsors/architect.png"

const Experience = () => {
    return (
        <div className="flex mt-14 gap-60  w-[74%] mx-auto relative">
            <div className=" space-y-3  w-[425px] ">
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
                    <img className="w-[440px] h-[620px]" src={img} alt="" />
                </div>

                <div className="border w-52 text-center bg-[#FF900E] text-white  py-6 rounded-md absolute 
                left-[54%] top-[85%]">
                    <p className="text-4xl font-bold">10+Year</p>
                    <p>Experience</p>
                </div>
            </div>

        </div>
    );
};

export default Experience;