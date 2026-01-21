import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container px-6 max-w-4xl mx-auto pt-32 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground">Terms of Service</h1>
            
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using the GigAfter website and services, you accept and agree to be bound by and abide by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on GigAfter's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose, or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Violate any applicable laws or regulations related to your access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
              <p>
                The materials on GigAfter's website are provided on an 'as is' basis. GigAfter makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
              <p>
                In no event shall GigAfter or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GigAfter's website, even if GigAfter or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on GigAfter's website could include technical, typographical, or photographic errors. GigAfter does not warrant that any of the materials on its website are accurate, complete, or current. GigAfter may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
              <p>
                GigAfter has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GigAfter of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
              <p>
                GigAfter may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
              <p>
                The materials and information on GigAfter's website are provided on an 'as-is' basis. GigAfter makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties. Further, GigAfter does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. User Responsibilities</h2>
              <p>
                As a user of our services, you are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Maintaining the confidentiality of your account information and password</li>
                <li>Accepting responsibility for all activities that occur under your account</li>
                <li>Ensuring that information you provide is accurate, complete, and current</li>
                <li>Using the service in compliance with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-semibold text-foreground mb-3">GigAfter</p>
                <a 
                  href="mailto:hello@gigafter.com" 
                  className="flex items-center gap-2 text-foreground hover:underline transition-colors w-fit"
                >
                  <Mail className="w-4 h-4" />
                  hello@gigafter.com
                </a>
              </div>
            </section>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
