import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="flex flex-col md:gap-3 gap-4 py-4 md:mx-4 mx-2">
                <div className="pt-4 px-2">
                    <p className="text-2xl text-color-primary">{anime.data.title} {anime.data.year}</p>
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
                </div>
                <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
                    <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={350} height={350} className="w-full rounded object-cover max-h-96" />
                    <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                </div>
                <div className="flex flex-col py-4 gap-2">
                    <h2 className="text-xl text-color-primary">{anime.data.duration} | {anime.data.rating}</h2>
                    <p className="text-color-primary ">{anime.data.synopsis}</p>
                </div>
            </div>
        </>
    )
}

export default Page