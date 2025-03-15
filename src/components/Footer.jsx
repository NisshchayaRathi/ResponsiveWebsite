import {ArrowRight} from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" lg:flex justify-between items-left mt-6 pl-8 lg:mt-20">
      <p className=" mt-10 pl-5 text-neutral-500 max-w-4xl">
        <span className="text-3xl text-blue-800 text-center">Need help developing your application ?</span><br/>
        <span className=" text-2xl text-left">Lets'get in touch!</span>
      </p>
      <div className="  mt-10 pl-5 space-x-12 ">
            <a href="#WorkWithMe" className="text-white bg-blue-800 lg:flex flex col w-60 py-2 px-5 lg:flex border rounded-md">
             <div className="pr-8 "> <ArrowRight /></div> WORK WITH ME
            </a>
          </div>
    </div>




  );
};

export default HeroSection;
