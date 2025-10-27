import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text"
          >
            About Subhojit Das
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-xl opacity-30 animate-glow" />
                <img
                  src={profilePhoto}
                  alt="Subhojit Das - Founder of Pulkart"
                  className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-2xl ring-4 ring-white/50"
                />
              </div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex-1 space-y-4"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Founder of Pulkart
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Subhojit Das is the founder and owner of <span className="font-semibold text-primary">Pulkart</span>, 
                a growing online store dedicated to providing quality products and excellent service.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                With a vision to make online shopping easy and affordable, Subhojit Das continues 
                to lead the brand toward innovation and customer satisfaction.
              </p>
              <div className="pt-4">
                <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                  Entrepreneur & Visionary
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
