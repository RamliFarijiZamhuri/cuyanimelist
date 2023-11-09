import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
        <div className="md:grid grid-cols-4 flex pt-4 px-4 relative gap-4 overflow-x-auto">
            {api.data?.map((anime, index) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-ponter text-color-primary hover:text-color-accent transition-all" key={index}>
                        <Image src={anime.images.webp.image_url} alt="...." width={350} height={350} className="w-full max-h-64 object-cover overflow-x-auto" />
                        <h3 className="justify-between font-bold md:text-lg text-5xl p-2">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList