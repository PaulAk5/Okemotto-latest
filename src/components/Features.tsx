import { DollarSign, Zap, Target, BarChart3 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Extra Income, Zero Hassle",
      description: "Earn for simply doing your normal trips."
    },
    {
      icon: Zap,
      title: "No Upfront Costs",
      description: "Installation is free; you just drive and get paid."
    },
    {
      icon: Target,
      title: "Exclusive Campaign Access",
      description: "Get matched with top brands looking to advertise in your area."
    },
    {
      icon: BarChart3,
      title: "Track Your Earnings in the App",
      description: "See your ad performance and payouts in real-time."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Drive with Okemoto?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We install lightweight, weatherproof rooftop advertising units on your car at no cost to you. 
            Advertisers pay, you earn, while driving the same routes you already do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-mint/10 rounded-2xl flex items-center justify-center group-hover:bg-mint/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-mint" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};