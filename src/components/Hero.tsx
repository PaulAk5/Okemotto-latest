import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car.jpg";

export const Hero = () => {
  const openGoogleForm = () => {
    window.open('https://forms.zohopublic.com/akintundepau123gm1/form/DriverWaitlist/formperma/ur-ILS3OJpU7bOP4-_zeQ12J1IUDt4f_7-zNjZA0xE', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/20 to-mint-light/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-mint/5 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-mint/10 text-mint-dark px-4 py-2 rounded-full text-sm font-medium">
                🚗 Now launching in Lagos
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="block">Okemoto</span>
                <span className="block text-3xl lg:text-4xl font-normal text-muted-foreground mt-2">
                  Turn Every Drive into Extra Cash
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Your daily routes can do more than just get passengers from VI to Ikoyi — they can earn you steady ad income.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                onClick={openGoogleForm}
              >
                Join the Waitlist →
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto border-mint text-mint hover:bg-mint/10"
              >
                Learn How It Works
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-mint rounded-full" />
                <span>Free installation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-mint rounded-full" />
                <span>₦50k-₦100k/month</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-mint rounded-full" />
                <span>Zero upfront costs</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Modern car with rooftop advertising display" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mint/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-mint text-foreground p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">₦50,000</div>
              <div className="text-sm">avg. monthly earnings</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background border-2 border-mint p-4 rounded-xl shadow-lg">
              <div className="text-lg font-semibold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">drivers waiting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
