import Image from "next/image";

export default function QRCode({ addr, size }) {
  return (
    <Image
      src={`https://chart.googleapis.com/chart?chs=300x300&cht=qr&chco=4c1d95&bgco=444&chl=${addr}&choe=UTF-8`}
      width={size}
      height={size}
      layout="responsive"
    />
  );
}
