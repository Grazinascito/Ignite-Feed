import global from "../src/global.css";
import styles from "../src/App.module.css";

import { Header } from "./components/Header/Header";
import { SideBar } from "./components/SideBar/SideBar";
import { Post } from "./components/Posts/Post";

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/grazinascito.png",
        name: "Grazi Nascito",
        role: "CTO @ Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa" },
        {
          type: "paragraph",
          content: "Acabei de fazer alguma coisa aqui kkkk",
        },
        { type: "paragraph", content: "vão lá dar uma conferida" },
        { type: "paragraph", content: "tamo junto!" },
      ],
      publishedAt: new Date("2022-07-03 21:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Romero Britto",
        role: "CTO @ Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa" },
        {
          type: "paragraph",
          content: "Acabei de fazer alguma coisa aqui kkkk",
        },
        { type: "paragraph", content: "vão lá dar uma conferida" },
        { type: "paragraph", content: "tamo junto!" },
      ],
      publishedAt: new Date("2022-11-10 13:00:00"),
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/afonso96.png",
        name: "Batata palha",
        role: "CTO @ Rocketseat",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa" },
        {
          type: "paragraph",
          content: "Acabei de fazer alguma coisa aqui kkkk",
        },
        { type: "paragraph", content: "vão lá dar uma conferida" },
        { type: "paragraph", content: "tamo junto!" },
        { type: "link", content: "tamo junto!" },
      ],
      publishedAt: new Date("2022-05-21 20:00:00"),
    },
  ];

  return (
    <div className={global}>
      <Header />
      <main className={styles.wrapper}>
        <div>
          <SideBar />
        </div>

        <div>
          {posts.map((data) => {
            return (
              <Post
                key={data.id}
                avatarUrl={data.author.avatarUrl}
                name={data.author.name}
                role={data.author.role}
                dateTime={data.publishedAt}
                content={data.content}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
