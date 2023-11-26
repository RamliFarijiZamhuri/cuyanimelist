import { getAnimeResponse } from "@/libs/api-libs"
import Image from "next/image"

const Page = async ({ params: { id } }) => {

    const manga = await getAnimeResponse(`manga/${id}`)
    const genres = manga.data.genres
    const genre = genres.map((genre) => {
        return (
            <a className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent" href={genre.url}>{genre.name}</a>
        )
    })
    console.log(manga.data)


    return (
        <>
            <div className="flex flex-col md:gap-3 gap-4 py-4 md:mx-4 mx-2">
                <div className="pt-4 px-2">
                    <p className="text-2xl text-color-primary">{manga.data.title} {manga.data.year} | {manga.data.title_japanese}</p>
                </div>
                <div className="flex justify-start items-center p-4 gap-1 text-xl font-bold overflow-auto">
                <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Score #
                        {manga.data.score}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Peringkat #
                        {manga.data.rank}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Anggota #
                        {manga.data.members}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Favorit #
                        {manga.data.favorites}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Popularitas #
                        {manga.data.popularity}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Volumes #
                        {manga.data.volumes}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Status #
                        {manga.data.status}
                    </span>
                    <span className="whitespace-nowrap rounded-full bg-color-primary px-2.5 py-0.5 text-sm text-color-accent">
                        Type #
                        {manga.data.type}
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={manga.data.images.webp.image_url} alt={manga.data.images.jpg.image_url} width={350} height={350} className="w-96 rounded object-cover max-h-full" />
                </div>
                <div className="flex flex-col py-4 gap-2">
                    <p className="text-color-primary ">{manga.data.synopsis}</p>
                    <p className="text-color-primary ">{manga.data.background}</p>
                </div>
                <div className="flex justify-start items-center font-bold text-2xl text-color-primary gap-1">
                    <p>Genre:</p>
                    <div className="flex justify-start items-center font-bold overflow-auto text-2xl text-color-primary gap-1">
                        {genre}
                    </div>
                </div>
                <div className="flex flex-col py-4 gap-2">
                    <a className="text-color-primary underline" href={manga.data.url}>official website</a>
                </div>
            </div>
        </>
    )
}

export default Page