import { connectToDatabase } from "../util/mongodb";

export default function Assignments({ assignments }) {
  return (
    <div>
      <h1>Assignments</h1>
      <p></p>
      <ul>
        {assignments.map((assignment) => (
          <li>
            <h2>{assignment.title}</h2>
            <h3>{assignment.description}</h3>
            <h4>{assignment.author}</h4>
            <p>{assignment.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const assignments = await db
    .collection("assignments")
    .find({})
    // .sort({ metacritic: -1 })
    .toArray();

  return {
    props: {
      assignments: JSON.parse(JSON.stringify(assignments)),
    },
  };
}
