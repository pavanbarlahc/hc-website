// components/CoreServiceCard.tsx
import React from "react";

interface CoreServiceCardProps {
  image: string;
  title: string;
  description: string;
  wrapperClass?: string;
  backgroundClass?: string;
  borderClass?: string;
}

const CoreServiceCard: React.FC<CoreServiceCardProps> = ({
  image,
  title,
  description,
  wrapperClass = "",
  backgroundClass = "",
  borderClass = "",
}) => {
  return (
    <div className={`relative ${wrapperClass}`}>
      {/* Background */}
      <div
        className={`absolute inset-0 rounded-lg bg-white ${backgroundClass}`}
      />

      {/* Main content */}
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] ${borderClass}`}
      >
        <img alt="" src={image} className="h-80 object-cover object-left" />
        <div className="p-10 pt-4">
          <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
            {title}
          </p>
          <p className="mt-2 max-w-lg text-sm/6 text-gray-600">{description}</p>
        </div>
      </div>

      {/* Outline shadow */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 ${backgroundClass}`}
      />
    </div>
  );
};

export default CoreServiceCard;
