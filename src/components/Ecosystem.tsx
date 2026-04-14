import { motion } from "framer-motion";
import { TrendingUp, Brain, MessageSquare, Server, Zap, BarChart3, Globe, Bot, Shield, Mail, Monitor, Users } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Aquisição e Crescimento",
    description: "Estratégias integradas para atrair e converter clientes com previsibilidade.",
    items: [
      { icon: BarChart3, text: "Tráfego pago" },
      { icon: Zap, text: "Funis de vendas" },
      { icon: Globe, text: "Landing pages" },
    ],
    gradient: "from-primary to-blue-400",
    glow: "hsl(210 100% 55% / 0.15)",
  },
  {
    icon: Brain,
    title: "Inteligência Artificial Aplicada",
    description: "IA que opera processos reais: atendimento, vendas e qualificação automática.",
    items: [
      { icon: Users, text: "Funcionários com IA para atendimento e vendas" },
      { icon: Bot, text: "IA para qualificação de leads" },
      { icon: Zap, text: "IA para automação de processos" },
    ],
    gradient: "from-purple-500 to-violet-400",
    glow: "hsl(270 100% 55% / 0.12)",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp API",
    description: "Comunicação profissional e escalável com integração oficial.",
    items: [
      { icon: Shield, text: "Integração oficial" },
      { icon: Bot, text: "Automação de atendimento com IA" },
      { icon: Users, text: "CRM integrado" },
    ],
    gradient: "from-green-500 to-emerald-400",
    glow: "hsl(150 100% 40% / 0.12)",
  },
  {
    icon: Server,
    title: "Infraestrutura Digital",
    description: "Base sólida para operar com segurança e performance.",
    items: [
      { icon: Server, text: "Hospedagem e servidores" },
      { icon: Mail, text: "E-mails profissionais" },
      { icon: Monitor, text: "Monitoramento 24/7" },
    ],
    gradient: "from-secondary to-amber-400",
    glow: "hsl(42 80% 55% / 0.12)",
  },
];

const Ecosystem = () => {
  return (
    <section id="ecossistema" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs uppercase tracking-[0.4em] font-medium">
            Ecossistema Integrado
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Ecossistema <span className="text-gradient">Tecnológico</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quatro pilares que funcionam de forma integrada para criar uma infraestrutura 
            completa de crescimento para sua empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Hover glow */}
              <div 
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle, ${pillar.glow}, transparent)` }}
              />

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.gradient} p-3 mb-5`}>
                  <pillar.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{pillar.description}</p>
                
                <div className="space-y-3">
                  {pillar.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-secondary" />
            Todos os pilares funcionam de forma integrada
            <Zap className="w-4 h-4 text-secondary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
