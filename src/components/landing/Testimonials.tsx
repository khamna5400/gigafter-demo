import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "GigAfter cut our booking admin time by 80%. What used to take hours now takes minutes. It's completely transformed how we manage our live music program.",
    author: "Sarah Mitchell",
    role: "Venue Manager",
    venue: "The Blue Note Lounge",
    avatar: "SM",
  },
  {
    quote: "The contract management alone is worth it. No more chasing down signatures or digging through emails. Everything is organized and accessible instantly.",
    author: "Marcus Chen",
    role: "Entertainment Director",
    venue: "Riverside Music Hall",
    avatar: "MC",
  },
  {
    quote: "Finally, a platform built by people who understand live music. The show-day coordination features keep our entire team in sync and our artists happy.",
    author: "Emily Rodriguez",
    role: "Operations Lead",
    venue: "The Grand Theatre",
    avatar: "ER",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-12 pb-8 relative">
      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Loved by{" "}
            <span className="gradient-text">venue owners everywhere</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of venues that have transformed their live music operations with GigAfter.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border relative group hover:border-primary/20 transition-all duration-300 hover:shadow-gig-lg">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gig-purple text-gig-purple" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gig-purple to-gig-blue flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.venue}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
