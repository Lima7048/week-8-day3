"use client";
import { motion } from "framer-motion";
import NewPostPage from "./app/posts/new/page.jsx";

export default function MyComponent() {
  return (
    <motion.div
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Hello world</h1>
      <NewPostPage />
    </motion.div>
  );
}
