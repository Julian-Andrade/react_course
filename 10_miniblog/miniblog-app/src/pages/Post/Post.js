// CSS
import styles from "./Post.module.css";

// Hooks
import { useFetchDocument } from "../../hooks/useFetchDocument";

// React Router
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div className={styles.post}>
      {loading && <p>Carregando o post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p className={styles.body}>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
          <Link to="/" className="btn btn-outline">Voltar</Link>
        </>
      )}
    </div>
  );
};

export default Post;
