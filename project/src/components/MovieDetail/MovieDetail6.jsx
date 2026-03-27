import Review from "../Review/Review";



const MovieDeatil6 = ({ movies }) => {
    const { id } = movies;
    console.log(id)

    return (
        <>
            <div>
                <Review id={id} />
            </div>
        </>
    )
}

export default MovieDeatil6;