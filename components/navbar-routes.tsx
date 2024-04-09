"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

export const NavbarRoutes = () => {
    const pathName = usePathname();
    const router = useRouter();

    const isTeacherPage = pathName?.startsWith("/teacher");
    const isStudentPage = pathName?.includes("/chapter");
    

    return (  
        <div className="flex gap-x-2 ml-auto">
            <UserButton />
        </div>
    );
}
 
export default NavbarRoutes;