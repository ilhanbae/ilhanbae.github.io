import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 self-start p-5 z-10 border">
      <ul className="flex flex-col space-y-3 text-slate-500 font-semibold">
        <li>
          <Link href="/" className="hover:text-slate-950">
            Home
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-slate-950">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/resume" className="hover:text-slate-950">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
