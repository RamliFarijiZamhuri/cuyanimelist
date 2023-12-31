import Image from "next/image"
import Link from "next/link"

const MangaList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 px-4 gap-4">
            {api.data?.map((manga, index) => {
                return (
                    <Link href={`/manga/${manga.mal_id}`} className="bg-color-primary rounded-md cursor-ponter text-color-dark hover:text-color-accent transition-all" key={index}>
                        <Image src={manga.images.webp.image_url} alt="...." width={350} height={350} className="w-4/5 m-auto mt-4 max-h-64 object-cover overflow-x-auto" />
                        <h3 className="justify-between font-bold md:text-xl text-md p-1">{manga.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default MangaList