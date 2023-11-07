import { authUserSessiom } from "@/libs/auth-libs"
import Image from "next/image"

const Page = async () => {
    const user = await authUserSessiom()
    return (
        <div className="text-color-primary">
            <h3>{user.name}</h3>
            <Image src={user.image} alt="..." width={250} height={250} />
        </div>
    )
}

export default Page