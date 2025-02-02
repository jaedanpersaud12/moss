import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link className="text-md font-bold relative group" href={href}>
      <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] md:after:h-px after:bg-primary after:origin-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-out group-hover:after:origin-left group-hover:after:scale-x-100">
        {children}
      </span>
    </Link>
  );
}
