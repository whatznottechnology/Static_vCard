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
            About Pritam Mandal
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm a solo entrepreneur with <span className="font-semibold text-primary">10+ years of experience</span> in 
              web development and technology. As the founder of <span className="font-semibold text-primary">whatznot.com</span> and 
              <span className="font-semibold text-primary"> servicemedium.com</span>, I've built my career on delivering 
              innovative solutions and exceptional digital experiences.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-secondary/30 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">Tech Stack & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">PHP</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Laravel</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">CodeIgniter</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Django</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Python</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Flask</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Tailwind CSS</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">MySQL</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Node.js</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">+15 More</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
