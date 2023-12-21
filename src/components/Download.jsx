import React from 'react'
import { IoClose } from "react-icons/io5";

const ShowDownload = ({closeDownload}) => {
  return (
    <>
    <div className=" fixed  "></div>
      <div className='download border-2 border-blue mt-[30px]  bg-slate-50 flex flex-col'>
        <div className="shadow-1  bg-white h-[50px] w-[918px] flex justify-between items-center">
        <h2 className="text-lg font-cairo font-semibold text-black ml-[25px]">
          Import Item
          </h2>
          <button
            onClick={closeDownload}
            className=" flex items-center justify-center bg-red-600 w-[18px] h-[18px] text-white rounded-full mr-[24px]"
          >
            <IoClose />
          </button>
        </div>
        
         

      <div className='flex flex-col'>
       <p className="flex justify-center items-center text-2xl font-semibold font-cairo text-black mt-[41px]">Download Import File Template</p>
        <div className='  mt-[46px] flex justify-center items-center'>
        <button className=" w-[210px] h-[47px] bg-blue rounded-md font-cairo text-sm font-semibold text-white
        ">Download</button>
        </div>
        
      
        <p className='mt-[73px] flex justify-center items-center text-2xl font-semibold font-cairo text-black'>Upload the Updated File</p>
        <div className=' mt-[33px] w-[595px] h-[391px] flex justify-center items-center mx-auto border-4 rounded-3xl border-dashed border-gray-200  bg-gray-100'>
        <div className='relative  mt-[50px] flex flex-col'>
        <svg  id="blob" xmlns="http://www.w3.org/2000/svg" width="235" height="232" viewBox="0 0 235 232" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M104.665 8.46388C130.681 8.41793 160.623 -9.33937 181.114 6.72313C201.987 23.0857 189.621 57.8924 199.271 82.6247C208.125 105.317 233.95 120.338 234.94 144.683C235.97 169.998 223.591 195.964 204.56 212.646C186.258 228.689 159.92 229.959 135.666 231.703C115.329 233.166 95.6065 229.117 76.5513 221.851C58.6975 215.043 42.5391 205.161 29.4635 191.207C15.9864 176.824 3.99917 160.342 0.691857 140.894C-2.65799 121.196 7.03028 102.657 11.0775 83.0908C16.456 57.089 7.65232 23.5284 28.389 6.9929C48.6982 -9.20177 78.7092 8.50973 104.665 8.46388Z" fill="#ECF2FD"/>
</svg>
<svg  id="svg2" className='mt-[25px]'  xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
  <path d="M78.6986 68.9876H44.4462C43.0959 68.9876 42 67.8887 42 66.5344V17.4697C42 16.1153 43.0959 15.0166 44.4462 15.0166H78.6986C80.0495 15.0166 81.1455 16.1153 81.1455 17.4697V66.5344C81.1456 67.8887 80.0497 68.9876 78.6986 68.9876Z" fill="#F1F5F7"/>
  <path d="M54.2328 29.7354H44.4462C43.0959 29.7354 42 28.6363 42 27.282C42 25.928 43.0959 24.8291 44.4462 24.8291H54.2328C55.5831 24.8291 56.679 25.928 56.679 27.282C56.6792 28.6363 55.5832 29.7354 54.2328 29.7354Z" fill="#46B34C"/>
  <path d="M54.2328 39.5485H44.4462C43.0959 39.5485 42 38.4498 42 37.0948C42 35.7418 43.0959 34.6426 44.4462 34.6426H54.2328C55.5831 34.6426 56.679 35.7418 56.679 37.0948C56.6792 38.4496 55.5832 39.5485 54.2328 39.5485Z" fill="#46B34C"/>
  <path d="M54.2328 49.361H44.4462C43.0959 49.361 42 48.2618 42 46.9085C42 45.5541 43.0959 44.4551 44.4462 44.4551H54.2328C55.5831 44.4551 56.679 45.5541 56.679 46.9085C56.6792 48.2618 55.5832 49.361 54.2328 49.361Z" fill="#46B34C"/>
  <path d="M54.2328 59.1752H44.4462C43.0959 59.1752 42 58.0763 42 56.7219C42 55.3676 43.0959 54.2686 44.4462 54.2686H54.2328C55.5831 54.2686 56.679 55.3676 56.679 56.7219C56.679 58.0763 55.5832 59.1752 54.2328 59.1752Z" fill="#46B34C"/>
  <path d="M68.9124 29.7354H64.0191C62.6689 29.7354 61.5723 28.6363 61.5723 27.282C61.5723 25.928 62.6689 24.8291 64.0191 24.8291H68.9124C70.2625 24.8291 71.3586 25.928 71.3586 27.282C71.3586 28.6363 70.2625 29.7354 68.9124 29.7354Z" fill="#46B34C"/>
  <path d="M68.9124 39.5485H64.0191C62.6689 39.5485 61.5723 38.4498 61.5723 37.0948C61.5723 35.7418 62.6689 34.6426 64.0191 34.6426H68.9124C70.2625 34.6426 71.3586 35.7418 71.3586 37.0948C71.3586 38.4496 70.2625 39.5485 68.9124 39.5485Z" fill="#46B34C"/>
  <path d="M68.9124 49.361H64.0191C62.6689 49.361 61.5723 48.2618 61.5723 46.9085C61.5723 45.5541 62.6689 44.4551 64.0191 44.4551H68.9124C70.2625 44.4551 71.3586 45.5541 71.3586 46.9085C71.3586 48.2618 70.2625 49.361 68.9124 49.361Z" fill="#46B34C"/>
  <path d="M68.9124 59.1752H64.0191C62.6689 59.1752 61.5723 58.0763 61.5723 56.7219C61.5723 55.3676 62.6689 54.2686 64.0191 54.2686H68.9124C70.2625 54.2686 71.3586 55.3676 71.3586 56.7219C71.3586 58.0763 70.2625 59.1752 68.9124 59.1752Z" fill="#46B34C"/>
  <path d="M46.0075 5.7677C45.4491 5.3016 44.7004 5.10013 43.9961 5.24795L4.85048 12.607C3.69089 12.8239 2.854 13.8343 2.854 15.0166V68.9875C2.854 70.165 3.69089 71.1801 4.85048 71.3973L43.9961 78.7565C44.1426 78.7855 44.2944 78.8009 44.4463 78.8009C45.0138 78.8009 45.5665 78.6042 46.0075 78.2357C46.5706 77.7705 46.8923 77.0737 46.8923 76.3471V7.65737C46.8922 6.92598 46.5704 6.23396 46.0075 5.7677Z" fill="#3CA241"/>
  <path d="M36.5005 50.2007L28.7633 41.3354L36.5886 31.2478C37.4204 30.1775 37.2237 28.6366 36.162 27.8032C35.1004 26.9687 33.5636 27.165 32.7279 28.2292L25.4804 37.5714L19.374 30.5758C18.4789 29.5444 16.9323 29.4513 15.9241 30.345C14.9068 31.2372 14.8036 32.7874 15.6943 33.8034L22.4226 41.5162L15.6014 50.3083C14.7693 51.3783 14.9653 52.9195 16.0267 53.7531C16.4772 54.1014 17.011 54.2683 17.5341 54.2683C18.263 54.2683 18.9829 53.9446 19.4666 53.3208L25.7058 45.2743L32.8201 53.425C33.3049 53.9838 33.98 54.2684 34.6597 54.2684C35.2326 54.2684 35.8055 54.0671 36.2708 53.6594C37.2883 52.7672 37.3905 51.2169 36.5005 50.2007Z" fill="#FCFCFC"/>
</svg>
<svg id="svg3" className='' xmlns="http://www.w3.org/2000/svg" width="68" height="12" viewBox="0 0 68 12" fill="none">
  <ellipse cx="34" cy="6" rx="34" ry="6" fill="#E0E0E0"/>
</svg>

<p  id="position" className=' text-center flex items-center justify-stretch font-extrabold text-2xl text-purple font-cairo '>Drag and drop files to upload</p>


<p className='mt-[5px] flex justify-center items-center ml-[30px] text-center text-xl font-bold font-cairo text-purple'>or</p>
     <div className='flex items-center justify-center'>
     <button className=' mt-[23px]  ml-[30px] rounded-md w-[210px] h-[47[x] bg-blue text-white pl-[41px] pr-[41px] pt-[15px] pb-[15px] text-sm font-semibold font-cairo'>Search file to upload</button>
     </div>

        </div>
        
       

    
        </div>


       </div> 
      
      <div className=' mt-[94px] w-[912px] h-[1px] bg-gray-300'> </div>
      <div className='flex justify-end space-x-6 items-center mt-[23px] mr-[28px]'>
        <button className='w-[118px] h-[42px] border border-gray-400 rounded-md text-sm font-semibold text-gray-400 font-cairo'>Cancel</button>
        <button  className='w-[118px] h-[42px] bg-blue rounded-md text-sm font-semibold text-white font-cairo '> Upload</button>
      </div>
      </div> 
 

      </>
  )
}

export default ShowDownload
/** */