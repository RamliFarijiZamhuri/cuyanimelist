import AnimeList from "@/components/AnimeList"
import MangaList from "@/components/MangaList/MangaList"
import Header from "@/components/AnimeList/Header"
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs"


const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  const topManga = await getAnimeResponse("top/manga", "limit=10")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 10)
  return (
    <>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>

      <section>
        <Header title="Rekomendasi Anime" />
        <AnimeList api={recommendedAnime} />
      </section>

      <section>
        <Header title="Manga Populer" linkTitle="Lihat Semua" linkHref="/manga-populer" />
        <MangaList api={topManga} />
      </section>
    </>
  )
}

export default Page