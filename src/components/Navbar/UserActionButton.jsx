import Link from "next/link"
import { authUserSessiom } from "@/libs/auth-libs"

const UserActionButton = async () => {
    const user = await authUserSessiom();
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex md:gap-2 gap-5 justify-center">
            {
                user ? <Link href="/users/dashboard" className="flex justify-center items-center border-solid border-2 border-color-dark py-1 px-8">Dashboard</Link> : null
            }
            <Link href={actionURL} className="flex justify-center items-center border-2 bg-color-dark text-color-accent py-1 px-8">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton