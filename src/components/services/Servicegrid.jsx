import React from 'react';
import { IoRocketOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { TbView360Arrow } from "react-icons/tb";

const InfoCard = ({ Icon, text }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="mb-4 text-yellow-500">
        <Icon className="w-12 h-12" />
      </div>
      <p className="text-white text-center text-lg">
        {text}
      </p>
    </div>
  );
};

const Servicegrid = () => {
  const cardsData = [
    {
      Icon: IoRocketOutline,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      Icon: HiOutlineLightBulb,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      Icon: TbView360Arrow,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#cb161c] to-[#ec1a44]  p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <InfoCard key={index} Icon={card.Icon} text={card.text} />
      ))}
    </div>
  );
};

export default Servicegrid;
