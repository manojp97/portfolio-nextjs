"use client";

import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  id: string;
  className?: string;
};

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`py-24 px-6 ${className}`}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </motion.section>
  );
}