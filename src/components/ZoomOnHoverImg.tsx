import React from "react";

interface ZoomOnHoverImageProps {
  src: string;
  alt: string;
  className: string;
}

export const ZoomOnHoverImage: React.FC<ZoomOnHoverImageProps> = ({ src, alt, className }) => {
  return (
    // <div className="lg:pr-4 group">
    //   <div className="relative overflow-hidden rounded-3xl shadow-lg shadow-[#224fa2]">
        <img
          alt={alt}
          src={src}
          className={`${className} transition-transform duration-500 group-hover:scale-110`}
        />
    //   </div>
    // </div>
  );
};
