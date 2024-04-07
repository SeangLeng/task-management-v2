'use client';

import { AccordionItemData } from "@/constrain/AccordionItem";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AboutUsAccordin() {

  return (
    <Accordion variant="light" defaultExpandedKeys={["1"]}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
    >
      {
        AccordionItemData.map(item => (
          <AccordionItem classNames={{
            title: 'font-semibold text-text-color',
          }} key={item.id} aria-label={item.label} title={item.label}>
            {item.describe}
          </AccordionItem>
        ))
      }
    </Accordion>
  );
}
