"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
} from "lucide-react"

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
      { name: "AI", icon: Brain, href: "/ai", hasSubmenu: true },
      { name: "Projects", icon: FolderOpen, href: "/projects", hasSubmenu: true },
      { name: "Customer", icon: Users, href: "/customer", hasSubmenu: true },
      { name: "Products", icon: Package, href: "/products", hasSubmenu: true },
      { name: "Orders", icon: ShoppingBag, href: "/orders", hasSubmenu: true },
      { name: "Account", icon: User, href: "/account", hasSubmenu: true },
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
]

export function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState([])

  const toggleExpanded = (itemName) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((name) => name !== itemName)
        : [...prev, itemName]
    )
  }

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
                const isActive = pathname === item.href
                return item.href ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "w-full flex items-center h-10 px-3 text-sm font-medium rounded-md",
                      isActive
                        ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    <span className="flex-1 text-left">{item.name}</span>
                    {item.hasSubmenu && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedItems.includes(item.name) && "rotate-180"
                        )}
                      />
                    )}
                  </Link>
                ) : (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start h-10 px-3 text-sm font-medium"
                    onClick={() => item.hasSubmenu && toggleExpanded(item.name)}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    <span className="flex-1 text-left">{item.name}</span>
                    {item.hasSubmenu && (
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedItems.includes(item.name) && "rotate-180"
                        )}
                      />
                    )}
                  </Button>
                )
              })}
            </nav>
          </div>
        ))}
      </div>
    </div>
  )
}
