import styles from "./SideBar.module.css";
import { Avatar } from "../Avatar/Avatar";
import { PencilLine } from "phosphor-react";

export const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <div>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1653542772393-71ffa417b1c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=40"
          alt=""
        />
      </div>

      <div className={styles.profile}>
        <Avatar src="https://github.com/mari.png" />
        <strong>Leslie Alexander</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <button>
          <PencilLine size={20} />
          Editar seu Perfil
        </button>
      </footer>
    </aside>
  );
};
