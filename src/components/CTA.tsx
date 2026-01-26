import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, Phone } from "lucide-react";
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary text-primary-foreground font-semibold px-10 py-7 text-lg glow-cyan hover:opacity-90 transition-all w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 px-10 py-7 text-lg w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar E-mail
              </Button>
            </motion.div>
          </div>

          {/* Contact info cards */}
          <motion.div 
            className="grid sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+55 (17) 99130-8048" },
              { icon: Mail, label: "E-mail", value: "contato@r2d2.agency" },
              { icon: Phone, label: "Telefone", value: "+55 (17) 99130-8048" }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="glass rounded-xl p-6 text-center group hover:border-primary/50 transition-all cursor-pointer"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                <div className="font-medium text-foreground">{contact.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
