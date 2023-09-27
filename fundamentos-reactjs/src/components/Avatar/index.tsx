import Image from "next/image";

interface AvatarProps {
  src: string;
  hasBorder: boolean;
}

export function Avatar({ src, hasBorder }: AvatarProps) {
  return (
    <Image
      src={src}
      alt="Foto de perfil"
      width={500}
      height={500}
      className={`w-16 h-16 rounded-lg border-4 border-gray_color-800 border-l-gray_color-800 object-cover 
      ${hasBorder ? "outline outline-2 outline-green_color-500" : ""}`}
    />
  );
}
