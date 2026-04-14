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
    gradient: "from-primary to-cyan-400",
    borderHover: "hover:border-primary/30",
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
    gradient: "from-secondary to-violet-400",
    borderHover: "hover:border-secondary/30",
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
    gradient: "from-emerald-500 to-teal-400",
    borderHover: "hover:border-emerald-500/30",
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
    gradient: "from-rose-500 to-pink-400",
    borderHover: "hover:border-rose-500/30",
  },
];

const Ecosystem = () => {
  return (
    <section id="ecossistema" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />

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
            Ecossistema <span className="text-gradient-cyan">Tecnológico</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quatro pilares que funcionam de forma integrada para criar uma infraestrutura
            completa de crescimento para sua empresa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className={`glass rounded-2xl p-7 group ${pillar.borderHover} transition-all duration-500 relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} p-2.5 mb-5`}>
                  <pillar.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-lg font-bold mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm mb-5">{pillar.description}</p>

                <div className="space-y-2.5">
                  {pillar.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-7 h-7 rounded-md bg-muted/50 flex items-center justify-center shrink-0">
                        <item.icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-xs text-muted-foreground tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Todos os pilares funcionam de forma integrada
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ecosystem;
