import { motion } from "framer-motion";
import { Trophy, BarChart3, Users, Star } from "lucide-react";

const metrics = [
  { icon: Trophy, value: "50+", label: "Projetos entregues" },
  { icon: Users, value: "30+", label: "Clientes ativos" },
  { icon: BarChart3, value: "3x", label: "ROI médio dos clientes" },
  { icon: Star, value: "100%", label: "Satisfação" },
];

const testimonials = [
  {
    name: "Cliente Enerlight",
    role: "CEO, Energia Solar",
    text: "A R2D2 transformou completamente nossa operação. Saímos de processos manuais para uma infraestrutura digital que triplicou nossos resultados.",
  },
  {
    name: "Cliente Plaza Motors",
    role: "Diretor, Automotivo",
    text: "O nível de profissionalismo e a qualidade da tecnologia entregue superou todas as nossas expectativas. Parceria de longo prazo.",
  },
];

const Authority = () => {
  return (
    <section id="cases" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs uppercase tracking-[0.4em] font-medium">
            Autoridade
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Resultados que <span className="text-gradient">comprovam</span>
          </h2>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-6 text-center group hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl p-8 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="absolute top-4 right-6 text-6xl text-primary/10 font-serif">"</div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                {testimonial.text}
              </p>
              <div className="relative z-10">
                <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;
