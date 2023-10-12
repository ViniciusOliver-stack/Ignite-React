import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "../Avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        hasBorder={false}
      />
      <div className="flex-1">
        <div className="bg-gray_color-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="flex flex-col">
              <strong className="text-sm">Vinicius Oliveira</strong>
              <time
                title="21 de Setembro às 20:51"
                dateTime="2023-09-21 20:51:00" 
                className="text-xs text-gray_color-500"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button
              title="Deletar comentário"
              onClick={handleDeleteComment}
              className="text-gray_color-400 hover:text-red-400"
            >
              <Trash size={24} />
            </button>
          </header>

          <p className="mt-4 text-gray_color-400">{content}</p>
        </div>

        <footer className="mt-4">
          <button
            className="flex items-center hover:text-green_color-500"
            onClick={handleLikeComment}
          >
            <ThumbsUp className="mr-2" />
            Aplaudir <span className="before-content">{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
