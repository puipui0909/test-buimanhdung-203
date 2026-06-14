"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Compass, Home, UserRound } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Trang chủ",
      href: "/",
      icon: Home,
    },
    {
      label: "Khám phá",
      href: "/explore",
      icon: Compass,
    },
    {
      label: "Hồ sơ",
      href: "/profile",
      icon: UserRound,
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="
          hidden
          md:flex
          fixed
          left-0
          top-0
          h-screen
          w-56
          bg-zinc-900
          text-white
          flex-col
          p-6
          gap-6
        "
      >
        <h2 className="text-xl font-bold">Video Test</h2>

        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  flex items-center gap-3 rounded-lg px-3 py-2
                  text-base transition
                  ${
                    isActive
                      ? "bg-white/15 font-semibold"
                      : "hover:bg-white/10"
                  }
                `}
              >
                <Icon size={22} strokeWidth={2.3} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav
        className="
          md:hidden
          fixed
          bottom-0
          left-0
          right-0
          z-50
          h-16
          bg-zinc-900
          text-white
          flex
          justify-around
          items-center
          border-t
          border-white/10
        "
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className={`
                flex h-12 w-12 items-center justify-center rounded-full
                transition
                ${
                  isActive
                    ? "bg-white/15"
                    : "hover:bg-white/10"
                }
              `}
            >
              <Icon size={24} strokeWidth={2.4} />
            </Link>
          );
        })}
      </nav>
    </>
  );
}