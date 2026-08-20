import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "../components/FadeIn";
import { LiveProjectButton } from "../components/LiveProjectButton";

interface Project {
  number: string;
  name: string;
  category: string;
  images: [string, string, string];
}

const PROJECTS: Project[] = [
  {
    number: "01",
    name: "The Golden Crumb",
    category: "Personal",
    images: ["/projects/gc-1.jpg", "/projects/gc-2.jpg", "/projects/gc-3.jpg"],
  },
  {
    number: "02",
    name: "Tandoor Flame",
    category: "Personal",
    images: ["/projects/tf-1.jpg", "/projects/tf-2.jpg", "/projects/tf-3.jpg"],
  },
  {
    number: "03",
    name: "Eagle Fitness Centre",
    category: "Client",
    images: ["/projects/gym-1.jpg", "/projects/gym-2.jpg", "/projects/gym-3.jpg"],
  },
];

const IMG_RADIUS = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

interface CardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const ProjectCard = ({ project, index, total, progress }: CardProps) => {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 h-[85vh] flex items-start justify-center">
      <motion.div
        data-testid={`project-card-${project.number}`}
        style={{ scale, top: index * 28 }}
        className={`relative w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top`}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              data-testid={`project-number-${project.number}`}
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div>
              <p
                data-testid={`project-category-${project.number}`}
                className="text-[#D7E2EA] opacity-60 uppercase tracking-widest text-xs sm:text-sm mb-1"
              >
                {project.category}
              </p>
              <h3
                data-testid={`project-name-${project.number}`}
                className="text-[#D7E2EA] font-medium uppercase leading-tight"
                style={{ fontSize: "clamp(1.1rem, 2.6vw, 2.2rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="pt-2 sm:pt-4 md:pt-6">
            <LiveProjectButton testId={`live-project-button-${project.number}`} />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-[40%] flex flex-col gap-3">
            <img
              data-testid={`project-image-${project.number}-1`}
              src={project.images[0]}
              alt={`${project.name} preview 1`}
              loading="lazy"
              draggable={false}
              className={`w-full object-cover ${IMG_RADIUS}`}
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              data-testid={`project-image-${project.number}-2`}
              src={project.images[1]}
              alt={`${project.name} preview 2`}
              loading="lazy"
              draggable={false}
              className={`w-full object-cover ${IMG_RADIUS}`}
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <img
              data-testid={`project-image-${project.number}-3`}
              src={project.images[2]}
              alt={`${project.name} preview 3`}
              loading="lazy"
              draggable={false}
              className={`w-full h-full object-cover ${IMG_RADIUS}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          data-testid="projects-heading"
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
