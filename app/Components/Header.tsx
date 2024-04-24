    "use client"

import { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [selected, setSelected] = useState("HOME");
    const ToggleMenu = () => {
    setMenu(!menu);
    };

    const navItems = ["HOME", "MEET JANE", "PROJECTS", "RESUME", "CONTACT ME"];

    return (
        <header className="z-40 relative  bg-black">
            <div className="hidden container lg:flex justify-between px-10 py-4 mx-auto text-white">
                <div className="flex items-center space-x-1 ">
                    {" "}
                    <IoMdMail />{" "}
                    <span className=" text-white text-sm font-light ">
                        {" "}
                        contact@janewhite.ji@gmail.com
                    </span>{" "}
                </div>
                <div className="flex items-center space-x-3 text-sm">
                    <div>
                        {" "}
                        <BsTwitter />
                    </div>
                    <a href="https://www.linkedin.com/in/jane-obianaba-aa092413b/"  rel="noopener noreferrer">
                        {" "}
                        <BsLinkedin />{" "}
                    </a>
                    <a href="https://github.com/Janeibeh"   rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                    <div>
                        {" "}
                        <BsInstagram/>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex border border-b-0"></div>
            <nav className="container mx-auto flex items-center justify-between text-white h-28 lg:h-32 px-2 md:px-10">
                <div className=" ">
                    <h1 className="cursor-pointer text-xl font-bold">
                        JANEWEB
                        <span className="text-yellow-600">PORTFOLIO</span>
                    </h1>
                </div>
                <ul
                      className={`bg-black opacity-80 justify-center items-center lg:bg-transparent absolute h-screen lg:h-auto lg:static top-0 w-full lg:w-auto flex-col flex lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6 ${
                      menu ? "left-0 duration-500" : "-left-full duration-500"
          } `}
        >
          {navItems.map((item) => (
            <div
              className="flex flex-col gap-0 items-center"
              onClick={() => setSelected(item)}
            >
              <li
                className={`cursor-pointer text-lg lg:text-base text-white font-bold lg:hover:text-yellow-600 ${
                  selected === item
                    ? "bg-sky-300 lg:bg-transparent"
                    : "bg-transparent"
                }`}
                key={item}
              >
                {item}
              </li>

              <div
                className={`h-1 w-5 ${
                  selected === item ? "bg-yellow-600" : "bg-transparent"
                }`}
              />
            </div>
          ))}
                </ul>
                <div
                      className="lg:hidden z-40 font-extrabold text-yellow-600"
                      onClick={ToggleMenu} >
                      {menu ? <AiOutlineClose size="24" /> : <AiOutlineMenu size="24" />}
                </div>
            </nav>
    </header>
  );
};

export default Header;
