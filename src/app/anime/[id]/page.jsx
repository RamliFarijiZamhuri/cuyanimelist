import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="flex flex-col md:gap-3 gap-4 py-4 md:mx-4 mx-2">
                <div className="pt-4 px-2">
                    <p className="text-2xl text-color-primary">{anime.data.title} = {anime.data.year}</p>
                </div>
                <div className="pt-4 flex gap-2 text-color-primary overflow-auto">
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3">
                        <h3>Peringkat</h3>
                        <p>{anime.data.rank}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3">
                        <h3>Skor</h3>
                        <p>{anime.data.score}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3">
                        <h3>Anggota</h3>
                        <p>{anime.data.members}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3">
                        <h3>Episode</h3>
                        <p>{anime.data.episodes}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3">
                        <h3>Favorit</h3>
                        <p>{anime.data.favorites}</p>
                    </div>
                    <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-3">
                        <h3>Popularitas</h3>
                        <p>{anime.data.popularity}</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
                    <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={350} height={350} className="w-full rounded object-cover max-h-96" />
                    <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />

                </div>
                <div>
                    <p className="text-color-primary ">{anime.data.synopsis}</p>
                </div>
            </div>
        </>
    )
}

export default Page