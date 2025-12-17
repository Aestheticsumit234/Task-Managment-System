import clsx from "clsx";
import React from "react";

const Button = ({
  icon,
  type = "button",
  label,
  className,
  onClick,
  disabled,
  isLoading,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "flex items-center justify-center gap-2 px-4 py-2 outline-none transition-all duration-200 active:scale-[0.98]",

        "disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed disabled:active:scale-100",
        className
      )}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        icon && <span className="text-xl">{icon}</span>
      )}

      <span
        className={clsx(
          "font-semibold whitespace-nowrap",
          isLoading && "opacity-0"
        )}
      >
        {isLoading ? "Loading..." : label}
      </span>
    </button>
  );
};

export default Button;
