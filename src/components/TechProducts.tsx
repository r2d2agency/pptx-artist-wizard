import { motion } from "framer-motion";
import { ExternalLink, LayoutDashboard, ShieldCheck, Globe, MessageSquare, Brain, Scale } from "lucide-react";

const products = [
  {
    icon: LayoutDashboard,
    name: "Ayratech",
    description: "Sistema de gestão e dashboards inteligentes para controle total do seu negócio.",
    url: "https://admin.ayratech.app.br/dashboard",
    gradient: "from-primary to-teal-400",
    tag: "Gestão",
  },
  {
    icon: ShieldCheck,
    name: "AraAccess",
    description: "Sistema de controle de acesso para supermercados com verificação inteligente.",
    url: "https://admin.ayratech.app.br/acesso-supermercado",
    gradient: "from-emerald-500 to-green-400",
    tag: "Controle de Acesso",
  },
  {
    icon: Globe,
    name: "Gleego",
    description: "Plataforma principal de extração e gestão de leads para escalar suas vendas.",
    url: "https://gleego.com.br",
    gradient: "from-secondary to-violet-400",
    tag: "Plataforma",
  },
  {
    icon: MessageSquare,
    name: "Whats.Gleego",
    description: "Gestão e automação completa de WhatsApp com IA integrada.",
    url: "https://whats.gleego.com.br",
    gradient: "from-cyan-500 to-primary",
    tag: "WhatsApp",
  },
  {
    icon: Brain,
    name: "Psico.Gleego",
    description: "Solução especializada para psicólogos com agendamento e gestão de pacientes.",
    url: "https://psico.gleego.com.br",
    gradient: "from-pink-500 to-rose-400",
    tag: "Saúde",
  },
  {
    icon: Scale,
    name: "Legal.Gleego",
    description: "Plataforma jurídica completa para advogados e escritórios de advocacia.",
    url: "https://legal.gleego.com.br",
    gradient: "from-amber-500 to-orange-400",
    tag: "Jurídico",
  },
];

const TechProducts = () => {
  return (
    <section id="tecnologia" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      <div className="absolute inset-0 line-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-secondary text-xs uppercase tracking-[0.4em] font-medium">
            Tecnologia Própria
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Nossos <span className="text-gradient-purple">Produtos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Plataformas desenvolvidas internamente que resolvem problemas reais de empresas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <motion.a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 group hover:border-primary/25 transition-all duration-500 relative overflow-hidden block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${product.gradient} p-2.5`}>
                    <product.icon className="w-full h-full text-white" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">{product.tag}</span>
                <h3 className="text-lg font-bold mt-1 mb-2 text-foreground group-hover:text-gradient transition-all">{product.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechProducts;
