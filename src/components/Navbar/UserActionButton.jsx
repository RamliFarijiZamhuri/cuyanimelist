import Link from "next/link"
import { authUserSessiom } from "@/libs/auth-libs"

const UserActionButton = async () => {
    const user = await authUserSessiom();
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex gap-2 justify-between">
            {
                user ? <Link href="/users/dashboard" className="border-solid border-2 border-color-dark py-1 px-12">Dashboard</Link> : null
            }
            <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-12">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton