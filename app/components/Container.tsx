import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large" | "narrow" | "full";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
  ...props
}) => {
  const sizeClasses = {
    default: "max-w-[1200px]",
    large: "max-w-7xl",
    narrow: "max-w-5xl",
    full: "max-w-full",
  }[size];

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-6 2xl:px-0 ${sizeClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
