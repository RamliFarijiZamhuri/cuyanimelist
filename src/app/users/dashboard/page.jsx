import { authUserSessiom } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await authUserSessiom()

    return (
        <div className="flex flex-col justify-center items-center content-center text-color-primary w-full py-32 gap-4">
            <h1>{user.name}</h1>
            <Image src={user.image} alt="..." width={250} height={250} />
            <div className="flex flex-wrap gap-4 py-4">
                <Link href="/users/dashboard/collection" className="bg-color-accent text-color-primary font-bold px-4 py-3 text-xl">My Collection</Link>
                <Link href="/users/dashboard/comment" className="bg-color-accent text-color-primary font-bold px-4 py-3 text-xl">My Comment</Link>
            </div >
        </div >
    )
}

export default Page