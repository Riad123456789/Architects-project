import img from "../assets/images/icons/ribon.png"
import img1 from "../assets/images/icons/customers.png"
import img2 from "../assets/images/icons/projects.png"
import img3 from "../assets/images/icons/email.png"

const Awards = () => {
    return (
        <div className="mt-16 mb-10 md:w-[90%]  lg:w-[74%] mx-auto">
            <div className="space-y-2 ml-3">
                <h1 className="text-2xl font-bold">Some Facts</h1>
                <p className="text-xs w-96" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-4 mt-8 gap-3 ml-9 md:mt-11 md:ml-4 lg:mt-16  lg:ml-16 lg:gap-20">
                <div className="text-center border border-[#FF900E] w-36 space-y-1 pt-5 rounded-lg h-32">
                    <img className="r w-6 mx-auto" src={img} alt="" />
                    <p className="font-bold text-xl">54</p>
                    <p className="text-xs">Awards Winnings</p>
                </div>
                <div className="text-center border border-[#FF900E] w-36 space-y-1 pt-5 rounded-lg h-32">
                    <img className="r w-6 mx-auto" src={img2} alt="" />
                    <p className="font-bold text-xl">1458</p>
                    <p className="text-xs">Project Finished</p>
                </div>
                <div className="text-center border border-[#FF900E] w-36 space-y-1 pt-5 rounded-lg h-32">
                    <img className="r w-6 mx-auto" src={img1} alt="" />
                    <p className="font-bold text-xl">590</p>
                    <p className="text-xs">Clients Worked</p>
                </div>
                <div className="text-center border border-[#FF900E] w-36 space-y-1 pt-5 rounded-lg h-32">
                    <img className="r w-6 mx-auto" src={img3} alt="" />
                    <p className="font-bold text-xl">22578</p>
                    <p className="text-xs">Email Send</p>
                </div>
              
               
            </div>
        </div>
    );
};

export default Awards;