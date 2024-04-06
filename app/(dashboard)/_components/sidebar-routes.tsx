"use client";

import { Compass, Layout, Home, BookOpen, PenTool } from "lucide-react";
import { SidebarItem } from "./sidebar-items";

const guestRoutes = [
    {
        icon: Home,
        label: "Home",
        href: "/",  
    },
    {
        icon: BookOpen,
        label: "Courses",
        href: "/courses",  
    },
    {
        icon: Layout,
        label: "My Learning",
        href: "/my-learning"
    },
    {
        icon: PenTool,
        label: "Practice",
        href: "/practice"
    }
]

export const SidebarRoutes = () => {
    const routes = guestRoutes;

    return (
        <div className="flex flex-col w-full">
            {routes.map((routes) => (
                <SidebarItem 
                    key = {routes.href}
                    icon = {routes.icon}
                    label = {routes.label}
                    href = {routes.href}
                />
            ))}
        </div>
    )
}