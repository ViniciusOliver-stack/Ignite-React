interface PostProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<{
    type: string;
    content: string;
  }>;
  publishAt: Date;
}

export const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/87040481?v=4",
      name: "Vinicius Oliveira",
      role: "Programador Fullstack",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
      {
        type: "link",
        content: "#novoprojeto",
      },
    ],
    publishAt: new Date("2023-05-23 19:18:00"),
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/87040481?v=4",
      name: "Júlia Oliveira",
      role: "Ciência da computação",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
      {
        type: "link",
        content: "#novoprojeto",
      },
    ],
    publishAt: new Date("2023-05-06 19:00:00"),
  },
];
