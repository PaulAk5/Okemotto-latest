import { UserPlus, CheckCircle, Car, CreditCard } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Join the Waitlist",
      description: "Fill out our quick form (only 5 questions) so we can match you to campaigns."
    },
    {
      icon: CheckCircle,
      title: "Get Approved",
      description: "We review your vehicle and driving routes."
    },
    {
      icon: Car,
      title: "Install & Drive",
      description: "We install the rooftop ad unit and you start earning immediately."
    },
    {
      icon: CreditCard,
      title: "Get Paid Monthly",
      description: "Your ad earnings are sent directly to your account."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Getting started is simple. Here's how you can begin earning with Okemotto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step number and connector */}
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-mint text-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-mint/30 transform translate-x-8" />
                )}
              </div>
              
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 bg-mint/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-mint/20 transition-colors duration-300">
                  <step.icon className="w-7 h-7 text-mint" />
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
