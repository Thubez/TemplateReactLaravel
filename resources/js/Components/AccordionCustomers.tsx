import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "@/Components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react";
import { Section } from "@/types/types";

export default function AccordionSilabus({ data }: { data: Section[]; }) {

  if (!data || data.length === 0) {
    return <p className="text-muted-foreground">No sections available.</p>;
  }
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {data.map((section, index) => (
        <Card key={index} onClick={() => toggleAccordion(index)} className="border-primary">
          <CardHeader className="cursor-pointer">
            <div className="flex items-center justify-between">
              <CardTitle>{section.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{section.lessons} modul</Badge>
                {openIndex === index ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </div>
            </div>
          </CardHeader>
          {/* Accordion Content */}
          {openIndex === index && (
            <CardContent>
              <p className="text-muted-foreground mb-4">{section.description}</p>
              <ul className="space-y-4">
                {section.content.map((item, index) => (
                  <li key={index} className="bg-secondary p-3 rounded-lg">
                    <h3 className="font-medium mb-1">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ul>

            </CardContent>

          )}
        </Card>
      ))}
    </div>
  );
};


