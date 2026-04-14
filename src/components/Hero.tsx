import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_r2d2.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0B0F1A]" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: '100%' }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 1, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 1.5 }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, hsl(210 100% 55% / 0.12), transparent)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, hsl(42 80% 55% / 0.08), transparent)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <motion.img 
            src={logo} 
            alt="R2D2 Agency" 
            className="w-48 md:w-56 mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Main headline */}
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-foreground">Transformamos tecnologia em</span>
            <br />
            <span className="text-gradient">crescimento previsível</span>
            <span className="text-foreground"> para empresas</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Construímos sistemas, inteligência artificial e infraestrutura completa 
            para escalar negócios com eficiência, controle e automação inteligente.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <a 
                href="https://wa.me/5517991308048?text=Olá! Gostaria de falar com um especialista da R2D2."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base glow-blue hover:opacity-90 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com especialista
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <a 
                href="https://wa.me/5517991308048?text=Olá! Gostaria de solicitar um diagnóstico para minha empresa."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-border/50 text-foreground px-8 py-6 text-base hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  Solicitar diagnóstico
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
