import LoginStatusIndicator from "../Molecules/LoginStatusIndicator";
import Link from "next/link";

export default function Header({}) {
  return (
    <header className="flex items-center justify-between p-6 bg-purple-900 lg:px-12 text-purple-50">
      <Link href="/">
        <a>
          <p className="text-lg font-bold">$lemtoken</p>
        </a>
      </Link>
      <LoginStatusIndicator />
    </header>
  );
}
