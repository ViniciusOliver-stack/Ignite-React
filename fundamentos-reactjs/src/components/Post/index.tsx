import Image from "next/image";
import Link from "next/link";

export function Post() {
  return (
    <article className="bg-gray_color-800 rounded-lg p-10 flex flex-col">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/87040481?v=4"
            alt="Foto de perfil"
            width={500}
            height={500}
            className="w-16 h-16 rounded-lg border-4 border-gray_color-800 border-l-gray_color-800 outline-2 outline-green-500"
          />
          <div className="flex flex-col gap-1">
            <strong className="text-gray_color-400">Vinicius Oliveira</strong>
            <span className="text-sm text-gray_color-500">Web Developer</span>
          </div>
        </div>

        <time
          title="21 de Setembro às 20:51"
          dateTime="2023-09-21 20:51:00"
          className="text-sm text-gray_color-500"
        >
          Publicado há 1h
        </time>
      </header>

      <div className="text-gray_color-500 flex flex-col gap-4 mt-6">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento{" "}
        </p>
        da Rocketseat. O nome do projeto é DoctorCare 🚀
        <p className="font-bold text-green_color-500 hover:text-green_color-900">
          <Link href="#">👉 jane.design/doctorcare</Link>
        </p>
        <p className="flex gap-1">
          <Link
            href="#"
            className="font-bold text-green_color-500 hover:text-green_color-900"
          >
            #novoprojeto
          </Link>
          <Link
            href="#"
            className="font-bold text-green_color-500 hover:text-green_color-900"
          >
            #nlw
          </Link>
          <Link
            href="#"
            className="font-bold text-green_color-500 hover:text-green_color-900"
          >
            #rocketseat
          </Link>
        </p>
      </div>
    </article>
  );
}
