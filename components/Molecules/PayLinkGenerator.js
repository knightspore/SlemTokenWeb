import Input from "../../components/Atoms/Input";
import CopyToClipboard from "react-copy-to-clipboard";
import { useState } from "react";

export default function PayLinkGenerator({ addr }) {
  const [copied, setCopied] = useState(false);
  const [amount, setAmount] = useState(null);
  return (
    <div className="flex items-center gap-4 p-2 bg-purple-300 rounded-lg shadow-inner">
      <Input
        type="number"
        id="payLinkAmt"
        name="payLinkAmt"
        onChange={(e) => setAmount(e.target.value)}
      />
      <CopyToClipboard
        className="text-sm font-black cursor-pointer text-purple-50 hover:text-purple-200"
        text={`https://slemtoken.vercel.app/?addr=${addr}${
          amount ? `&amt=${amount}` : ""
        }`}
        onCopy={() => setCopied(true)}
      >
        <p>{copied ? "Copied" : "Copy Paylink to Clipboard"}</p>
      </CopyToClipboard>
    </div>
  );
}
