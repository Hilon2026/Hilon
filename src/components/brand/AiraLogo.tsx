import React from "react";
import { Link } from "react-router-dom";

interface AiraLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  withCompany?: boolean;
  showText?: boolean;
}

export const AiraLogo: React.FC<AiraLogoProps> = ({
  className = "",
  variant = "dark",
  size = "md",
  withCompany = true,
  showText = true,
}) => {
  const imageHeights = {
    sm: "h-7",
    md: "h-9 sm:h-10",
    lg: "h-12 sm:h-14",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl sm:text-2xl",
    lg: "text-2xl sm:text-3xl",
  };

  const textColor = variant === "light" ? "text-white" : "text-slate-900";

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`}>
      {/* Aira Logo Image */}
      <img
        src="/aira-removebg-preview.png"
        alt="Aira Logo"
        className={`w-auto object-contain transition-transform duration-200 group-hover:scale-105 ${imageHeights[size]}`}
      />

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            {withCompany && (
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 tracking-wider uppercase">
                Hilon
              </span>
            )}
            {withCompany && <span className="text-xs text-slate-400">/</span>}
            <span className={`font-display font-extrabold tracking-tight ${textSizes[size]} ${textColor}`}>
              Aira
            </span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default AiraLogo;
