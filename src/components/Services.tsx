import { motion } from "framer-motion";
import { Bot, MessageSquare, TrendingUp, Code, Cpu, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Cpu,
    title: "Desenvolvimento IA",
    description: "Criamos soluções personalizadas com inteligência artificial para automatizar processos e gerar insights valiosos para seu negócio.",
    gradient: "from-primary to-cyan-400"
  },
  {
    icon: MessageSquare,
    title: "Agentes WhatsApp",
    description: "Bots inteligentes que atendem 24/7, qualificam leads, agendam reuniões e vendem seus produtos automaticamente.",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Gestão de Tráfego",
    description: "Estratégias data-driven para mídias sociais. Alcance seu público ideal e maximize o ROI das suas campanhas.",
    gradient: "from-secondary to-purple-400"
  },
  {
    icon: Code,
    title: "Desenvolvimento SaaS",
    description: "Do conceito ao lançamento. Construímos plataformas SaaS escaláveis com as tecnologias mais modernas do mercado.",
    gradient: "from-orange-400 to-red-500"
  },
  {
    icon: Bot,
    title: "Automação Inteligente",
    description: "Conectamos ferramentas e automatizamos workflows complexos. Economize tempo e reduza erros operacionais.",
    gradient: "from-pink-400 to-rose-500"
  },
  {
    icon: Rocket,
    title: "Consultoria Tech",
    description: "Orientação estratégica para implementar IA no seu negócio. Identificamos oportunidades e criamos roadmaps de transformação digital.",
    gradient: "from-primary to-secondary"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Soluções que <span className="text-gradient">transformam</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combinamos expertise em IA, desenvolvimento e marketing digital 
            para criar soluções completas e inovadoras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass h-full group hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </motion.div>
                  <CardTitle className="text-xl group-hover:text-gradient transition-all">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
