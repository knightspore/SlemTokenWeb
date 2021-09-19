import useSWR from "swr";
import ProfileCard from "./ProfileCard";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Visitors() {
  const { data, error } = useSWR("/api/users", fetcher);

  return (
    <div>
      <h2>Visitors</h2>
      {data &&
        data.map((user) => {
          return <ProfileCard user={user} />;
        })}
    </div>
  );
}
