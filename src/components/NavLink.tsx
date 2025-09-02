import Link from "next/link";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block py-1 text-sm text-slate-700 font-semibold hover:text-[#224fa2]"
    >
      {children}
    </Link>
  );
}
