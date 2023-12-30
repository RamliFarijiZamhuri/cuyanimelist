import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSessiom } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async ({ params: { id } }) => {

    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSessiom()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })
    const genres = anime.data.genres
    const genre = genres.map((genre) => {
        return (
            <a className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent" href={genre.url}>{genre.name}</a>
        )
    })

    return (
        <>
            <div className="flex flex-col md:gap-3 gap-4 py-4 md:mx-4 mx-2">
                <div className="pt-4 px-2">
                    <p className="text-2xl text-color-primary">{anime.data.title} {anime.data.year} | {anime.data.title_japanese}</p>
                    {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} />}
                </div>
                <div className="flex justify-start items-center p-4 gap-1 text-xl font-bold overflow-auto">
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Skor #
                        {anime.data.score}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Peringkat #
                        {anime.data.rank}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Anggota #
                        {anime.data.members}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Episode #
                        {anime.data.episodes}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Favorit #
                        {anime.data.favorites}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Popularitas #
                        {anime.data.popularity}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Source #
                        {anime.data.source}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Status #
                        {anime.data.status}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Type #
                        {anime.data.type}
                    </span>
                </div>
                <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
                    <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={350} height={350} className="w-full rounded object-cover max-h-96" />
                    <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                </div>
                <div className="flex flex-col py-4 gap-2">
                    <h2 className="text-xl text-color-primary">{anime.data.duration} | {anime.data.rating}</h2>
                    <h2 className="text-xl text-color-primary ">{anime.data.broadcast.timezone}</h2>
                    <p className="text-color-primary ">{anime.data.synopsis}</p>
                    <p className="text-color-primary ">{anime.data.background}</p>
                </div>
                <div className="flex justify-start items-center font-bold text-2xl text-color-primary gap-1">
                    <p>Genre:</p>
                    <div className="flex justify-start items-center font-bold overflow-auto text-2xl text-color-primary gap-1">
                        {genre}
                    </div>
                </div>
                <div className="flex flex-col py-4 gap-2">
                    <a className="text-color-primary underline" href={anime.data.url}>official website</a>
                </div>
            </div>
        </>
    )
}

export default Page