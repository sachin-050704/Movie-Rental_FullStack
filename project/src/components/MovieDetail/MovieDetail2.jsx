




const MovieDetail2 = ({movies}) => {

    return (
        <>
            {movies && (
                // <div className={classes.moviedetail}>
                <div style={{ padding: "25px 0", backgroundColor: "black" }}>
                    <img src={`http://127.0.0.1:8000${movies.mov_banner}`} alt="" style={{ width: "100%", borderRadius: "20px" }} />
                </div>
            )
            }
        </>
    )
}

export default MovieDetail2;