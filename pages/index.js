import React from "react";
// import './checking.css';

import { CountUp } from "use-count-up";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <Navbar />
      {/* //////////////////////// */}
      <div className="w-[80%] min-h-[140vh] mx-auto grid mt-120px py-[120px] lg:grid-cols-2 gap-[100px] ">
        <div className=" grid grid-cols-2 my-auto gap-6">
          <div className="flex flex-col gap-6 items-end justify-end">
            <div className="w-full">
              <Image
                src="/assets/img1.jpg"
                alt="img1"
                height={250}
                width={250}
              />
            </div>
            <div className="w-full">
              <Image
                src="/assets/img3.png"
                alt="img2"
                height={250}
                width={250}
              />
            </div>
          </div>
          <div className="grid-cols-1 my-auto">
            <div className="w-full">
              <Image
                src="/assets/img2.jpg"
                alt="img3"
                height={250}
                width={250}
              />
            </div>
          </div>
        </div>
        <div className="grid-col-1">
          <div className="flex flex-col gap-4 justify-center h-full w-[90%] lg:w-[80%]">
            <h3 className="text-3xl text-blue-500 font-bold">WELKOM</h3>
            <h2 className="text-4xl text-black font-bold">
              Welkom In Zeewolde
            </h2>
            <p className="text-2xl">Al plannen gemaakt voor dit jaar?</p>
            <p className="text-justify">
              Nog even en het toeristisch seizoen gaat weer van start. Het
              eerste weekend waarop je met het gezin eropuit kunt trekken staat
              dan alweer voor de deur, het paasweekend.
            </p>
            <p className="text-justify">
              Boek een van de vele accommodaties in Zeewolde en trek heerlijk de
              natuur in. Stap op de fiets of maak een heerlijke wandeling in een
              van vele natuurgebieden van Zeewolde.
            </p>

            {/* <ButtonLayout>Bekijken</ButtonLayout> */}
            <button className="h-[60px] w-[200px] rounded-3xl py-8px px-[12px] bg-[#B4D333] text-white text-2xl">
              Bekijken
            </button>
          </div>
        </div>
      </div>
      {/* /////////////////////// */}
      <div className="w-full min-h-[400px] bg-[#001A23] flex flex-col gap-7 items-center justify-center">
        <h3 className="text-2xl text-[#B4D333] font-bold">Ontdekken</h3>
        <h2 className="lg:text-2xl xl:text-4xl text-white font-bold">
          Er is genoeg te ontdekken
        </h2>
        <div className="w-[80%] min-h-[200px] mx-auto flex flex-row flex-wrap items-center justify-center gap-11">
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-5xl font-bold text-white">
              <CountUp isCounting end={203} duration={2} />
            </p>
            <p className="text-3xl text-white font-bold">Evenementen</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-5xl font-bold text-white">
              <CountUp isCounting end={102} duration={2} />
            </p>
            <p className="text-3xl text-white font-bold">Locaties</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-5xl font-bold text-white">
              <CountUp isCounting end={33} duration={2} />
            </p>
            <p className="text-3xl text-white font-bold">Iets anders</p>
          </div>
        </div>
      </div>
      {/* ////////////////////////////////// */}
      <Tabs />
      {/* <div className="w-full h-[300px] bg-[#001A23]"></div> */}
      {/* //////////////////////////////////// */}
      <div className="w-full">
        <div className="w-[70%] mx-auto flex justify-between items-center gap-11">
          <div>
            <Image
              src="/assets/icon1.svg"
              alt="icon1"
              height={250}
              width={250}
            />
          </div>
          <div>
            <Image
              src="/assets/icon2.svg"
              alt="icon2"
              height={250}
              width={250}
            />
          </div>
          <div>
            <Image
              src="/assets/icon3.svg"
              alt="icon3"
              height={250}
              width={250}
            />
          </div>
        </div>
      </div>
      {/* //////////////////// */}
      <div className="w-full h-[70px] bg-[#001A23]  justify-around flex items-center">
        <div className="ml-[30px]">
          <ul className="list-none flex gap-4">
            <li className="text-[#8890A4] sm:text-xl">Privacy Policy</li>
            <li className="text-[#8890A4] sm:text-xl">Legal notice</li>
            <li className="text-[#8890A4] sm:text-xl">Term of service</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#8890A4] sm:text-xl">© Copyright 2023 - Puur</h3>
        </div>
      </div>
    </div>
  );
};

export default index;
