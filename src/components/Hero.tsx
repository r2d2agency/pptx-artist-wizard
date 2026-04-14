import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo_r2d2.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video/GIF Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          poster="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/07/30/45360-445846215_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none z-[1]" />

      {/* Grid */}
      <div className="absolute inset-0 grid-pattern z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-[2]" />

      {/* Animated neon lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              top: `${25 + i * 20}%`,
              width: '100%',
              background: `linear-gradient(90deg, transparent, hsl(175 85% 45% / 0.4), transparent)`,
            }}
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '100%', opacity: [0, 1, 0] }}
            transition={{ duration: 6 + i * 2, repeat: Infinity, delay: i * 2 }}
          />
        ))}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-px"
            style={{
              left: `${30 + i * 40}%`,
              height: '100%',
              background: `linear-gradient(180deg, transparent, hsl(265 80% 60% / 0.2), transparent)`,
            }}
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: '100%', opacity: [0, 0.8, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: i * 3 + 1 }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] rounded-full blur-[140px] z-[1]"
        style={{ background: 'radial-gradient(circle, hsl(175 85% 45% / 0.1), transparent)' }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full blur-[140px] z-[1]"
        style={{ background: 'radial-gradient(circle, hsl(265 80% 60% / 0.08), transparent)' }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
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
            className="w-44 md:w-52 mb-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          {/* Status badge */}
          <motion.div
            className="mb-8 inline-flex items-center gap-2 glass rounded-full px-5 py-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Empresa de Tecnologia
          </motion.div>

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
            <br />
            <span className="text-foreground">para empresas</span>
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
                  className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base glow-cyan hover:opacity-90 transition-all"
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
                  className="border-primary/30 text-foreground px-8 py-6 text-base hover:border-primary/60 hover:bg-primary/5 transition-all"
                >
                  Solicitar diagnóstico
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[3]" />
    </section>
  );
};

export default Hero;
