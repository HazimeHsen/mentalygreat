"use client";
import { motion } from "framer-motion";
import React from "react";
import { links } from "./MenuItems";

const MenuLinks = () => {
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav className="flex items-center gap-8">
      {links.map((link, index) => (
        <motion.div
          key={index}
          className="font-semibold text-lg"
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}>
          <a
            href={link.href}
            className="menu__link flex items-center hover:opacity-85 transition-opacity duration-200 gap-2 w-fit pr-1">
            {link.title}
          </a>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default MenuLinks;
