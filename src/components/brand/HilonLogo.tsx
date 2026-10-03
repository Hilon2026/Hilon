import React from "react";
import { Link } from "react-router-dom";

interface HilonLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export const HilonLogo: React.FC<HilonLogoProps> = ({
  className = "",
  variant = "dark",
  size = "md",
  showTagline = false,
}) => {
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl sm:text-3xl",
    lg: "text-3xl sm:text-4xl",
  };

  const textColor = variant === "light" ? "text-white" : "text-slate-900";

  return (
    <Link to="/" className={`inline-flex items-center gap-2 group ${className}`}>
      {/* Dynamic temporary text-based wordmark: Hilon */}
      <span className={`font-display font-extrabold tracking-tight ${sizeClasses[size]} ${textColor} transition-colors`}>
        Hilon
        <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 ml-1 transform group-hover:scale-125 transition-transform duration-300"></span>
      </span>
      {showTagline && (
        <span className="text-xs text-purple-600 font-semibold tracking-wider uppercase bg-purple-100 dark:bg-purple-900/40 px-2 py-0.5 rounded-full">
          AI Retail
        </span>
      )}
    </Link>
  );
};

export default HilonLogo;
