import {ArrowRight} from "lucide-react";
import back from "../assets/back.png";
import front from "../assets/front.png";

const Workflow = () => {
  return (
    <div className="mt-20">
      <h2 className="text-blue-800 text-3xl sm:text-5xl lg:text-6xl text-center lg:pl-20 pb-20 mt-6 tracking-wide">
        SERVICES{" "}
      </h2>

      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={back} alt="back" />
        </div>
        <div className="p-2 w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide">
        BACKEND DEVELOPMENT{" "}
      </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum maxime laborum, id fugit, quo natus voluptatum aut facilis nemo ea commodi voluptate in quidem quas? Sunt porro in iste rem repudiandae architecto id quaerat cum ratione debitis sint magnam, eaque unde, ullam dolores commodi sequi a! Minima, delectus quis?
          <div className="hidden lg:flex justify-items-start  mt-5 mr-80 space-x-12 ">
            <a href="#WorkWithMe" className="text-white bg-blue-800 lg:flex justify-center items-center py-2 px-5 lg:flex border rounded-md">
             <div className="pr-5 "> <ArrowRight /></div> WORK WITH ME
            </a>
          </div>
        </div>




        <div className="pt-10 flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 tracking-wide">
        FRONTEND DEVELOPMENT{" "}
      </h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente harum maxime laborum, id fugit, quo natus voluptatum aut facilis nemo ea commodi voluptate in quidem quas? Sunt porro in iste rem repudiandae architecto id quaerat cum ratione debitis sint magnam, eaque unde, ullam dolores commodi sequi a! Minima, delectus quis?
          <div className="hidden lg:flex justify-items-start  mt-5 mr-80 space-x-12 ">
            <a href="#WorkWithMe" className="text-white bg-blue-800 lg:flex justify-center items-center py-2 px-5 lg:flex border rounded-md">
             <div className="pr-5 "> <ArrowRight /></div> WORK WITH ME
            </a>
          </div>
        </div>
        <div className="p-2 w-full lg:w-1/2">
          <img src={front} alt="front" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Workflow;
