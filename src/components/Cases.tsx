import { motion } from "framer-motion";
import { Search, Send, Utensils, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    icon: Search,
    title: "Gleego",
    tagline: "Tenha leads infinitos",
    description: "Ferramenta de extração de leads das redes sociais, principalmente Google. Encontre seus clientes ideais de forma automatizada e escale suas vendas.",
    tags: ["Extração de Leads", "Google", "Automação"],
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    icon: Send,
    title: "Blaster",
    tagline: "Envio em massa inteligente",
    description: "Ferramenta de envio de mensagens para WhatsApp em massa. Crie suas listas segmentadas e envie mensagens personalizadas com facilidade.",
    tags: ["WhatsApp", "Mensagens em Massa", "Listas"],
    gradient: "from-green-500 to-emerald-400"
  },
  {
    icon: Utensils,
    title: "Prato em Dobro",
    tagline: "Descontos exclusivos",
    description: "Aplicativo de descontos em pratos de restaurantes premium. Experiências gastronômicas incríveis por preços acessíveis.",
    tags: ["App Mobile", "Restaurantes", "Descontos"],
    gradient: "from-orange-500 to-amber-400"
  },
  {
    icon: MessageSquare,
    title: "Whatsale",
    tagline: "CRM integrado ao WhatsApp",
    description: "Solução completa em CRM integrado ao WhatsApp com gestão de leads, Kanban visual e resposta direta pelo app. Tudo em um só lugar.",
    tags: ["CRM", "WhatsApp", "Kanban", "Gestão de Leads"],
    gradient: "from-purple-500 to-pink-400"
  }
];

const Cases = () => {
  return (
    <section id="cases" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] font-medium">
            Cases de Sucesso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Projetos que <span className="text-gradient">desenvolvemos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça algumas das soluções que criamos para transformar negócios 
            e automatizar processos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="glass h-full group hover:border-primary/50 transition-all duration-300 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${caseItem.gradient} p-4 mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <caseItem.icon className="w-full h-full text-white" />
                    </motion.div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-gradient transition-all">
                    {caseItem.title}
                  </CardTitle>
                  <p className="text-primary font-medium text-sm mt-1">
                    {caseItem.tagline}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {caseItem.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {caseItem.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="bg-muted/50 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${caseItem.gradient} opacity-5`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
