import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-muted/30 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-8 lg:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-muted-foreground">Now accepting early access signups</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
              Everything venues need to book and run{" "}
              <span className="gradient-text">live music</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              GigAfter helps live music venues book artists, manage contracts, coordinate show days, and handle payments in one place. No scattered emails. No lost details. No payment headaches.
            </p>

            <div className="italic-text">
              <Building2 className="w-4 h-4" style={{ color: "#6B7280" }} />
              <span>Built specifically for live music venues</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <Link to="/signup">
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#how-it-works">
                  <Play className="w-5 h-5" />
                  See How It Works
                </a>
              </Button>
            </div>
            
          </motion.div>
          
          {/* Right - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative animate-float">
              {/* Dashboard card */}
              <div className="relative glass-card rounded-2xl border border-border p-6 shadow-gig-xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  <div className="flex-1 ml-4 h-6 bg-muted rounded-md" />
                </div>
                
                {/* Content grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-accent/50 rounded-xl">
                    <div className="text-xs text-muted-foreground mb-2">Upcoming Shows</div>
                    <div className="text-2xl font-bold text-foreground">12</div>
                    <div className="text-xs text-gig-accent font-medium">+3 this week</div>
                  </div>
                  <div className="p-4 bg-accent/50 rounded-xl">
                    <div className="text-xs text-muted-foreground mb-2">Pending Contracts</div>
                    <div className="text-2xl font-bold text-foreground">4</div>
                    <div className="text-xs text-muted-foreground">2 awaiting signature</div>
                  </div>
                </div>
                
                {/* Artist list preview */}
                <div className="space-y-3">
                  {[
                    { name: "Jazz Quartet", date: "Tonight, 8 PM", status: "confirmed" },
                    { name: "Acoustic Duo", date: "Tomorrow, 7 PM", status: "pending" },
                    { name: "Rock Band", date: "Sat, 9 PM", status: "confirmed" },
                  ].map((show, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-background/80 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                          {show.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-sm">{show.name}</div>
                          <div className="text-xs text-muted-foreground">{show.date}</div>
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        show.status === "confirmed" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {show.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;