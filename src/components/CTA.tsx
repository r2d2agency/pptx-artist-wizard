import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Glow effects */}
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Vamos Começar
          </span>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Pronto para <span className="text-gradient">revolucionar</span> seu negócio?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Agende uma conversa gratuita com nossos especialistas e descubra 
            como a IA pode transformar sua empresa.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <a 
                href="https://wa.me/5517991308048?text=Olá! Gostaria de saber mais sobre os serviços da R2D2 Agency."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-primary text-primary-foreground font-semibold px-10 py-7 text-lg glow-cyan hover:opacity-90 transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Contact info card */}
          <motion.div 
            className="max-w-xs mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://wa.me/5517991308048"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-6 text-center group hover:border-primary/50 transition-all cursor-pointer block"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">WhatsApp</div>
              <div className="font-medium text-foreground">+55 (17) 99130-8048</div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
