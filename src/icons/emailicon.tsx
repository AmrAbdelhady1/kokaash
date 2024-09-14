"use client";
import * as React from "react";
import { motion } from 'framer-motion'

export const EmailIcon = () => (
  <motion.a
    href="https://www.instagram.com/amrabdelhady99/"
    target="_blank"
    aria-label="Read more about Seminole tax hike"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="29"
      viewBox="0 0 24 30"
      fill="none"
    >
      <mask id="mask0_385_7155" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="29">
        <rect width="24" height="29" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_385_7155)">
        <path d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM12 13L4 8V18H20V8L12 13ZM12 11L20 6H4L12 11ZM4 8V6V18V8Z" fill="white" />
      </g>
    </svg>
  </motion.a>
);
