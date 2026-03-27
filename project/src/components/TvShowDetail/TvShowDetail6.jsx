import TvShowReview from "../Review/TvShowReview";



const TvShowDetail6 = ({ movies }) => {
    const { id } = movies;
    console.log(id)

    return (
        <>
            <div>
                <TvShowReview id={id} />
            </div>
        </>
    )
}

export default TvShowDetail6;