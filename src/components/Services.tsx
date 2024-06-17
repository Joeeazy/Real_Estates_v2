import { SERVICES_TEXT } from "@/constants/index";
import React from "react";
import Image from "../../node_modules/next/image";

export default function Services() {
  return (
    <div className="container mx-auto my-8 border-b pb-10">
      <h2 className="mb-20 text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl">
        Services
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="p-6">
            <Image
              className="rounded-xl object-cover"
              src="/service.jpeg"
              width={600}
              height={600}
              alt="services"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="mt-10 text-5xl lg:text-7xl">
            We are<span className="leading-snug lg:block"> available in</span>{" "}
            <span className="font-bold">40+ countries!</span>
          </h2>
          <p className="max-w-xl py-6 text-lg tracking-tighter lg:pr-20">
            {SERVICES_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
}
