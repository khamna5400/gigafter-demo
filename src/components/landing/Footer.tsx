import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="pt-2 pb-4 border-t border-border">
      <div className="container px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="GigAfter" className="h-36 w-auto" />
            </a>
            <p className="text-muted-foreground text-sm">
              Live music booking and show management, simplified.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-4">
            <a 
              href="mailto:hello@gigafter.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@gigafter.com
            </a>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 GigAfter. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
