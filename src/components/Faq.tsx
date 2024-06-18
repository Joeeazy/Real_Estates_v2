import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/constants/index";
export default function Faq() {
  return (
    <div className=" container mx-auto border-b my-20 lg:w-3/4">
      <h2 className="mb-20 tracking-tighter text-center text-3xl sm:text-4xl lg:text-5xl">
        FAQ
      </h2>
      <Accordion type="single" collapsible className=" w-full lg:text-xl ">
        {FAQ.map((faq, index) => (
          <AccordionItem value={faq.value} key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
