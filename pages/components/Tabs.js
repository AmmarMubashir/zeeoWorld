import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";

import TabCard from "../components/TabCard";

const Tabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event);
  };
  return (
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
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab label="Tab one" value="1" />
              <Tab label="Tab two" value="2" />
              <Tab label="Tab three" value="3" />
              <Tab label="Tab four" value="4" />
              <Tab label="Tab five" value="5" />
            </TabList>
          </Box>
          {/* <TabPanel value="1" className="grid grid-cols-3 gap-x-2 gap-y-9"> */}
          <TabPanel
            value="1"
            className="flex flex-row flex-wrap justify-around items-center gap-y-5"
          >
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              imgUrl="/assets/tab1.jpg"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              imgUrl="/assets/tab2.jpg"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              imgUrl="/assets/tab3.jpg"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              imgUrl="/assets/tab4.jpg"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              imgUrl="/assets/tab5.jpg"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              imgUrl="/assets/tab6.jpg"
              buttonContent="View Details"
            />
          </TabPanel>
          <TabPanel
            value="2"
            className="flex flex-row flex-wrap justify-around items-center"
          >
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
          </TabPanel>
          <TabPanel
            value="3"
            className="flex flex-row flex-wrap justify-around items-center mt-0"
          >
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
          </TabPanel>
          <TabPanel
            value="4"
            className="flex flex-row flex-wrap justify-around items-center"
          >
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
          </TabPanel>
          <TabPanel
            value="5"
            className="flex flex-row flex-wrap justify-around items-center"
          >
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
            <TabCard
              heading2="category"
              heaging3="lorem Ipsum"
              buttonContent="View Details"
            />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Tabs;
