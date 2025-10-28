import { motion } from "framer-motion";
import { 
  Code2, 
  Briefcase, 
  Award,
  Sparkles
} from "lucide-react";

const technologies = [
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", color: "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/30" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg", color: "bg-red-500/10 hover:bg-red-500/20 border-red-500/30" },
  { name: "CodeIgniter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg", color: "bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/30" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30" },
  { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "bg-green-500/10 hover:bg-green-500/20 border-green-500/30" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "bg-slate-500/10 hover:bg-slate-500/20 border-slate-500/30" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "bg-lime-500/10 hover:bg-lime-500/20 border-lime-500/30" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "bg-gray-500/10 hover:bg-gray-500/20 border-gray-500/30" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30" },
  { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", color: "bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/30" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "bg-yellow-500/10 hover:bg-yellow-500/20 border-yellow-500/30" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "bg-blue-600/10 hover:bg-blue-600/20 border-blue-600/30" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "bg-teal-500/10 hover:bg-teal-500/20 border-teal-500/30" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "bg-indigo-500/10 hover:bg-indigo-500/20 border-indigo-500/30" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "bg-green-600/10 hover:bg-green-600/20 border-green-600/30" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "bg-red-600/10 hover:bg-red-600/20 border-red-600/30" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/30" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "bg-orange-600/10 hover:bg-orange-600/20 border-orange-600/30" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "bg-slate-600/10 hover:bg-slate-600/20 border-slate-600/30" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", color: "bg-green-500/10 hover:bg-green-500/20 border-green-500/30" },
  { name: "Apache", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", color: "bg-red-500/10 hover:bg-red-500/20 border-red-500/30" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", color: "bg-sky-500/10 hover:bg-sky-500/20 border-sky-500/30" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", color: "bg-purple-600/10 hover:bg-purple-600/20 border-purple-600/30" },
  { name: "jQuery", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", color: "bg-blue-700/10 hover:bg-blue-700/20 border-blue-700/30" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", color: "bg-blue-800/10 hover:bg-blue-800/20 border-blue-800/30" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "bg-pink-500/10 hover:bg-pink-500/20 border-pink-500/30" },
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", color: "bg-blue-900/10 hover:bg-blue-900/20 border-blue-900/30" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", color: "bg-sky-600/10 hover:bg-sky-600/20 border-sky-600/30" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "bg-gray-700/10 hover:bg-gray-700/20 border-gray-700/30" },
];

const highlights = [
  {
    icon: Briefcase,
    title: "10+ Years Experience",
    description: "Proven track record in web development and technology solutions",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description: "Expertise in both frontend and backend technologies",
    color: "text-green-600 dark:text-green-400"
  },
  {
    icon: Award,
    title: "Entrepreneur",
    description: "Founder of whatznot.com & servicemedium.com",
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: Sparkles,
    title: "30 Technologies",
    description: "Versatile skillset across modern tech stack",
    color: "text-orange-600 dark:text-orange-400"
  },
];

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
            className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center"
          >
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-center mb-8"
          >
            Solo Entrepreneur & Full-Stack Developer
          </motion.p>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-secondary/30 rounded-2xl p-5 hover:bg-secondary/50 smooth-transition group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-background flex items-center justify-center group-hover:scale-110 smooth-transition ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mb-8"
          >
            <p className="text-base text-muted-foreground leading-relaxed text-center">
              Passionate about creating innovative digital solutions with{" "}
              <span className="font-semibold text-primary">10+ years of experience</span> in web development. 
              As the founder of{" "}
              <a 
                href="https://whatznot.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                whatznot.com
              </a>
              {" "}and{" "}
              <a 
                href="https://servicemedium.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                servicemedium.com
              </a>
              , I deliver exceptional digital experiences and scalable solutions.
            </p>
          </motion.div>

          {/* Technologies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 text-center">
              Tech Stack & Expertise
            </h3>
            <p className="text-sm text-muted-foreground text-center mb-6">
              Mastering 30 technologies to build powerful solutions
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 + index * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`${tech.color} border-2 rounded-xl p-3 smooth-transition cursor-default backdrop-blur-sm`}
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-10 h-10 object-contain dark:brightness-110"
                      loading="lazy"
                    />
                    <span className="text-xs font-semibold leading-tight text-foreground">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
