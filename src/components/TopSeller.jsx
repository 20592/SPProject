import React from "react";

const TopSeller = () => {
  const staticTopSellerData = [
    {
      imgUrl:"https://cdn-icons-png.flaticon.com/512/9576/9576233.png",
      name: "Wink Harry",
      products: "42 Products",
      amount: "$4,12,344",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-jOaRaWsWJX9vpfeo6Pt-i42mu2tEmo1Vw&usqp=CAU",
      name: "  Shane william",
      products: "12 Products",
      amount: "$1,36,417",
    },
    {
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGQ8dQ-LMiMmTEyBijR0FzpQHC7tH6qTE2g&usqp=CAU",
      name: "Genmark tolly",
      products: "88 Products",
      amount:"$4,12,344",
    },
    {
      imgUrl: "https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png",
      name: "Harry perker",
      products: "36 products",
      amount: "$4,12,344",
    },
    {
      imgUrl:"https://i.pinimg.com/474x/60/b4/7e/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg",
      name: "Jape Collin",
      products: "07 Products",
      amount: "$4,12,344",
    },
  ];
  return (
    <div className="w-[372px] h-[441px] bg-white  rounded-lg ml-[30px] mt-[1px] hover:scale-105 transition duration-200">
      <p className=" pl-[30px] pt-[20px] text-lg font-semibold text-darkPurple font-cairo leading-normal not-italic">
        Top Seller this Week
      </p>

      <div className="">
        {staticTopSellerData.map((item, index) => (
          
          <div key={index} className="">
            <div className="flex   justify-between  items-center mx-7 my-4">
              <div className="flex">
              <img
                src={item.imgUrl}
                alt=""
                className="rounded-full border-2 border-blue"
                width={56}
                height={56}
              />
              <div className="flex flex-col my-2 mx-2.5">
                <p className="text-base font-cairo font-semibold text-darkPurple not-italic leading-normal">{item.name}</p>
                <p className="text-xs font-cairo font-semibold text-slate-700">{item.products}</p>
              </div>
              </div>
              
              <div className="text-base font-cairo font-semibold text-darkPurple not-italic leading-normal">{item.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopSeller;
