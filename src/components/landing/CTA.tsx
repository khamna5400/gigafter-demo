import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="pt-16 pb-20 relative overflow-hidden">
      <div className="container relative z-10 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-muted-foreground">Limited early access spots available</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to transform your{" "}
            <span className="gradient-text">venue operations?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join the waitlist today and be among the first venues to experience a simpler way to manage live music. Early members receive founder pricing and early access.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl" asChild>
              <Link to="/signup">
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            Free during beta • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;