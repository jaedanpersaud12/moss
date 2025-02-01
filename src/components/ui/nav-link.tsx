import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      className="text-md font-bold relative group overflow-hidden"
      href={href}
    >
      <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:transition-all after:duration-300 after:opacity-0 after:-translate-x-full group-hover:after:opacity-100 group-hover:after:translate-x-0">
        {children}
      </span>
    </Link>
  );
}
