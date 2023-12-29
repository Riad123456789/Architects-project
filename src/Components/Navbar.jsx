

const Navbar = () => {
    return (
        <div>
            <div className="md:flex  md:justify-center md:gap-20 lg:justify-between   ">
                <div className="font-bold md:text-xl lg:text-3xl hidden md:block ">
                    <p >G3 Architects</p>
                </div>
                <div className="">
                    <ul className="flex gap-10 justify-center lg:gap-12 font-sans">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us </li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;