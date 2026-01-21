import { motion } from "framer-motion";
import { Search, FileSignature, CalendarCheck, Banknote, ArrowRight, Music, Calendar } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Book",
    description: "Browse local artists by genre, availability, and budget. Send booking requests with one click.",
  },
  {
    number: "02",
    icon: FileSignature,
    title: "Sign Contracts",
    description: "Auto-generated contracts sent instantly. Artists sign digitally, and you get notified in real-time. No more email chains. No follow-ups. No missing attachments.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Coordinate Show Day",
    description: "Shared timelines keep everyone aligned. Load-in times, sound check, set lists — all in one place accessible to your whole team.",
  },
  {
    number: "04",
    icon: Banknote,
    title: "Pay Instantly",
    description: "Show’s over? Pay artists instantly with one click. Automatic invoicing, transparent fees, and instant confirmation for everyone.",
  },
];

const sampleArtists = [
  {
    initials: "MC",
    name: "The Midnight Collective",
    genre: "Jazz Fusion",
    priceRange: "$350-450",
    availability: "Available Sat, Jan 18",
  },
  {
    initials: "SA",
    name: "Sarah & The Acoustics",
    genre: "Folk/Acoustic",
    priceRange: "$200-300",
    availability: "Available Fri, Jan 17",
  },
  {
    initials: "JT",
    name: "Jazz Trio",
    genre: "Jazz",
    priceRange: "$400-500",
    availability: "Available Sun, Jan 19",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="pt-16 pb-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background pointer-events-none" />
      
      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-muted-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            From booking to payment in{" "}
            <span className="gradient-text">four simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            GigAfter streamlines your entire live music workflow — from discovery to payment.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                {/* Arrow connector - mobile/tablet/desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:flex absolute -right-4 top-12 text-muted-foreground/30">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
                
                <div className="text-center">
                  {/* Step number and icon */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    {/* Icon container */}
                    <div className="relative w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-gig-lg group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-gig-sm">
                      <span className="text-xs font-bold text-foreground">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo Visuals - Two Panel Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent border border-border text-muted-foreground text-sm font-medium mb-4">
              Designed for real show workflows
            </span>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="relative glass-card rounded-2xl border border-border p-6 shadow-gig-xl">
              <div className="flex items-center gap-2 mb-4">
                <Music className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Artist Discovery</span>
              </div>
              
              {/* Search Bar Mockup */}
              <div className="flex items-center gap-2 p-3 bg-accent/50 rounded-lg mb-4">
                <Search className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Search artists...</span>
              </div>
              
              {/* Filter Chips */}
              <div className="flex flex-wrap gap-2 mb-5">
                <Badge variant="secondary" className="text-xs">Jazz</Badge>
                <Badge variant="secondary" className="text-xs">Acoustic</Badge>
                <Badge className="text-xs bg-primary/20 text-primary border-primary/30">Available This Week</Badge>
              </div>
              
              {/* Artist Cards */}
              <div className="space-y-3">
                {sampleArtists.map((artist, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg hover:bg-accent/50 transition-colors">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                        {artist.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm truncate">{artist.name}</span>
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">{artist.genre}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{artist.priceRange}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {artist.availability}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs h-7 px-2">
                      Book
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Show Day Coordination */}
            <div className="relative glass-card rounded-2xl border border-border p-6 shadow-gig-xl">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Show Day View</span>
              </div>
              
              {/* Timeline */}
              <div className="mb-6">
                <div className="text-xs font-medium text-muted-foreground mb-3">Timeline</div>
                <div className="space-y-3">
                  {[
                    { time: "5:00 PM", event: "Load-in begins", status: "complete" },
                    { time: "6:30 PM", event: "Sound check", status: "complete" },
                    { time: "7:00 PM", event: "Doors open", status: "current" },
                    { time: "8:00 PM", event: "Set 1 starts", status: "upcoming" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-2.5 h-2.5 rounded-full ${
                        item.status === "complete" 
                          ? "bg-green-500" 
                          : item.status === "current" 
                            ? "bg-primary" 
                            : "bg-muted-foreground/30"
                      }`} />
                      <div className="flex-1 flex items-center justify-between">
                        <span className={`text-sm ${item.status === "current" ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                          {item.event}
                        </span>
                        <span className="text-xs text-muted-foreground">{item.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 bg-accent/50 rounded-lg">
                  <span className="text-xs text-muted-foreground">Artist</span>
                  <span className="text-sm font-medium">The Midnight Collective</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-accent/50 rounded-lg">
                  <span className="text-xs text-muted-foreground">Contract</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Signed</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-accent/50 rounded-lg">
                  <span className="text-xs text-muted-foreground">Payment</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 font-medium">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Divider */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="h-px" style={{ backgroundColor: "#E5E7EB", opacity: "0.65" }} />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;