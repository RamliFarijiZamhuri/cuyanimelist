"use client"

import React, { useEffect, useState } from "react"
import HeaderMenu from "@/components/Utilities/HeaderMenu"
import Pagination from "@/components/Utilities/Pagination"
import MangaList from "@/components/MangaList/MangaList"
import { getAnimeResponse } from "@/libs/api-libs"

const Page = () => {
    const [page, setPage] = useState(1)
    const [topManga, setTopManga] = useState([])

    const fetchData = async() => {
        const populerManga = await getAnimeResponse("top/manga", `page=${page}`)
        setTopManga(populerManga)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu title={`Manga Populer ${page}`}/>
            <MangaList api={topManga} />
            <Pagination page={page} lastPage={topManga.pagination?.last_visible_page} setPage={setPage} />
        </>
    )
}

export default Page