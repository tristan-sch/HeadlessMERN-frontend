import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" height={100} width={149} />
    </Link>
  );
}
