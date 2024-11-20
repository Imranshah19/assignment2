
import Link from "next/link";

export default function Home() {
  return (
<div className ="bg-[#252B42] min-h-screen min-w-max h-[1132px] ">
<nav className="text-[#ffffff] px-56 py-4">
<div className="container mx-auto flex items-center gap-16">
    {/* Brand Name */}
    <h3 className="font-montserrat font-bold text-2xl leading-8 tracking-wide xl:flex-cols justify-start">
            BrandName
          </h3>
          {/* Links */}
          <div className="flex gap-8">
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Product
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Pricing
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
          {/* button */}
          <div className="flex ml-auto gap-20 pt-5">
            <a href="#" className="pt-2 hover:text-gray-400">
              Login
            </a>
            <button className="bg-[#23A6F0] p-2 hover:text-gray-400">
              {" "}
              JOIN US
            </button>
          </div>
          <div className="text-black">...</div>
        </div>
      </nav>
      {/* Main-content */}
      <div className="flex justify-center">
        <div className="relative w-[699px] h-[496px] pt-20 pb-40 gap-10 text-center">
          <h5 className="text-[#23A6F0] leading-5 tracking-[0.1px] font-bold text-sm">
            Welcome
          </h5>
          <br />
          <div className="w-[542px] h-40 ml-20 mt-10">
            <h1 className="font-Montserrat font-bold text-5xl leading-[60px] text-[#ffffff] ">
              Selling on the internet like a pro
            </h1>
          </div>
          <div className="w-[480px] h-[60px] ml-28  text-xl text-[#ffffff] font-light text-center mb-10">
            <h4>
              We know hpw large objects will act, but things on a <br />
              small scale just do not act that way
            </h4>
          </div>
          <div className="w-[365px] h-[52px] gap-[10px] ml-40 flex">
            <button className="bg-[#23A6F0] p-3 w-[193px] text-[#ffffff] text-sm font-bold font-Montserrat">
              Get Quote Now
            </button>
            <button className="border-[#23A6F0] border-solid border-[1px] rounded-[5px] w-[162px] text-[#23A6F0] font-Montserrat font-bold text-sm">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative w-[1046px] h-[292px] border-2 border-solid gap-[30px] mt-[120px] grid grid-cols-3">
          <div
            className="w-[328px] h-[292px] bg-[#ffffff]
         shadow-transparent drop-shadow-md"
          >
            <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFDCD1] mt-8 ml-8"></div>
            <h5 className="text-[#252B42] font-Montserrat font-bold text-base pt-4 ml-8">
              traing Courses
            </h5>
            <div className="w-[50px] h-[2px] bg-[#E74040] mt-4 ml-8"></div>
            <p
              className="font-Montserrat text-sm tracking-[0.2px] text-[#737373] pt-5 w-[222px] h-[60px]
          ml-8"
            >
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div
            className="w-[328px] h-[292px] bg-[#ffffff]
        shadow-transparent drop-shadow-md"
          >
            <div className="w-[70px] h-[76px] rounded-[10px] bg-[#B9EAA8] mt-8 ml-8"></div>
            <h5 className="text-[#252B42] font-Montserrat font-bold text-base pt-4 ml-8">
              2,769 online courses
            </h5>
            <div className="w-[50px] h-[2px] bg-[#E74040] mt-4 ml-8"></div>
            <p
              className="font-Montserrat text-sm tracking-[0.2px] text-[#737373] pt-5 w-[222px] h-[60px]
          ml-8"
            >
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="w-[328px] h-[292px] bg-[#23A6F0] drop-shadow-md">
            <div className="w-[70px] h-[76px] rounded-[10px] bg-[#FFFFFF] mt-8 ml-8"></div>
            <h5 className="text-[#FFFFFF] font-Montserrat font-bold text-base pt-4 ml-8">
              training Courses
            </h5>
            <div className="w-[50px] h-[2px] bg-[#FFFFFF] mt-4 ml-8"></div>
            <p
              className="font-Montserrat text-sm tracking-[0.2px] text-[#FFFFFF] pt-5 w-[222px] h-[60px]
          ml-8"
            >
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

