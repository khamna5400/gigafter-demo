import { motion } from "framer-motion";
import { Calendar, FileText, Clock, CreditCard } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Smart Booking",
    description: "Browse and book artists with real-time availability sync. No more double bookings or scheduling conflicts.",
  },
  {
    icon: FileText,
    title: "Digital Contracts",
    description: "Send, sign, and store contracts securely in the cloud. Get legally binding signatures in minutes, not days.",
  },
  {
    icon: Clock,
    title: "Show Day Management",
    description: "Coordinate logistics and schedules in real-time. Keep everyone aligned from load-in to encore.",
  },
  {
    icon: CreditCard,
    title: "Instant Payments",
    description: "Process artist payments with one click. Automated invoicing, transparent fees, and fast payouts.",
  },
];

const Features = () => {
  return (
    <>
      {/* Divider before Features */}
      <div className="max-w-6xl mx-auto px-6 mt-16 lg:-mt-8">
        <div className="h-px" style={{ backgroundColor: "#E5E7EB", opacity: "0.65" }} />
      </div>
      
      <section id="features" className="pt-24 pb-8 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-muted-foreground text-sm font-medium mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to{" "}
            <span className="gradient-text">run world-class shows</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete, end-to-end system designed to support every part of your live music operation — from planning to show night and beyond.
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-gig-lg hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-5 shadow-gig-md group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-sm font-medium italic text-center max-w-2xl mx-auto" style={{ color: "#4B5563" }}>
            GigAfter is built for venues that host live music regularly and want fewer operational headaches.
          </p>
        </motion.div>
        
        {/* Divider */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="h-px" style={{ backgroundColor: "#E5E7EB", opacity: "0.65" }} />
        </div>
      </div>
    </section>
    </>
  );
};

export default Features;