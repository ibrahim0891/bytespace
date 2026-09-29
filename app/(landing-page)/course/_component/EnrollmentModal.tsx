"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  totalLessons: number;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  title,
  totalLessons,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="bg-white rounded-2xl p-7 max-w-md w-full text-center space-y-4 shadow-xl border border-zinc-100"
          >
            <div className="w-14 h-14 rounded-full bg-[#D4FF00] text-zinc-950 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="text-xl font-bold text-zinc-950">You're Enrolled!</h3>
            <p className="text-xs sm:text-sm text-zinc-600">
              Welcome to <span className="font-semibold">{title}</span>. You now have lifetime access to all {totalLessons} lessons, resources, and certificates.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full bg-[#003be2] hover:bg-[#002eb8] text-white font-bold py-3 rounded-full text-sm transition cursor-pointer"
              >
                Start Watching Now
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2 text-zinc-500 hover:text-zinc-800 text-xs font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EnrollmentModal;
