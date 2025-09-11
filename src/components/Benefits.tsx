import { Car, Shield, Users, Clock } from "lucide-react";

export const Benefits = () => {
  return (
    <section className="py-24 bg-accent/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who We're Looking For
            </h2>
            <p className="text-xl text-muted-foreground">
              If you're a driver in Lagos (Uber, Bolt, InDrive, Lagride, or independent), you could qualify if:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-mint text-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Good Condition Vehicle
              </h3>
              <p className="text-muted-foreground">
                2010 model year or newer
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mint text-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Regular Driver
              </h3>
              <p className="text-muted-foreground">
                Drive at least 20 hours per week
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-mint text-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                High-Traffic Routes
              </h3>
              <p className="text-muted-foreground">
                Regularly cover busy areas
              </p>
            </div>
          </div>
          
          <div className="bg-card border border-mint/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              What's in It for You
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-mint mb-2">₦50,000–₦100,000</div>
                <p className="text-muted-foreground">per month (based on location and hours driven)</p>
              </div>
              
              <div>
                <div className="text-xl font-semibold text-foreground mb-2">Exclusive incentives</div>
                <p className="text-muted-foreground">for "swarm" campaigns — coordinated high-visibility drives with bonus pay</p>
              </div>
              
              <div>
                <div className="text-xl font-semibold text-foreground mb-2">Flexible commitment</div>
                <p className="text-muted-foreground">stay as long as you like</p>
              </div>
            </div>
            
            <div className="bg-mint/10 border border-mint/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                🚨 Why Join Now
              </h4>
              <p className="text-muted-foreground mb-4">
                We're launching with limited slots for our pilot program in Lagos. Joining the waitlist today means:
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mint rounded-full" />
                  <span>First in line for installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mint rounded-full" />
                  <span>Priority matching with high-paying campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-mint rounded-full" />
                  <span>Exclusive driver perks for early members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};