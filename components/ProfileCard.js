import createColor from "../utils/createColor";
import Link from "next/link";
import Image from "next/image";
export default function ProfileCard({ user }) {
  return (
    <div
      style={{
        backgroundColor: createColor(user.address),
        padding: "1rem",
        marginBottom: "2rem",
      }}
    >
      <Image src={user.avatar} width={96} height={96} layout="responsive" />
      <p>
        <Link href={"/" + user.address}>
          <a>{user.address}</a>
        </Link>
      </p>
    </div>
  );
}
