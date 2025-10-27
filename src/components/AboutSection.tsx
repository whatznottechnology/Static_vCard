import { motion } from "framer-motion";

const AboutSection = () => {
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
            className="text-2xl md:text-3xl font-bold text-foreground mb-6"
          >
            About Subhojit Das
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Subhojit Das is the founder and owner of <span className="font-semibold text-primary">Pulkart</span>, 
            a growing online store dedicated to providing quality products and excellent service. 
            With a vision to make online shopping easy and affordable, he continues to lead the brand 
            toward innovation and customer satisfaction.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
