import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" height={149} width={100} />
    </Link>
  );
}
