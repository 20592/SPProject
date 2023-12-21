import React from "react";

import { HiChevronRight } from "react-icons/hi";

const ActivityFeed = () => {
  const staticActivityData = [
    {
      timestamp: "1 Minute ago / Richa .j",
      message: "Request Approved by Richa.j",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtkyE__W5Wyo3jI8OvLqz5yF_YHJ8PwT1Dw&usqp=CAU", // Example image URL
      icon: <HiChevronRight />,
    },

    {
      timestamp: "3 Hour ago / Sara William",
      message: "The PO revised by Sara William",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE4j7_ldVjP9eE7sogwdp_LUU9U2E8SN5blw&usqp=CAU", // Example image URL
      icon: <HiChevronRight />,
    },
    {
      timestamp: "6 Hour ago / ",
      message: "Request Rejected by Richa.j",
      image:
        " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_CFC5Sjr_gRms4RV6S8dlMp8BmFi71CvQuw&usqp=CAU",
      icon: <HiChevronRight />,
    },
    {
      timestamp: "1 Minute ago / Richa .j",
      message: "Request Approved by Richa.j",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnEz7UuWxk-KIjMx8_q8D30tEuJNERD34RFw&usqp=CAU",
      icon: <HiChevronRight />,
    },
    // Add more activities as needed.
  ];
  return (
    <div className="w-[628px] h-[453px]  bg-white rounded-lg ml-[26px] mt-[30px] mr-[22px] mb-[28px] hover:scale-105 transition duration-200">
      {/**heading */}
      <div className="flex justify-between">
        <p className="ml-6 mt-5 font-cairo text-lg font-semibold text-darkPurple not-italic leading-normal">
          Activity Feed
        </p>
        <p className=" underline decoration-1 font-cairo text-sm font-semibold text-black mt-4 mr-5"> See more Activity</p>
      </div>
      {/**img or p p */}
      <div className="">
        {staticActivityData.map((item, index) => (
          <div key={index} className="flex justify-between   mt-9 ml-12">
            <div className="flex">
              <img
                src={item.image}
                alt=""
                className=" rounded-full border-2 border-blue"
                width={56}
                height={56}
              />
              <div className="flex flex-col mx-4 ">
                <p className="text-sm  mb-2 font-semibold text-natural font-cairo leading-normal not-italic">
                  {item.timestamp}
                </p>
                <p className="text-base font-semibold font-cairo text-black leading-normal not-italic">
                  {item.message}
                </p>
              </div>
            </div>
<div className="mx-9 mt-5 flex items-center w-[33px] h-[30px] border-2 rounded-md border-natural ">
<div className=" flex items-center text-center text-natural ml-1  text-2xl font-bold">{item.icon}</div>
</div>
           
          </div>
        ))}
      </div>
    </div>
  );
};
export default ActivityFeed;
