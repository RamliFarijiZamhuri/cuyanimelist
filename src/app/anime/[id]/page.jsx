import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)

    return (
        <>
            <div className="pt-4 px-4">
                <p className="text-2xl text-color-primary">{anime.data.title} = {anime.data.year}</p>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-auto">
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
            <div className="pt-4 px-4 flex gap-2 sm:flex-nowrap flex-wrap text-color-primary">
                <Image src={anime.data.images.webp.image_url} alt={anime.data.images.jpg.image_url} width={250} height={250} className="w-full rounded object-cover" />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div className="">
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default Page