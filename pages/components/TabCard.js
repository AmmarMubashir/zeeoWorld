import React from 'react';

import TabButton from './TabButton';

const TabCard = (props) => {
  return (
    <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] rounded-3xl">
                <div className="w-full">
                  <img src="/assets/tabs.png" className="object-cover w-full" />
                </div>
                <div className="bg-white w-[80%]  shadow-2xl rounded-2xl mx-auto h-[150px] mt-[-100px] z-100 relative flex flex-col items-center justify-center gap-3">
                    <h3 className="text-xl font-bold text-[#00AEEF]">{props.heading3}</h3>
                    <h2 className="text-2xl font-bold text-black">{props.heading2}</h2>
                    <TabButton>{props.buttonContent}</TabButton>
                </div>
    </div>
  )
}

export default TabCard;