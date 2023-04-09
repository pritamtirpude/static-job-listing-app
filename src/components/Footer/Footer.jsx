import { motion, AnimatePresence } from "framer-motion";
import { footerAnim } from "../../animation";

const Footer = () => {
  return (
    <AnimatePresence>
      <motion.footer
        variants={footerAnim}
        initial="hidden"
        whileInView="show"
        exit="exit"
        className="flex justify-center overflow-hidden"
      >
        <h5>
          Made with ❤️ by &nbsp;
          <a href="https://github.com/pritamtirpude" target="_blank">
            Pritam Tirpude
          </a>
        </h5>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
