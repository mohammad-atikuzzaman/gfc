import Banner from "@/components/Banner";
import SideNav from "@/components/navaigation/SideNav";
import Offer from "@/components/Offer";
import React from "react";


const Restaurant = () => {
  return (
    <div className="flex justify-between pt-6">
        <SideNav />
      <main className="w-[73%] pr-12 space-y-12">
        <Banner />
        <Offer/>
      </main>
    </div>
  );
};

export default Restaurant;
