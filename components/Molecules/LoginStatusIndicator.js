import { useMMContext } from "../_Meta/MetaMaskProvider";
import shortenHex from "../../utils/shortenHex";
import Link from "next/link";

export default function LoginStatusIndicator() {
  const data = useMMContext();
  const id = data.global.userId || null;
  return (
    <Link href={id ? `/profile/${id}` : "https://metamask.com/"}>
      <div className="card">
        <p className="flex items-center gap-2 text-xs font-bold">
          <Indicator id={id} />
          <LoginStatus id={id} />
        </p>
      </div>
    </Link>
  );
}

function LoginStatus({ id }) {
  return id !== null ? shortenHex(id) : `Metamask Not Found 😓`;
}

function Indicator({ id }) {
  return id != null ? (
    <div className={`h-2 w-2 bg-green-500 rounded-full`} />
  ) : (
    <div className={`h-2 w-2 bg-red-500 rounded-full`} />
  );
}
