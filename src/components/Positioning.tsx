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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/[0.02] to-background" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px]"
        style={{ background: 'radial-gradient(circle, hsl(265 80% 60% / 0.05), transparent)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-foreground">Não somos uma agência.</span>
              <br />
              <span className="text-gradient-purple">Somos a infraestrutura tecnológica</span>
              <br />
              <span className="text-foreground">por trás de empresas que crescem.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-3">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 glass rounded-xl p-4 group hover:border-secondary/25 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/15 transition-colors">
                  <item.icon className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
