"use client";

import { Compass, Layout, Home, BookOpen, Pencil, BarChart, List } from "lucide-react";
import { SidebarItem } from "./sidebar-items";
import { usePathname } from "next/navigation";

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
        icon: Pencil,
        label: "Practice",
        href: "/practice"
    }
];

const teacherRoutes = [
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
        icon: List,
        label: "My Course",
        href: "/teacher/courses"
    },
    {
        icon: BarChart,
        label: "Analytics",
        href: "/teacher/analytics"
    }    
]

export const SidebarRoutes = () => {
    const pathName = usePathname();
    const isTeacherPage = pathName?.includes("/teacher");

    const routes = isTeacherPage ? teacherRoutes : guestRoutes;

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