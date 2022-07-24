import styles from "./Comment.module.css";
import { Avatar } from "../Avatar/Avatar";
import { Trash, HandsClapping } from "phosphor-react";
import { useState } from "react";

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [countLikes, setCountLikes] = useState(0);

  const handleCountLikes = () => {
    setCountLikes((prevState) => prevState + 1);
  };
  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentBox}>
        <div className={styles.avatarImage}>
          <Avatar hasBorder={false} src="https://github.com/grazinascito.png" />
        </div>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.commentAuthor}>
              <strong>Devon lane (voce)</strong>
              <time title="Cerca de 2h atrás">Cerca de 2h atrás</time>
            </div>
            <button onClick={handleDeleteComment}>
              <Trash size={24} cursor="pointer" />
            </button>
          </header>

          <p>{content}</p>
        </div>
      </div>

      <footer className={styles.commentLikes}>
        <button onClick={handleCountLikes}>
          <HandsClapping size={20} /> Aplaudir <span></span> {countLikes}
        </button>
      </footer>
    </div>
  );
};
