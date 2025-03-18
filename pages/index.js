import React, { useState } from "react";
// import './checking.css';

import styles from "./index.module.css";
import {
  Button,
  IconButton,
  Typography,
  Stack,
  Box,
  Drawer,
  Tab,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ButtonLayout from "./components/Button";
import { CountUp } from "use-count-up";
import TabCard from "./components/TabCard";

const index = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };
  return (
    <div>
      <div className=" flex flex-col items-center justify-start pt-2 sm:pt-3 lg:pt-6 sxl:pt-9 bg-[url('/assets/forest.jpg')] bg-cover bg-center bg-no-repeat  min-h-[540px] h-[100vh] w-full relative">
        <div className="w-full   lg:flex flex-row items-center justify-around px-2 sm:px-3 md:px-4 mx-auto pt-10">
          <div className={styles.navlogo}>
            <img src="/assets/logo.png" />
          </div>
          <div className={styles.navList}>
            <ul>
              <li>
                <a href="#">Evenementen</a>
              </li>
              <li>
                <a href="#">Ontdekken</a>
              </li>
              <li>
                <a href="#">Nieuws</a>
              </li>
            </ul>
          </div>
          <div className={styles.navButton}>
            <ButtonLayout>Download App</ButtonLayout>
          </div>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            className="absolute top-[75px] right-[30px] text-white block lg:hidden "
          >
            <MenuIcon className="text-4xl" />
          </IconButton>
        </div>
        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          anchor="left"
        >
          <Box
            p={2}
            width="350px"
            role="presentation"
            sx={{
              textAlign: "center",
            }}
          >
            <CloseIcon
              className="absolute right-8 top-10 text-3xl"
              onClick={() => setDrawerOpen(false)}
            />

            <Stack className="h-[500px] w-[100%] flex items-center justify-center gap-[155px]">
              <div>
                <ul className="flex flex-col gap-[25px] text-none">
                  <li className="text-2xl ">
                    <a href="#">Evenementen</a>
                  </li>
                  <li className="text-2xl ">
                    <a href="#">Ontdekken</a>
                  </li>
                  <li className="text-2xl ">
                    <a href="#">Nieuws</a>
                  </li>
                </ul>
              </div>
              <div>
                <ButtonLayout>Download App</ButtonLayout>
              </div>
            </Stack>
          </Box>
        </Drawer>
        <div className="w-full max-w-[1280px] flex items-center justify-start my-auto px-2 sm:px-3 md:px-4 ">
          <div className="max-w-[500px] flex flex-col item-start justify-start gap-[6px] my-auto px-2 sm:px-3 md:ml-16">
            <h1 className="w-[80%] sm:w-full text-3xl sm:text-4xl font-bold text-left text-white ">
              Ontdek de mogelijkheden van{" "}
              <span className={styles.span}>Zeewolde</span>
            </h1>
            <p className="w-[75%] text-[15px] sm:text-base text-left text-white">
              De ideale omgeving om te recreëren, te verblijven, te werken en te
              wonen.
            </p>
          </div>
        </div>
        {/* <div className="w-full h-[100px] mb-[-30px] flex justify-center items-center"> */}
        <div className="w-full flex items-center justify-center gap-[4px] sm:gap-2 md:gap-4 xl:gap-6 absolute bottom-[-30px] xs:bottom-[-40px] sm:bottom-[-50px] md:bottom-[-60px] xl:bottom-[-80px] transition-all">
          {/* <div className='h-[170px] w-[170px] sm:rounded-3xl bg-blue-500'></div> */}
          <div className=" bg-blue-500 w-[65px]  sm:w-[100px] md:w-[125px] xl:w-[167px] h-[65px] sm:h-[100px] md:h-[125px] xl:h-[167px] rounded-xl sm:rounded-3xl"></div>
          <div className=" bg-blue-500 w-[65px]  sm:w-[100px] md:w-[125px] xl:w-[167px] h-[65px] sm:h-[100px] md:h-[125px] xl:h-[167px] rounded-xl sm:rounded-3xl"></div>
          <div className=" bg-blue-500 w-[65px]  sm:w-[100px] md:w-[125px] xl:w-[167px] h-[65px] sm:h-[100px] md:h-[125px] xl:h-[167px] rounded-xl sm:rounded-3xl"></div>
          <div className=" bg-blue-500 w-[65px]  sm:w-[100px] md:w-[125px] xl:w-[167px] h-[65px] sm:h-[100px] md:h-[125px] xl:h-[167px] rounded-xl sm:rounded-3xl"></div>
          <div className=" bg-blue-500 w-[65px]  sm:w-[100px] md:w-[125px] xl:w-[167px] h-[65px] sm:h-[100px] md:h-[125px] xl:h-[167px] rounded-xl sm:rounded-3xl"></div>
        </div>
      </div>
      {/* //////////////////////// */}
      <div className="w-[80%] min-h-[140vh] mx-auto grid mt-120px py-[120px] lg:grid-cols-2 gap-[100px] ">
        <div className=" grid grid-cols-2 my-auto gap-6">
          <div className="flex flex-col gap-6 items-end justify-end">
            <div className="w-full">
              <img src="/assets/img1.jpg" className="w-full object-cover " />
            </div>
            <div className="w-full">
              <img src="/assets/img3.png" className="w-full" />
            </div>
          </div>
          <div className="grid-cols-1 my-auto">
            <div className="w-full">
              <img src="/assets/img2.jpg" className="w-full" />
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
      <div className="w-full min-h-[100vh] flex flex-col items-center pt-6 gap-5">
        <h3 className="text-2xl text-[#00AEEF] font-bold">Beleven</h3>
        <h2 className="text-5xl text-black font-bold">Een Selectie</h2>
        <p className="lg:w-[40%] w-[90%] text-2xl text-center mx-auto">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
        <div className="w-[80%] mx-auto">
          <TabContext value={value} className="w-full">
            <Box className="w-full">
              <TabList onChange={handleChange} variant="scrollable" scrollButtons="auto">
                <Tab label="Tab one" value="1"/>
                <Tab label="Tab two" value="2" />
                <Tab label="Tab three" value="3" />
                <Tab label="Tab four" value="4" />
                <Tab label="Tab five" value="5" />
              </TabList>
            </Box>
            {/* <TabPanel value="1" className="grid grid-cols-3 gap-x-2 gap-y-9"> */}
            <TabPanel value="1" className="flex flex-row flex-wrap justify-around items-center gap-y-5">
              
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />              
            </TabPanel>
            <TabPanel value="2" className="flex flex-row flex-wrap justify-around items-center">
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
            </TabPanel>
            <TabPanel value="3" className="flex flex-row flex-wrap justify-around items-center mt-0">
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
            </TabPanel>
            <TabPanel value="4" className="flex flex-row flex-wrap justify-around items-center">
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
            </TabPanel>
            <TabPanel value="5" className="flex flex-row flex-wrap justify-around items-center">
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />
              <TabCard heading2="category" heaging3="lorem Ipsum" buttonContent="View Details" />             
            </TabPanel>
          </TabContext>
        </div>
      </div>
      {/* <div className="w-full h-[300px] bg-[#001A23]"></div> */}
      {/* //////////////////////////////////// */}
            <div className="w-full">
                <div className="w-[70%] mx-auto flex justify-between items-center gap-11">
                    <div>
                      <img src="/assets/icon1.svg" />
                    </div>
                    <div>
                      <img src="/assets/icon2.svg" />
                    </div>
                    <div>
                      <img src="/assets/icon3.svg" />
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
