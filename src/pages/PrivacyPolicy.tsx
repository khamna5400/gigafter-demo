import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const PrivacyPolicy = () => {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-12 text-foreground">Privacy Policy</h1>
            
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                <p>
                  GigAfter ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and other contact information you provide when signing up or using our services.</li>
                  <li><strong className="text-foreground">Financial Data:</strong> Financial information necessary to process payments for our services.</li>
                  <li><strong className="text-foreground">Data From Third Parties:</strong> Information from third-party services, partners, and public sources.</li>
                  <li><strong className="text-foreground">Mobile Device Data:</strong> Device identifiers, device settings, and usage data if you access our services via a mobile device.</li>
                  <li><strong className="text-foreground">Data Collected Automatically:</strong> Information automatically collected when you interact with our website, including IP addresses, browser type, pages visited, and device information.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Your Information</h2>
                <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Generate a personal profile about you so that future visits to the Site will be personalized as possible.</li>
                  <li>Increase the efficiency and operation of the Site.</li>
                  <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                  <li>Process your transactions and send related information.</li>
                  <li>Email you regarding updates, news, and general information about our services.</li>
                  <li>Respond to your inquiries, questions, and requests.</li>
                  <li>Improve customer service and support offerings.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclosure of Your Information</h2>
                <p>
                  We may share your information with third parties only in the ways that are described in this Privacy Policy. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or servicing you, provided that those parties agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Security of Your Information</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your personal information. However, perfect security does not exist on the Internet. Please contact us at hello@gigafter.com if you believe your information has been compromised.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Us</h2>
                <p>
                  If you have questions or comments about this Privacy Policy, please contact us at:
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

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Changes to This Privacy Policy</h2>
                <p>
                  GigAfter reserves the right to modify this privacy policy at any time. Please review this Privacy Policy periodically for changes. Your continued use of the Site following the posting of revised Privacy Policy means that you accept and agree to the changes.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
