import { FEATURED_PROPERTIES } from "@/constants/index";
import React from "react";

export default function FeaturedHouses() {
  return (
    <div className="py-10 px-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 space-x-10 items-center justify-between">
        {FEATURED_PROPERTIES.map((item, index) => (
          <div
            key={index}
            className="items-center px-20 justify-between grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 "
          >
            <div>{item.image}</div>
            <div>
              <h2>{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
