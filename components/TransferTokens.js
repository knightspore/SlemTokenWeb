import { useState } from "react";
import Input from "./Atoms/Input";
import { useMMContext } from "./_Meta/MetaMaskProvider";

export default function TransferTokens() {
  const data = useMMContext();
  let tokenAddress = "0x422b16d7f90bd9d732fbe7c6cfddb50e0d38c606";
  let minABI = [
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      type: "function",
    },
  ];

  const [txHash, setTxHash] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const web3 = await data.global.web3;

    let amount = web3.utils.toBN(e.target.amount.value);
    let decimals = web3.utils.toBN(2);
    let value = amount.mul(web3.utils.toBN(10).pow(decimals));

    let contract = new web3.eth.Contract(minABI, tokenAddress); // $lemtoken

    try {
      contract.methods
        .transfer(e.target.address.value, value)
        .send({ from: data.global.userId })
        .on("transactionHash", function (hash) {
          setTxHash(hash);
          setLoading(false);
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return !txHash ? (
    <form
      onSubmit={(e) => submitForm(e)}
      class="mt-8 space-y-6 flex flex-col items-center"
    >
      <h2 className="text-lg font-bold">Make a New Transfer</h2>
      <div className="flex flex-col gap-2 ">
        <label htmlFor="amount">Transfer Amount</label>
        <Input
          type="number"
          name="amount"
          id="amount"
          placeholder="eg. 200"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="address">To Address</label>
        <Input
          type="text"
          name="address"
          id="address"
          placeholder="eg. 0x1A2B..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={!data.global.userId}
        className={`bg-purple-400 border-2 border-purple-300 text-purple-50 font-meduim px-2 py-1 rounded-lg ${
          loading && "animate-pulse"
        }`}
      >
        {loading ? "Loading..." : "Transfer"}
      </button>
    </form>
  ) : (
    <div className="mt-8 space-y-6 flex flex-col items-center">
      <h2 className="text-lg font-bold">Transaction Successful!</h2>
      <p>
        Hash:
        <a target="_blank" href={`https://ropsten.etherscan.io/tx/${txHash}`}>
          {txHash}
        </a>
      </p>
    </div>
  );
}
