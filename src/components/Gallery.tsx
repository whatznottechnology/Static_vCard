import { motion } from "framer-motion";
import { ShoppingBag, Package, TrendingUp, Award } from "lucide-react";

const galleryItems = [
  {
    icon: ShoppingBag,
    title: "Quality Products",
    description: "Carefully curated items for every need",
  },
  {
    icon: Package,
    title: "Fast Delivery",
    description: "Quick and reliable shipping",
  },
  {
    icon: TrendingUp,
    title: "Growing Brand",
    description: "Trusted by thousands of customers",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to outstanding service",
  },
];

const Gallery = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-3xl p-8 md:p-12 card-shadow"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center"
          >
            Why Choose Pulkart
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-secondary/50 to-secondary/30 hover:from-secondary hover:to-secondary/50 smooth-transition"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
