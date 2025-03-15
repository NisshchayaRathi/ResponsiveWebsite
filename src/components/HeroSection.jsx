import {ArrowRight} from "lucide-react";
import { belownavItems } from "../constants";
import hero from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="lg:flex flex-row">
    <div className=" flex flex-col pl-8 lg:pl-64 md:pl-52  mt-20 lg:mt-20">
      <h1 className="items-center text-4xl sm:text-6xl lg:text-7xl  tracking-wide max-w-2xl">
        <b>Hey</b>, I'm Charles
      </h1>
      <p className=" lg:pl-0 mt-10 text-4xl items-center text-neutral-500 max-w-2xl">
        I help <u>start-ups.</u> developing
        <br/>
        outstanding web products.
      </p>
      <div className=" flex  my-5 max-w-4xl ">
      <div className="hidden lg:flex justify-items-start  mt-5 mr-80 space-x-12 ">
            <a href="#WorkWithMe" className="text-white bg-blue-800 lg:flex justify-center items-center py-2 px-5 lg:flex border rounded-md">
             <div className="pr-5 "> <ArrowRight /></div> WORK WITH ME
            </a>
          </div>
      </div><div className=" lg:text-sm">
      <div className=" tracking-wide flex justify-between max-w-2xl">
        <ul className="flex flex-wrap space-x-10">
          {belownavItems.map((item,index)=>(
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      </div>
      </div>
      <div className="lg:pt-40 md:pl-48 lg:pl-0 pt-20 w-full lg:w-1/2">
        <img src={hero} alt="picture" ></img>
      </div>
    </div>
  );
};

export default HeroSection;
