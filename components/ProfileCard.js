import createColor from "../utils/createColor";
import Link from "next/link";
export default function ProfileCard({ user }) {
  return (
    <div
      style={{
        backgroundColor: createColor(user.address),
        padding: "1rem",
        marginBottom: "2rem",
      }}
    >
      <img src={user.avatar} style={{ width: "2rem", height: "2rem" }} />
      <p>
        <Link href={"/" + user.address}>
          <a>{user.address}</a>
        </Link>
      </p>
    </div>
  );
}
