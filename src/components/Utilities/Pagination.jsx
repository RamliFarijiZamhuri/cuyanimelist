const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleFirstPage = () => {
        setPage((prevState) => prevState - page + 1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handleLastPage = () => {
        setPage((prevState) => prevState + lastPage - page)
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary">
            {page <= 1 ? null :
                <button onClick={handleFirstPage} className="transition-all hover:text-color-accent">First</button>
            }

            {page <= 1 ? null :
                <p>/</p>
            }

            {page <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-color-accent">Prev</button>
            }

            <p>{page}/{lastPage}</p>

            {page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-color-accent">Next</button>
            }

            {page >= lastPage ? null :
                <p>/</p>
            }

            {page >= lastPage ? null :
                <button onClick={handleLastPage} className="transition-all hover:text-color-accent">Last</button>
            }
        </div>
    )
}

export default Pagination