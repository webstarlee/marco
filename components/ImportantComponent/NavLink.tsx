import React from "react";
import Link from 'next/link'

export function NavLink({ href, children }: { href: string; children: React.ReactNode }): JSX.Element {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
