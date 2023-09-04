"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  console.log(pathname);
  const routes = [
    {
      href: "/admin",
      label: "Dashboard",
      active: pathname == "/admin",
    },
    {
      href: "/admin/orders",
      label: "Orders",
      active: pathname == "/admin/orders",
    },
    {
      href: "/admin/categories",
      label: "Categories",
      active: pathname == "/admin/categories",
    },
    {
      href: "/admin/products",
      label: "Products",
      active: pathname == "/admin/products",
    },
    {
      href: "/admin/settings",
      label: "Settings",
      active: pathname == "/admin/settings",
    },
  ];
  return (
    <div className="flex space-x-4">
      <h3>Cahierix</h3>
      {routes.map((_route) => (
        <Link key={_route.href} href={_route.href}>
          <div
            style={{
              color: _route.active ? "#470047" : "initial",
            }}
          >
            {_route.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
