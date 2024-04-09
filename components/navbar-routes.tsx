"use client";

import { UserButton } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Link, LogOut } from "lucide-react";

export const NavbarRoutes = () => {
    const pathName = usePathname();
    const router = useRouter();

    const isTeacherPage = pathName?.startsWith("/teacher");
    const isStudentPage = pathName?.includes("/chapter");  

    return (  
        <div className="flex gap-x-8 ml-auto">
            {isTeacherPage || isStudentPage ? (             
                <Button size="sm" variant={"ghost"}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Exit
                </Button>


            ) : (
                <Button onClick={() => router.push("/teacher")} size="sm" variant={"ghost"}>
                    <Link className="hidden" /> 
                    Teacher mode
                </Button>
            )}
            <UserButton
                afterSignOutUrl="/"    
            />
        </div>
    );
}
 
export default NavbarRoutes;