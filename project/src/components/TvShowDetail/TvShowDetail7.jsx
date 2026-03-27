import { RxCross2 } from 'react-icons/rx';
import classes from '../MovieDetail/CSS/MovieDetail4.module.css';
import { Menu, SubMenu, MenuItem } from 'react-pro-sidebar';
import { LuClock4 } from "react-icons/lu";




const TvShowDetail7 = ({ movies }) => {
    const { seasons } = movies;
    console.log(seasons)

    // const

    return (
        <>
            {movies && (
                <div className={classes.movdetail2}>
                    <h3>Seasons and Episodes</h3>
                    <Menu style={{borderRadius:"10px"}}>
                        {seasons?.map((season) => (
                            <SubMenu
                                key={season.id}
                                label={`Season ${season.season_number}`}
                                style={{ backgroundColor: "black", color: "white", padding: "20px", fontSize: "20px", marginTop: "10px" }}
                                suffix={<RxCross2 className={classes.dropdown} />}
                            >
                                {season.episodes.map((ep, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={() => navigate(`/episode/${ep.id}`)}
                                        style={{ backgroundColor: "black", color: "white",padding:"5px 10px",margin:"0" }}
                                    >


                                        <div className={classes.episodeItem}>
                                            <span className={classes.epNumber}>
                                                {ep.episode_number}
                                            </span>

                                            <div className={classes.epDetails}>
                                                <div className={classes.epTop}>
                                                    <h3>{ep.episode_title}</h3>

                                                    <div className={classes.time}>
                                                        <LuClock4 />
                                                        <span>{ep.episode_duration}</span>
                                                    </div>
                                                </div>

                                                <p className={classes.eppara}>{ep.episode_description}</p>
                                            </div>
                                        </div>
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        ))}
                    </Menu>
                </div>
            )
            }
        </>
    )
}

export default TvShowDetail7;