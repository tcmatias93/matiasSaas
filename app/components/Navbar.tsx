import Link from "next/link";
import { Themetoglle } from "./Themetoggle";
import { Button } from "@/components/ui/button";

//Esto es para el registro Login
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
//Verifica si la session esta abierta 
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";


export default async function Navbar() {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href={'/'} className="font-bold text-3xl"><h1>Matias<span className="text-primary">Saas</span> </h1></Link>

        <div className="flex items-center gap-x-5">
          <Themetoglle />
          {await isAuthenticated() ? (
            <UserNav name={user?.email as string} email={user?.email as string} image={user?.picture as string} />
          ) : (
            <div className="flex items-center gap-x-5">
              <LoginLink>
                <Button>Sing In</Button>
              </LoginLink>

              <RegisterLink>
                <Button variant="secondary">Sing Up</Button>
              </RegisterLink>
            </div>
          )
          }
        </div >
      </div >
    </nav >
  )
}
