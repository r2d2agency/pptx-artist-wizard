import { motion } from "framer-motion";
import { Check, Zap, Shield, Clock, HeadphonesIcon, Code2, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Desenvolvimento Ágil",
    description: "Sprints semanais com entregas rápidas e iterativas"
  },
  {
    icon: Shield,
    title: "Segurança First",
    description: "Código seguro e infraestrutura protegida"
  },
  {
    icon: Clock,
    title: "Suporte 24/7",
    description: "Monitoramento e suporte contínuo dos seus sistemas"
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Dedicado",
    description: "Equipe exclusiva para acompanhar seu projeto"
  },
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Arquitetura escalável e manutenível"
  },
  {
    icon: Layers,
    title: "Stack Moderna",
    description: "As melhores tecnologias do mercado"
  }
];

const techStack = [
  "React", "Next.js", "Node.js", "Python", "OpenAI", "LangChain", 
  "WhatsApp API", "Meta Ads", "Google Ads", "Supabase", "AWS", "Vercel"
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
              Por que nos escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Tecnologia de ponta com <span className="text-gradient">atendimento humano</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Unimos o melhor da inteligência artificial com a expertise de profissionais 
              apaixonados por inovação. Cada projeto é único e recebe atenção personalizada.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl glass"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              
              <h3 className="text-xl font-semibold mb-6 relative z-10">Nossa Stack Tecnológica</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 rounded-full bg-muted/50 text-sm font-medium text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Process steps */}
              <div className="mt-8 pt-8 border-t border-border/50 relative z-10">
                <h4 className="text-lg font-semibold mb-4">Nosso Processo</h4>
                <div className="space-y-4">
                  {[
                    "Discovery & Planejamento",
                    "Design & Prototipação",
                    "Desenvolvimento & Testes",
                    "Deploy & Monitoramento"
                  ].map((step, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-foreground">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
