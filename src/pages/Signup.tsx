import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const signupSchema = z.object({
  contactName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  establishmentName: z.string().min(2, "Establishment name is required"),
  addressLine1: z.string().min(5, "Address is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid zip code"),
  howHeardAboutUs: z.string().optional(),
  betaFeedback: z.string().optional(),
});

type SignupFormData = z.infer<typeof signupSchema>;

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const HOW_HEARD_OPTIONS = [
  "Social media",
  "Word of mouth",
  "Search engine",
  "Event or conference",
  "Other",
];

const Signup = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("waitlist_signups").insert({
        contact_name: data.contactName,
        email: data.email,
        phone: data.phone || null,
        establishment_name: data.establishmentName,
        address_line1: data.addressLine1,
        address_line2: data.addressLine2 || null,
        city: data.city,
        state: data.state,
        zip_code: data.zipCode,
        how_heard_about_us: data.howHeardAboutUs || null,
        beta_feedback: data.betaFeedback || null,
      });

      if (error) throw error;

      navigate("/signup/success");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    "Lock in $30/month forever",
    "No charges until April 1, 2026",
    "Cancel anytime before launch",
    "Priority support access",
    "Early feature requests",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Subtle background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-muted/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-muted/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container px-6 py-12 max-w-6xl mx-auto">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </motion.button>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                Join the <span className="gradient-text">Waitlist</span>
              </h1>
              <p className="text-muted-foreground">
                Be among the first 50 venues to lock in our early bird pricing.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center">1</span>
                  Contact Information
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Full Name *</Label>
                    <Input
                      id="contactName"
                      placeholder="John Smith"
                      {...register("contactName")}
                      className={errors.contactName ? "border-destructive" : ""}
                    />
                    {errors.contactName && (
                      <p className="text-sm text-destructive">{errors.contactName.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@venue.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Establishment Details */}
              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center">2</span>
                  Establishment Details
                </h2>
                
                <div className="space-y-2">
                  <Label htmlFor="establishmentName">Venue Name *</Label>
                  <Input
                    id="establishmentName"
                    placeholder="The Blue Note"
                    {...register("establishmentName")}
                    className={errors.establishmentName ? "border-destructive" : ""}
                  />
                  {errors.establishmentName && (
                    <p className="text-sm text-destructive">{errors.establishmentName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="addressLine1">Street Address *</Label>
                  <Input
                    id="addressLine1"
                    placeholder="123 Main Street"
                    {...register("addressLine1")}
                    className={errors.addressLine1 ? "border-destructive" : ""}
                  />
                  {errors.addressLine1 && (
                    <p className="text-sm text-destructive">{errors.addressLine1.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="addressLine2">Address Line 2 (optional)</Label>
                  <Input
                    id="addressLine2"
                    placeholder="Suite 100"
                    {...register("addressLine2")}
                  />
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="Austin"
                      {...register("city")}
                      className={errors.city ? "border-destructive" : ""}
                    />
                    {errors.city && (
                      <p className="text-sm text-destructive">{errors.city.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Select onValueChange={(value) => setValue("state", value)}>
                      <SelectTrigger className={errors.state ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {US_STATES.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.state && (
                      <p className="text-sm text-destructive">{errors.state.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input
                      id="zipCode"
                      placeholder="78701"
                      {...register("zipCode")}
                      className={errors.zipCode ? "border-destructive" : ""}
                    />
                    {errors.zipCode && (
                      <p className="text-sm text-destructive">{errors.zipCode.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="glass-card p-6 rounded-2xl space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm flex items-center justify-center">3</span>
                  Quick Questions
                </h2>
                
                <div className="space-y-2">
                  <Label htmlFor="howHeardAboutUs">How did you hear about us?</Label>
                  <Select onValueChange={(value) => setValue("howHeardAboutUs", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {HOW_HEARD_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="betaFeedback">
                    Anything you'd like to see in the beta? (optional)
                  </Label>
                  <Textarea
                    id="betaFeedback"
                    placeholder="Tell us about features you'd love to have..."
                    rows={3}
                    {...register("betaFeedback")}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="gradient"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Join the Waitlist"}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <div className="glass-card p-6 rounded-2xl border border-border">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Early Bird Pricing
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$30</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="line-through">$50/month</span>
                    <span className="text-gig-accent ml-2">Save 40% forever</span>
                  </p>
                </div>

                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badge */}
              <div className="glass-card p-4 rounded-xl text-center">
                <p className="text-sm text-muted-foreground">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Signup;