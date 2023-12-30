import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 px-4 gap-4">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="bg-color-accent rounded-md cursor-ponter text-color-primary hover:text-color-accent transition-all" key={index}>
                        <Image src={anime.images.webp.image_url} alt="...." width={350} height={350} className="w-4/5 m-auto mt-4 max-h-64 object-cover overflow-x-auto" />
                        <h3 className="justify-between font-bold md:text-xl text-md p-1">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList