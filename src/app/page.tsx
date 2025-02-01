import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-3 px-10 py-10">
        <div className="flex items-start justify-start">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="flex items-center justify-center">
          <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
        </div>
        <div className="flex items-end justify-end">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}
