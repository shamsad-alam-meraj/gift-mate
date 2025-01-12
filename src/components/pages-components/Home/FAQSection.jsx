import SectionHeader from "@/components/shared-components/SectionHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="mt-10 px-4">
      <SectionHeader title="Frequently Asked Questions" />

      <div className="flex lg:flex-row flex-col lg:space-x-10 mt-3">
        <div className="lg:flex-[0.5] flex-1  items-center h-full">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is your return policy?</AccordionTrigger>
              <AccordionContent>
                You can return items within 30 days of purchase. Please ensure
                they are in original condition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do you offer international shipping?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we ship to most countries. Shipping fees vary based on your
                location.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I track my order?</AccordionTrigger>
              <AccordionContent>
                {` Once your order is shipped, you'll receive a tracking link via email
           or SMS.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I create order without creating account?
              </AccordionTrigger>
              <AccordionContent>
                {` No, You have to create an account to create an order. We will add this feature ASAP.`}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Can I create order without creating account?
              </AccordionTrigger>
              <AccordionContent>
                {` No, You have to create an account to create an order. We will add this feature ASAP.`}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="lg:flex-[0.5] flex-1 ">
          <img src="/assets/images/faq.jpeg" alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
