import styles from "./Post.module.css";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

interface Content {
  content: string;
}

interface UserInfoProps {
  avatarUrl: string;
  name: string;
  role: string;
  dateTime: Date;
  content: Content[];
}

export const Post = ({
  avatarUrl,
  name,
  role,
  dateTime,
  content,
}: UserInfoProps) => {
  const [comments, setComments] = useState(["bacana em meu bom"]);
  const [contentComment, setContentComment] = useState("");

  const publishedDateTitle = format(dateTime, "d 'de' MMMM 'às' kk:mm'h'", {
    locale: ptBR,
  });
  const publishedDateNow = formatDistanceToNow(dateTime, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleAddComments = (event: FormEvent) => {
    event.preventDefault();
    setComments([...comments, contentComment]);
    setContentComment("");
  };
  const handleFormComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentComment(event.target.value);
  };

  const handleDeleteComment = (commentToDelete: string) => {
    const filterNotDeletedComment = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(filterNotDeletedComment);
  };

  const isNewCommentEmpty = contentComment === "";

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={false} src={avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time title={publishedDateTitle}>{publishedDateNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          return <p key={line.content}>{line.content}</p>;
        })}
      </div>

      <form onSubmit={handleAddComments} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
          onChange={handleFormComment}
          value={contentComment}
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.postComments}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};
