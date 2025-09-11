import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Do I have to change my driving routes?",
      answer: "No — you keep driving your usual trips. Our advertising units work with your existing routes and schedule."
    },
    {
      question: "Does the ad unit affect my fuel consumption?",
      answer: "It's lightweight and aerodynamic, so impact is minimal. The unit is designed to have virtually no effect on your vehicle's performance."
    },
    {
      question: "What if my car is not owned outright?",
      answer: "No problem — we work with financed and fleet-owned vehicles too. We just need confirmation that you're authorized to make modifications."
    },
    {
      question: "How much can I really earn?",
      answer: "Earnings typically range from ₦50,000–₦100,000 per month, depending on your driving hours, routes, and campaign availability. High-traffic areas and more driving hours generally mean higher earnings."
    },
    {
      question: "Is there a contract or commitment period?",
      answer: "No long-term contracts. You can opt out at any time with 30 days notice. We believe in keeping our drivers happy, not trapped."
    },
    {
      question: "How is the ad unit installed?",
      answer: "Our certified technicians handle the installation at no cost to you. The process takes about 2 hours and is completely reversible when you're ready to remove it."
    },
    {
      question: "What happens if the ad unit gets damaged?",
      answer: "We provide full insurance coverage for the advertising unit. Any damage from normal wear and tear is covered by us."
    },
    {
      question: "When do I get paid?",
      answer: "Payments are made monthly, directly to your bank account. You can track your earnings in real-time through our app."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};