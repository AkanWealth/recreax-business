import React, { useState } from "react";
import { FaLock, FaEyeSlash, FaEye } from "react-icons/fa";

interface IconInputProps {
  type: string;
  id: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  label: string;
  addStyle?: string;
  errorMsg?: string;
  Icon?: React.ReactNode;
  options?: { value: string; label: string }[];

  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

function IconInput({
  type,
  id,
  required = true,
  disabled = false,
  label,
  options = [],
  placeholder = "",
  addStyle = "",
  errorMsg = "",
  value = "",
  Icon,
  onChange = () => {},
}: IconInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  switch (type) {
    case "number":
      return (
        <div className={` w-full h-fit flex flex-col gap-3 ${addStyle} `}>
          <label
            className=" text-lg font-plus-jakarta-sans font-semibold  "
            htmlFor={id}
          >
            {label} {required ? <span className="text-red-600">*</span> : ""}
          </label>
          <input
            className=" p-2 w-full rounded border border-gray-400  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  "
            name={id}
            id={id}
            value={value}
            required={required}
            disabled={disabled}
            type={type}
            onChange={onChange}
          />

          <p className="text-red-500 text-lg font-medium">{errorMsg}</p>
        </div>
      );

    case "textarea":
      return (
        <div className={` w-full h-fit flex flex-col gap-3 ${addStyle} `}>
          <label
            className=" text-lg font-plus-jakarta-sans font-semibold  "
            htmlFor={id}
          >
            {label} {required ? <span className="text-red-600">*</span> : ""}
          </label>
          <textarea
            className="p-2 w-full rounded border border-gray-400 resize-none overflow-y-auto whitespace-pre-wrap"
            name={id}
            rows={4}
            placeholder={placeholder}
            id={id}
            value={value}
            required={required}
            disabled={disabled}
            onChange={onChange}
          />

          <p className="text-red-500 text-lg font-medium">{errorMsg}</p>
        </div>
      );

    case "password":
      return (
        <div className={` w-full h-fit flex flex-col gap-3 ${addStyle} `}>
          <label
            className=" text-lg font-plus-jakarta-sans font-semibold  "
            htmlFor={id}
          >
            {label} {required ? <span className="text-red-600">*</span> : ""}
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-[.8rem] text-gray-400 text-md" />
            <input
              className=" border-gray-400 w-full pl-10 pr-10 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 "
              type={showPassword ? "text" : "password"}
              id={id}
              value={value}
              name={id}
              placeholder={placeholder}
              onChange={onChange}
              required={required}
              disabled={disabled}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-3 text-gray-400 text-md focus:outline-none cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <p className="text-red-500 text-lg font-medium">{errorMsg}</p>
        </div>
      );
    case "select":
      return (
        <div className={` w-full h-fit flex flex-col gap-3 ${addStyle} `}>
          <label
            className=" text-lg font-plus-jakarta-sans font-semibold  "
            htmlFor={id}
          >
            {label} {required ? <span className="text-red-600">*</span> : ""}
          </label>
          <select
            value={value}
            className=" p-2 rounded border  bg-white border-gray-400 text-base font-plus-jakarta-sans"
            name={id}
            id={id}
            required={required}
            disabled={disabled}
            onChange={onChange}
          >
            {options?.map((option, index) => (
              <option
                className="font-plus-jakarta-sans"
                key={index}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
          <p></p>
        </div>
      );

    default:
      return (
        <div className="flex flex-col gap-2 w-full">
          <div
            className={` font-plus-jakarta-sans font-normal text-base rounded border ${
              errorMsg ? "border-red-500" : "border-gray-400"
            }  w-full p-2 items-center justify-start h-fit flex flex-row gap-2 ${addStyle} `}
          >
            {Icon}
            <input
              className=" p-2 text-[#2a2829] w-full focus:outline-none  "
              placeholder={placeholder}
              name={id}
              id={id}
              value={value}
              required={required}
              disabled={disabled}
              type={type}
              onChange={onChange}
            />
          </div>
          <p className="text-red-500 text-sm font-normal">{errorMsg}</p>
        </div>
      );
  }
}

export default IconInput;
