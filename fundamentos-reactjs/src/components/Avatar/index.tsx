import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={`w-16 h-16 rounded-lg border-4 border-gray_color-800 border-l-gray_color-800 object-cover 
      ${hasBorder ? "outline outline-2 outline-green_color-500" : ""}`}
      {...props}
    />
  );
}
