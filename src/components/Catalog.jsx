import React from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const ShowCatalog = ({ closeCatalog }) => {
  return (
    <>
      <div className="fixed   "></div>
      <div className="catalog border-2 border-blue mt-[30px]  bg-slate-50 flex flex-col">
        <div className="bg-white h-[50px] w-[1000px] flex justify-between items-center">
          <h2 className="text-lg font-cairo font-semibold text-black ml-[25px]">
            Items
          </h2>
          <button
            onClick={closeCatalog}
            className=" flex items-center justify-center bg-red-600 w-[18px] h-[18px] text-white rounded-full mr-[24px]"
          >
            <IoClose />
          </button>
        </div>
        <div className="flex mt-[30px] justify-between items-center">
          <p className="text-xl font-semibold font-cairo text-black ml-[29px]">
            Add Items from catalog
          </p>
          <form action="w-[384px] h-[47px] ml-[30px]">
            <div className="relative flex items-center justify-between mx-14  ">
              <PiMagnifyingGlassBold
                className="w-[16px] h-[16px] absolute ml-4 text-lg
          text-blue pointer-events-none"
              />
              <input
                type="text"
                name="search"
                placeholder="Search here"
                autocomplete="off"
                aria-label="search anything"
                className="w-[384px] h-[47px] shadow-sm pr-3  leading-normal  pl-12 py-2
          font-semibold not-italic text-sm bg-white
         text-grayText 
          font-cairo rounded-2xl border-none "
              />
            </div>
          </form>
          <button className="w-[146px] h-[47px] bg-blue mr-[30px] text-white rounded-lg">
            Add items
          </button>
        </div>
        <div className="flex justify-between items-center mt-[16px] ">
          <div className="flex ml-[29px] space-x-1">
            <h3 className="text-blue text-sm font-medium font-cairo">Items</h3>
            <div className="w-[1px] h-[21px] bg-blue "></div>
            <h3 className="text-blue text-sm font-medium font-cairo">5</h3>
          </div>
          <div className=" mr-[35px]">
            <p className="text-black text-sm font-medium font-cairo underline decoration-1">
              clear form
            </p>
          </div>
        </div>
        <table className="border-collapse mt-[10px] ml-[30px] mr-[26px]">
          <thead className="w-[940px] h-[52px] rounded-sm bg-white">
            <tr>
              <td className="font-cairo text-sm font-semibold pl-[26px]">
                Item
              </td>
              <td className="font-cairo text-sm font-semibold pr-[40px]">
                Unit
              </td>
              <td className="font-cairo text-sm font-semibold pr-[26px]">
                Category
              </td>
              <td className="font-cairo text-sm font-semibold pr-[20px]">
                Item Type
              </td>
              <td className="font-cairo text-sm font-semibold">Quantity</td>
              <td className="font-cairo text-sm font-semibold text-center ">
                Action
              </td>
            </tr>
          </thead>
          <br />
          <tbody className="mt-[18px] w-[940px] h[100px] bg-white">
            <tr className="w-[940px] h-[100px] rounded-sm border border-gray-100 ">
              <td className="flex items-center ml-[10px] mt-[24px]">
                <span>
                  {" "}
                  <img
                    src="https://www.lifewire.com/thmb/XT_va3LXufvrRYq88m8qvjjarAk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Samsung-UN32N5300AFXZA-1080p-LED-LCD-Smart-TV-5b421594c9e77c0054c1f861.jpg"
                    alt=""
                    width={78}
                    height={52}
                    className="w-[78px] h-[52px]"
                  />
                </span>

                <span className="font-cairo text-base font-semibold text-black ml-[24px]">
                  iMac 27-inch
                </span>
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Each
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Tech
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[30px]">
                Product
              </td>
              <td>
                <button className="w-[64px] h-[38px] bg-gray-100 pt-[6px] pl-[6px] text-sm font-cairo font-semibold text-black  rounded-lg flex item-center justify-start">
                  2
                </button>
              </td>
              <td>
                <button className=" ml-[40px]  w-[95px] h-[47px] bg-blue text-white text-sm font-semibold  rounded-lg">
                  Add
                </button>
              </td>
            </tr>
            <tr className="w-[940px] h-[100px] rounded-sm border border-gray-100">
              <td className="flex  items-center ml-[10px] mt-[24px]">
                <span>
                  <img
                    src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61L5QgPvgqL._AC_UF1000,1000_QL80_.jpg"
                    alt=""
                    width={63}
                    height={51}
                  />
                </span>
                <span className="font-cairo text-base font-semibold text-black ml-[24px]">
                  MacBook Air pro 113-inch
                </span>
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Each
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Tech
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[30px]">
                Product
              </td>
              <td>
                <button className="w-[64px] h-[38px] bg-gray-100 pt-[6px] pl-[6px] text-sm font-cairo font-semibold text-black  rounded-lg flex item-center justify-start">
                  2
                </button>
              </td>
              <td>
                <button className="  ml-[40px] w-[95px] h-[47px] bg-blue text-white text-sm font-semibold  rounded-lg">
                  Add
                </button>
              </td>
            </tr>
            <tr className="w-[940px] h-[100px] rounded-sm border border-gray-100">
              <td className="flex  items-center  mt-[24px] ml-[10px]">
                <span>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    width={60}
                    height={40}
                  />
                </span>
                <span className="font-cairo text-base font-semibold text-black ml-[24px]">
                  AWS Subscription
                </span>
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Each
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Tech
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[30px]">
                Services
              </td>
              <td>
                <button className="w-[64px] h-[38px] bg-gray-100 pt-[6px] pl-[6px] text-sm font-cairo font-semibold text-black  rounded-lg flex item-center justify-start">
                  1
                </button>
              </td>
              <td>
                <button className="  ml-[40px] w-[95px] h-[47px] bg-blue text-white text-sm font-semibold  rounded-lg">
                  Add
                </button>
              </td>
            </tr>
            <tr className="w-[940px] h-[100px] rounded-sm border border-gray-100">
              <td className="flex  items-center mt-[24px] ml-[10px]">
                <span>
                  <img
                    src="https://sakshingo.org/wp-content/uploads/2020/07/CABRI-WASH-Featured-Image_0e61eb07530e09f0965cd7984b82b4a2.jpg"
                    alt=""
                    width={60}
                    height={52}
                  />
                </span>
                <span className="font-cairo text-base font-semibold text-black ml-[24px]">
                  Office Sanitation
                </span>
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Each
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[30px]">
                Office Supplies
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[30px]">
                Services
              </td>
              <td>
                <button className="w-[64px] h-[38px] bg-gray-100 pt-[6px] pl-[6px] text-sm font-cairo font-semibold text-black  rounded-lg flex item-center justify-start">
                  1
                </button>
              </td>
              <td>
                <button className="  ml-[40px] w-[95px] h-[47px] bg-blue text-white text-sm font-semibold  rounded-lg">
                  Add
                </button>
              </td>
            </tr>
            <tr className="w-[940px] h-[100px] rounded-sm border border-gray-100">
              <td className="flex  items-center mt-[24px] ml-[10px]">
                <span>
                  <img
                    src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691677511/Croma%20Assets/Small%20Appliances/Coffee%20Tea%20Makers/Images/232819_0_ulgkuj.png"
                    alt=""
                    width={70}
                    height={60}
                  />
                </span>
                <span className="font-cairo text-base font-semibold text-black ml-[24px]">
                  Office Sanitation
                </span>
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Each
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[36px]">
                Office Supplies
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[30px]">
                Services
              </td>
              <td>
                <button className="w-[64px] h-[38px] bg-gray-100 pt-[6px] pl-[6px] text-sm font-cairo font-semibold text-black  rounded-lg flex item-center justify-start">
                  1
                </button>
              </td>
              <td>
                <button className="  ml-[40px] w-[95px] h-[47px] bg-blue text-white text-sm font-semibold  rounded-lg">
                  Add
                </button>
              </td>
            </tr>
            <tr className="w-[940px] h-[100px] rounded-sm border border-gray-100">
              <td className="flex  items-center mt-[24px] ml-[10px]">
                <span>
                  <img
                    src="https://5.imimg.com/data5/NN/SE/OX/SELLER-11524350/mahadev-gift-and-stationary-vadgoan-belgaum-belgaum-wnsxb-500x500.jpg"
                    alt=""
                    width={70}
                    height={50}
                  />
                </span>
                <span className="font-cairo text-base font-semibold text-black ml-[24px]">
                  Stationery Kit
                </span>
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[24px]">
                Each
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[36px]">
                Office Supplies
              </td>
              <td className="font-cairo text-base font-semibold text-black ml-[30px]">
                Product
              </td>
              <td>
                <button className="w-[64px] h-[38px] bg-gray-100 pt-[6px] pl-[6px] text-sm font-cairo font-semibold text-black  rounded-lg flex item-center justify-start">
                  1
                </button>
              </td>
              <td>
                <button className="  ml-[40px] w-[95px] h-[47px] bg-blue text-white text-sm font-semibold  rounded-lg">
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-[938px] h-[1px] bg-gray-200"></div>
        <div className="flex justify-between">
          <div className="mt-[30px]">
            <span className=" ml-[30px] text-sm font-normal font-cairo text-gray-500">
              showing
            </span>
            <span className="text-sm font-semibold font-cairo text-black ml-[2px]">
              1-6
            </span>
            <span className="text-sm font-normal font-cairo text-gray-500 ml-[2px]">
              from
            </span>
            <span className="text-sm font-semibold font-cairo text-black ml-[2px]">
              100
            </span>
            <span className="text-sm font-normal font-cairo text-gray-500 ml-[2px]">
              data
            </span>
          </div>
          <div className="flex mt-[27px] mr-[31px]">
            <button className="w-[46px] h-[46px]  flex justify-center items-center rounded-lg border border-grey text-blue text-base font-semibold">
              <FaChevronLeft />
            </button>
            <ul className="flex border border-gray rounded-lg space-x-2">
              <li className="w-[46px] h-[46px]  flex justify-center items-center rounded-lg border border-grey text-white bg-blue text-lg font-semibold">
                1
              </li>
              <li className="w-[46px] h-[46px] flex justify-center items-center text-lg text-black font-medium font-poppin">
                2
              </li>
              <li className="w-[46px] h-[46px] flex justify-center items-center text-lg text-black font-medium font-poppin">
                3
              </li>
              <li className="w-[46px] h-[46px] flex justify-center items-center text-lg text-black font-medium font-poppin">
                4
              </li>
            </ul>
            <button className="w-[46px] h-[46px]  flex justify-center items-center rounded-lg border border-grey text-blue text-base font-semibold">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCatalog;
