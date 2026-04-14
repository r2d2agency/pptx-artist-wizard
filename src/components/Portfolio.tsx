import { motion } from "framer-motion";
import { Globe, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import plazaMotorsIcon from "@/assets/plaza-motors-icon.png";
import bellifeIcon from "@/assets/bellife-icon.png";

const portfolioSections = [
  {
    icon: Globe,
    title: "Sites",
    items: [
      {
        name: "Enerlight",
        url: "https://enerlight.com.br",
        description: "Site institucional para empresa de energia solar com design moderno e conversão otimizada.",
        tags: ["Site", "Energia Solar", "SEO"],
      },
      {
        name: "Diniz Psicologia",
        url: "https://lp.dinizpsicologia.com.br",
        description: "Landing page profissional para clínica de psicologia com foco em captação de pacientes.",
        tags: ["Landing Page", "Saúde", "Conversão"],
      },
    ],
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    items: [
      {
        name: "Bellife",
        customIcon: bellifeIcon,
        description: "Branding completo para franqueadora de estética: identidade visual, logomarca, manual da marca e ícones.",
        tags: ["Branding", "Manual de Marca", "Franquia"],
      },
      {
        name: "Plaza Motors",
        customIcon: plazaMotorsIcon,
        description: "Identidade visual premium para agência automotiva com logomarca e materiais gráficos sofisticados.",
        tags: ["Branding", "Automotivo", "Premium"],
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-28 relative">
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
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Nossos <span className="text-gradient-blue">Trabalhos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projetos que refletem nosso padrão de qualidade e atenção aos detalhes.
          </p>
        </motion.div>

        {portfolioSections.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            className="mb-16 last:mb-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <section.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  <div className="relative z-10">
                    {'customIcon' in item && item.customIcon && (
                      <div className="w-32 h-14 mb-4 overflow-hidden">
                        <img src={item.customIcon} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <h4 className="text-lg font-bold text-foreground mb-2">{item.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="bg-muted/50 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    {'url' in item && item.url && (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary text-sm mt-4 hover:underline"
                      >
                        Visitar site <Globe className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
