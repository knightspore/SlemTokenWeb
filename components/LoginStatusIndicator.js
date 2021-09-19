import { useMMContext } from "./_Meta/MetaMaskProvider";

export default function LoginStatusIndicator() {
  const data = useMMContext();
  const id = data.global.userId || null;
  return (
    <div className="absolute right-2 top-2 card">
      <p className="text-sm font-bold flex items-center gap-2">
        <Indicator id={id} />
        <LoginStatus id={id} />
      </p>
    </div>
  );
}

function LoginStatus({ id }) {
  return id !== null
    ? `${id.slice(0, 6)}...${id.slice(38, id.length)}`
    : `Metamask Not Found 😓`;
}

function Indicator({ id }) {
  return id != null ? (
    <div className={`h-2 w-2 bg-green-500 rounded-full`} />
  ) : (
    <div className={`h-2 w-2 bg-red-500 rounded-full`} />
  );
}
