import { motion } from "framer-motion";

interface ContactButtonProps {
  testId?: string;
}

export const ContactButton = ({ testId = "contact-me-button" }: ContactButtonProps) => (
  <motion.a
    href="mailto:apexwebstudio.dev@gmail.com"
    data-testid={testId}
    className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest"
    style={{
      background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
      boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      outline: "2px solid #ffffff",
      outlineOffset: "-3px",
    }}
    whileHover={{ scale: 1.06 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 18 }}
  >
    Contact Me
  </motion.a>
);
