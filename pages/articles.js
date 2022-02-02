import { connectToDatabase } from "../util/mongodb";

export default function Articles({ articles }) {
  return (
    <div>
      <h1>Articles</h1>
      <p></p>
      <ul>
        {articles.map((article) => (
          <li>
            <h2>{article.title}</h2>
            <h3>{article.subtitle}</h3>
            <h4>{article.author}</h4>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const articles = await db
    .collection("articles")
    .find({})
    // .sort({ metacritic: -1 })
    .toArray();

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
    },
  };
}
