import StarRating from '../Global/Star/StarRating';
import classes from '../MovieDetail/CSS/MovieDetail3.module.css'




const TvShowDetail3 = ({movies}) =>{

    return (
        <>
            {movies && (
                <div className={classes.movdetail1}>
                    <h3>Description</h3>
                    <h6>{movies.mov_name}</h6>
                    <div className="flex gap-2">
                        <h6>{movies.series_start_year}</h6>
                        <h6>{movies.series_end_year}</h6>
                        <div className={classes.movdesl1}></div>
                        {/* <h6>{movies.mov_duration}</h6> */}
                        <div className={classes.movdesl1}></div>
                        <h6><StarRating rating={movies.series_rating}/></h6>
                    </div>
                    <p style={{color:"rgba(255,255,255,0.5)"}}>{movies.series_description}</p>
                </div>
            )
            }
        </>
    )
}

export default TvShowDetail3;