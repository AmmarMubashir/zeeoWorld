import React, { useState } from "react";
import { IconButton, Stack, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ButtonLayout from "../components/Button";
import styles from "../index.module.css";
import Image from "next/image";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className=" flex flex-col items-center justify-start pt-2 sm:pt-3 lg:pt-6 sxl:pt-9 bg-[url('/assets/forest.jpg')] bg-cover bg-center bg-no-repeat  min-h-[540px] h-[100vh] w-full relative">
      <div className="w-full   lg:flex flex-row items-center justify-around px-2 sm:px-3 md:px-4 mx-auto pt-10">
        <div className={styles.navlogo}>
          <Image src="/assets/logo.png" alt="logo" width={150} height={150} />
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
  );
};

export default Navbar;
