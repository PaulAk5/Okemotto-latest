import { Button } from "@/components/ui/button";

export const CTA = () => {
  const openGoogleForm = () => {
    window.open('https://forms.zohopublic.com/akintundepau123gm1/form/DriverWaitlist/formperma/ur-ILS3OJpU7bOP4-_zeQ12J1IUDt4f_7-zNjZZA0xE');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-mint/10 via-background to-mint-light/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Turn Your Drive Into Income?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of drivers already on our waitlist. Be among the first to start earning with Okemotto.
          </p>
          
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-12 py-6 h-auto"
            onClick={openGoogleForm}
          >
            Join the Waitlist →
          </Button>
          
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mint rounded-full" />
              <span>Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mint rounded-full" />
              <span>No commitment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-mint rounded-full" />
              <span>First access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
