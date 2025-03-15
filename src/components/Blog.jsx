import {ArrowRight} from "lucide-react";


const Workflow = () => {
  return (
    <div className="mt-20">
      <div className=" flex flex-wrap justify-center">
        <div className="  bg-blue-800 w-full lg:w-1/2">
          <div className="text-white lg:pl-40 ml-10 pt-20">
            <span className=" pt-40 text-3xl ">Building a blog with Jekyll,<br/>Docker and GitLab</span><br/><br/>
            <span className=""> May 22, 2015- 2 minute read</span><br/><br/>
            <span className=""> Developing a Jekyll blog with Docker deployed to GitLab pages</span><br/><br/><br/>
            <a className="flex mb-20 " href="#Article"><div className="pr-5 "> <ArrowRight /></div>Read Article</a>
          </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <div className="pl-10 pt-20">
            <span className=" pt-40 text-3xl ">Business- A PHP library for<br/>business and data calculations</span><br/><br/>
            <span className=""> May 22, 2015- 2 minute read</span><br/><br/>
            <span className=""> Discovering Business, a PHP library to ease dealing with business data calculations </span><br/><br/><br/>
            <a className="flex mb-20 text-blue-800 " href="#Article"><div className="pr-5 "> <ArrowRight /></div>Read Article</a>
        
        </div>
        </div>
        <div className=" w-full lg:w-1/2">
          <div className=" lg:pl-40 ml-10 pt-20">
            <span className=" pt-40 text-3xl ">Data tables with Symfony,<br/>Hateoas and AngularJS</span><br/><br/>
            <span className=""> May 22, 2015- 2 minute read</span><br/><br/>
            <span className=""> Building a sample Angular table consuming a Hateoas REST API</span><br/><br/><br/>
            <a className="flex mb-20 text-blue-800 " href="#Article"><div className="pr-5 "> <ArrowRight /></div>Read Article</a>
          
        </div>
        </div>
        <div className="  bg-black w-full lg:w-1/2">
          <div className="text-white pl-10 pt-20">
            <span className=" pt-40 text-3xl ">Swap-A PHP exchange rates<br/>library</span><br/><br/>
            <span className=""> May 22, 2015- 2 minute read</span><br/><br/>
            <span className=""> Discovering Swap, an exchange rates library for PHP</span><br/><br/><br/>
            <a className="flex mb-20 " href="#Article"><div className="pr-5 "> <ArrowRight /></div>Read Article</a>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
