import React from "react";
import { clsx } from "clsx";

const TextInput = React.forwardRef(
  ({ placeholder, type, name, label, className, register, error }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={name}
            className="text-slate-700 font-medium text-sm md:text-base cursor-pointer"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            {...register}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "w-full bg-white px-4 py-2.5 2xl:py-3 border rounded-lg transition-all duration-200 outline-none text-base text-gray-900",

              "border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",

              error
                ? "border-red-500 focus:ring-red-500/20 focus:border-red-500"
                : "border-gray-300",

              className
            )}
          />
        </div>

        {error && (
          <span
            role="alert"
            className="text-red-500 text-xs md:text-sm font-medium animate-in fade-in slide-in-from-top-1"
          >
            {error}
          </span>
        )}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
