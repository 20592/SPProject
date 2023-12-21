
import React, {useState} from "react";
import { FaFilter } from "react-icons/fa";
import MyModal from "./ShowModal";

const RequestModal = () => {
    const [showModal,setShowModal] = useState(false);
    const closeModal =() => setShowModal(false);
    return (
    <div className="">
         {!showModal && (
      <button  onClick={ () => setShowModal(true)} className=" w-[202px] h-[50px] rounded-md border-2 border-blue ml-[38px] mt-[28px] transition-all duration-200 ease-in-out">
        <div className="flex justify-between items-center">
          <FaFilter className="text-xl text-blue ml-[11px] font-bold" />
          <p className="text-lg  font-semibold font-cairo text-blue leading-normal not-italic ml-[10px] mr-[20px] my-[8px]">
            Search By Filter
          </p>
        
        </div>
      </button>
         )}
     {showModal && <MyModal  closeModal={closeModal} />}
   
    </div>
  );
};

export default RequestModal;