"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";

export default function SectionWrapper({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}