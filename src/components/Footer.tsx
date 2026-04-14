import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import logo from "@/assets/logo_r2d2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Ecossistema", href: "#ecossistema" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Cases", href: "#cases" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="py-16 border-t border-border/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <img src={logo} alt="R2D2 Agency" className="h-10" />
          </motion.div>

          <motion.nav
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {links.map((link, index) => (
              <a key={index} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </motion.nav>

          <motion.a
            href="https://www.instagram.com/r2d2.agency"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>© {currentYear} R2D2 Agency. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">
            Desenvolvido por <span className="text-gradient font-medium">Thiago Nicodemos</span> com <span className="text-primary">♥</span> e muita <span className="text-gradient font-medium">Inteligência Artificial</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
