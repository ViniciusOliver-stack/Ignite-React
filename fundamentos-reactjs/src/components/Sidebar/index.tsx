import Image from "next/image";
import Link from "next/link";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Sidebar() {
  return (
    <aside className="bg-gray_color-800 rounded-lg overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        width={500}
        height={500}
        alt="background"
        className="w-full h-20 object-cover relative"
      />

      <div className="flex flex-col items-center">
        <Image
          src="https://avatars.githubusercontent.com/u/87040481?v=4"
          alt="Foto de perfil"
          width={500}
          height={500}
          className="w-16 h-16 rounded-lg border-4 border-gray_color-800 -mt-6 z-10 border-l-gray_color-800 outline-2 outline-green-500"
        />
        <strong className="mt-4 text-gray_color-400">Vinicius Oliveira</strong>
        <span className="text-sm text-gray_color-600">Web Developer</span>
      </div>

      <footer className="border-t border-gray_color-600 mt-6 pt-6 px-8 pb-8">
        <Link
          href="#"
          className="w-full bg-transparent bg-green_color-500 border border-green_color-500 rounded-lg h-12 px-6 font-bold flex items-center justify-center text-green_color-500 gap-3 hover:bg-green_color-900 hover:text-white transition-all duration-100"
        >
          <PencilSimpleLine size={20} />
          Editar perfil
        </Link>
      </footer>
    </aside>
  );
}
