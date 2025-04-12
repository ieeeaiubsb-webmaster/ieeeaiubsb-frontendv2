import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/faqData";

export function Faq() {
  return (
    <div className={`mx-auto max-w-5xl px-4 mt-4 sm:px-6 lg:px-8 `}>
      <h2 className="text-center text-4xl font-bold text-sky-800 mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem value={faq.question} key={faq.question}>
            <AccordionTrigger
              className={`text-justify tracking-wide md:text-lg`}
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className={`text-justify md:text-base`}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
