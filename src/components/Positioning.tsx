import { motion } from "framer-motion";
import { Code2, Layers, Bot, TrendingUp, Rocket, ArrowDownRight } from "lucide-react";

const differentials = [
  { icon: Code2, text: "Tecnologia própria" },
  { icon: Layers, text: "Integração total dos sistemas" },
  { icon: Bot, text: "Funcionários com IA operando processos e vendas" },
  { icon: TrendingUp, text: "Foco em crescimento real e faturamento" },
  { icon: Rocket, text: "Escalabilidade" },
  { icon: ArrowDownRight, text: "Redução de dependência de ferramentas externas" },
];

const Positioning = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/3 to-background" />
      
      {/* Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, hsl(42 80% 55% / 0.06), transparent)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Não somos uma agência.</span>
              <br />
              <span className="text-gradient-gold">
                Somos a infraestrutura tecnológica
              </span>
              <br />
              <span className="text-foreground">por trás de empresas que crescem.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 glass rounded-xl p-5 group hover:border-secondary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm md:text-base text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
