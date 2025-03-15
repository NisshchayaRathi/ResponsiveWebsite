import { belownavItems } from "../constants";
import logo from "../assets/logo.png";



const HeroSection = () => {
    return (
<nav className=" lg:mt-40 mt-0 pl-8  lg:pl-0 z-50 py-3 ">
      <div className="container mx-auto relative lg:text-sm">
        <div className=" flex flex-wrap justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-15 w-15 lg:ml-10 mt-10" src={logo} alt="Logo" />
            <div className="flex flex-col">
                <span className="lg:pl-5 pt-10 text-1xl m-0 p-0"><b>Charles Von der Hejden</b></span>
                <span className="lg:pl-5">@2018-All rights reserved</span>
                </div>
          </div>
          <ul className="lg:ml-20 pl-6 flex flex-wrap pr-70 lg:mt-10 space-x-8">
            {belownavItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
     );
    };
    
    export default HeroSection;
    