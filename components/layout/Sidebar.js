"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ShoppingCart,
  FolderOpen,
  TrendingUp,
  BarChart3,
  Brain,
  Users,
  Package,
  ShoppingBag,
  User,
  HelpCircle,
  Calendar,
  FolderTree,
  Mail,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

const navigationItems = [
  {
    title: "DASHBOARD",
    items: [
      { name: "Ecommerce", icon: ShoppingCart, href: "/Ecommerce" },
      { name: "Project", icon: FolderOpen, href: "/project" },
      { name: "Marketing", icon: TrendingUp, href: "/marketing" },
      { name: "Analytic", icon: BarChart3, href: "/analytics" },
    ],
  },
  {
    title: "CONCEPTS",
    items: [
      { name: "AI", icon: Brain, href: "/ai" },
      { name: "Projects", icon: FolderOpen, href: "/projects" },
      { name: "Customer", icon: Users, href: "/customer" },
      {
        name: "Products",
        icon: Package,
        hasSubmenu: true,
        submenu: [
          { name: "List", href: "/products/list" },
          { name: "Create", href: "/products/create" },
          { name: "Edit", href: "/products/edit" },
        ],
      },
      {
        name: "Orders",
        icon: Package,
        hasSubmenu: true,
        submenu: [
          { name: "List", href: "/order/list" },
          { name: "Create", href: "/order/create" },
          { name: "Edit", href: "/order/edit" },
          {name:"Detail",href:"/order/detail"}
        ],
      },
      { name: "Account", icon: User, href: "/account" },
    ],
  },
  {
    title: "UI COMPONENTS",
    items: [
      { name: "Help Center", icon: HelpCircle, href: "/help" },
      { name: "Calendar", icon: Calendar, href: "/calendar" },
      { name: "File Manager", icon: FolderTree, href: "/files" },
      { name: "Mail", icon: Mail, href: "/mail" },
      { name: "Chat", icon: MessageCircle, href: "/chat" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpanded = (itemName) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">E</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Ecme</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {navigationItems.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="px-6 mb-2">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {section.title}
              </h3>
            </div>
            <nav className="space-y-1 px-3">
              {section.items.map((item) => {
                const isExpanded = expandedItems.includes(item.name);
                const isActive = pathname === item.href;

                return (
                  <div key={item.name} className="space-y-1">
                    {/* Parent button */}
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start h-10 px-3 text-sm font-medium rounded-md flex items-center",
                        isActive
                          ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                      onClick={() => item.hasSubmenu && toggleExpanded(item.name)}
                      asChild={!item.hasSubmenu ? true : undefined} // normal link
                    >
                      {!item.hasSubmenu ? (
                        <Link href={item.href} className="flex-1 flex items-center">
                          <item.icon className="mr-3 h-4 w-4" />
                          <span className="flex-1 text-left">{item.name}</span>
                        </Link>
                      ) : (
                        <>
                          <item.icon className="mr-3 h-4 w-4" />
                          <span className="flex-1 text-left">{item.name}</span>
                          {item.hasSubmenu && (
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform",
                                isExpanded && "rotate-180"
                              )}
                            />
                          )}
                        </>
                      )}
                    </Button>

                    {/* Submenu */}
                    {item.submenu && isExpanded && (
                      <div className="pl-8 flex flex-col gap-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className={cn(
                              "text-sm p-1 rounded hover:bg-gray-200",
                              pathname === sub.href ? "bg-blue-50 text-blue-700" : "text-gray-700"
                            )}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}
