import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section id="contato" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-background to-secondary/[0.04]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <motion.div
        className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, hsl(175 85% 45% / 0.08), transparent)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-[350px] h-[350px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, hsl(265 80% 60% / 0.06), transparent)' }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Pronto para transformar sua empresa em uma{" "}
            <span className="text-gradient">máquina de crescimento previsível?</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Fale com nossos especialistas e descubra como podemos construir
            a infraestrutura tecnológica ideal para o seu negócio.
          </p>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <a
              href="https://wa.me/5517991308048?text=Olá! Gostaria de falar com um especialista da R2D2."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground font-semibold px-10 py-7 text-lg glow-cyan hover:opacity-90 transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com especialista
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://wa.me/5517991308048"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              +55 (17) 99130-8048
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
