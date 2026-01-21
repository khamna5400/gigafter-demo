import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Shield, ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="pt-20 pb-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      
      <div className="container relative z-10 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-6">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Early Bird Pricing – Limited Spots</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Lock in your <span className="gradient-text">founder rate</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be one of the first 50 venues to join and secure exclusive early bird pricing forever.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card border border-border rounded-2xl p-8 shadow-gig-lg">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-primary rounded-full text-primary-foreground text-sm font-medium shadow-lg">
                  <Users className="w-4 h-4" />
                  <span>First 50 Venues Only</span>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-muted-foreground mb-2">Early Bird Price</p>
                <p className="text-sm text-muted-foreground mb-4">Replace hours of emails, contracts, and payment follow-ups with one system.</p>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold">$30</span>
                  <span className="text-xl text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground">Starting April 1, 2026</p>
                
                <div className="mt-4 p-3 bg-accent rounded-lg">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Regular price:</span>{" "}
                    <span className="line-through text-muted-foreground">$50/month</span>{" "}
                    <span className="text-gig-accent font-semibold">Save 40%</span>
                  </p>
                </div>
              </div>

              <div className="my-8 border-t border-border" />

              <ul className="space-y-4 mb-8">
                {[
                  "Smart artist booking & availability sync",
                  "Digital contracts with e-signatures",
                  "Real-time show day coordination",
                  "One-click instant payments",
                  "Unlimited artists & bookings",
                  "Priority support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="gradient" size="xl" className="w-full" asChild>
                <Link to="/signup">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Cancel anytime
              </p>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Locked-In Pricing Guarantee</h3>
                  <p className="text-muted-foreground text-sm">
                    First 50 venues are locked in at $30/month forever. After May 1, 2026, new venues pay $50/month.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">No Charges Until Launch</h3>
                  <p className="text-muted-foreground text-sm">
                    We won't charge your card until April 1, 2026. You'll receive reminders and confirmation emails before any billing begins.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Early Access Benefits</h3>
                  <p className="text-muted-foreground text-sm">
                    Sign up now to receive early access to the platform, provide feedback, and help shape GigAfter before the public launch.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                Questions? Contact us at{" "}
                <a href="mailto:hello@gigafter.com" className="text-foreground hover:underline">
                  hello@gigafter.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Divider */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="h-px" style={{ backgroundColor: "#E5E7EB", opacity: "0.65" }} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;