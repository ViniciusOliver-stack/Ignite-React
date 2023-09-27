import Link from "next/link";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import { comment } from "postcss";
import { useState } from "react";

interface PostProps {
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

export function Post({ author, content, publishAt }: PostProps) {
  const [comments, setComments] = useState(["Post incrível!"]);
  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishAt, "d 'de' LLLL	'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event?.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event?.target.value);
  }

  return (
    <article className="bg-gray_color-800 rounded-lg p-5 md:p-10 flex flex-col">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={author.avatarUrl} hasBorder={true} />
          <div className="flex flex-col gap-1">
            <strong className="text-gray_color-400">{author.name}</strong>
            <span className="text-sm text-gray_color-500">{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishAt.toISOString()}
          className="text-sm text-gray_color-500"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className="text-gray_color-500 flex flex-col gap-4 mt-6 border-b border-gray_color-700 pb-6">
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p
                key={index}
                className="font-bold text-green_color-500 hover:text-green_color-900"
              >
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className="w-[100%] mt-6 pt-4 border-t-green_color-500"
      >
        <strong className="text-gray_color-400">Deixe seu feedback</strong>
        <div className="group">
          <textarea
            onChange={handleNewCommentChange}
            name="comment"
            value={newCommentText}
            placeholder="Deixe um comentário"
            className="w-full bg-gray_color-900 resize-none h-24 p-4 rounded-lg border-green_color-500 text-gray_color-400 mt-4 focus:outline-none focus:border-green_color-500 focus:ring-1 focus:ring-green_color-500"
          />
          <footer className="hidden group-focus-within:block">
            <button
              type="submit"
              className="px-6 py-4 rounded-lg border-0 bg-green_color-500 text-white font-bold cursor-pointer hover:bg-green_color-900 transition-all duration-75"
            >
              Publicar
            </button>
          </footer>
        </div>
      </form>

      <div>
        {comments.map((comment, index) => {
          return <Comment key={index} content={comment} />;
        })}
      </div>
    </article>
  );
}
