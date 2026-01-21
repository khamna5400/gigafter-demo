import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, ArrowRight, Calendar, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const SignupSuccess = () => {
  const navigate = useNavigate();

  const nextSteps = [
    {
      icon: Mail,
      title: "Check your inbox",
      description: "We've sent a confirmation email with more details.",
    },
    {
      icon: Calendar,
      title: "Mark your calendar",
      description: "GigAfter launches April 1, 2026. You'll be first in line!",
    },
    {
      icon: Sparkles,
      title: "Share the love",
      description: "Know other venues? Spread the word and help them save too.",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gig-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gig-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container px-6 py-12 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-20 h-20 rounded-full bg-gradient-to-b from-[#7b2d9f] to-[#fdd82e] flex items-center justify-center mx-auto mb-8"
        >
          <Check className="w-10 h-10 text-white" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          You're on the list! 🎉
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground mb-12"
        >
          Welcome to the GigAfter family. You've locked in our early bird pricing of{" "}
          <span className="text-foreground font-semibold">$30/month forever</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 rounded-2xl mb-8"
        >
          <h2 className="text-lg font-semibold mb-6">What happens next?</h2>
          
          <div className="space-y-6">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            variant="gradient"
            size="lg"
            onClick={() => navigate("/")}
          >
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupSuccess;