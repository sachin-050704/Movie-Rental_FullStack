import { IoCalendarClearOutline } from "react-icons/io5";
import { IoLanguageOutline } from "react-icons/io5";
import { LuTvMinimalPlay } from "react-icons/lu";
import { PiSquaresFour } from "react-icons/pi";
import TvShowDetail2 from "./TvShowDetail2";
import Btn2 from "../Global/Btn2/Btn2";
import Btn1 from "../Global/Btn1/Btn1";
import { GoStarFill } from "react-icons/go";




const TvShowDetail5 = ({ movies }) => {

    const { platforms, crews } = movies;

    const handlePayment = async (contentType, contentId) => {
    const res = await fetch("http://127.0.0.1:8000/payment/create-order/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access")
        },
        body: JSON.stringify({
            amount: 199,
            type: contentType,  
            id: contentId
        })
    });

    const order = await res.json();

    const options = {
        key: "rzp_test_SViyNZiKe6dIqC",
        amount: order.amount,
        currency: "INR",
        name: "Movie/Series Rental",
        description: `Rent ${contentType}`,
        order_id: order.id,

        handler: async function(response) {
            const verifyRes = await fetch("http://127.0.0.1:8000/payment/verify-payment/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access")
                },
                body: JSON.stringify(response)
            });

            const result = await verifyRes.json();
            if(result.status === "success") {
                alert("Payment Successful 🎉");
            } else {
                alert("Payment Failed ❌: " + (result.error || ""));
            }
        },

        prefill: { name: "User", email: "test@test.com", contact: "9999999999" },
        theme: { color: "#E50914" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
};

    return (
        <>
            <div className="w-full h-full text-white bg-[#1A1A1A] p-3 rounded-xl">

                <div className="flex gap-5">
                    <div>
                    <div className="flex items-center gap-2 text-xl">
                        <span style={{color:"rgba(255,255,255,0.4)"}}><IoCalendarClearOutline /></span>
                        <p className="p-0 m-0" style={{color:"rgba(255,255,255,0.4)"}}>Released Year</p>
                    </div>
                    <h5 className="py-3">{movies.series_start_year}</h5>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-xl">
                        <span style={{color:"rgba(255,255,255,0.4)"}}><IoCalendarClearOutline /></span>
                        <p className="p-0 m-0" style={{color:"rgba(255,255,255,0.4)"}}>Ended Year</p>
                    </div>
                    <h5 className="py-3">{movies.series_end_year ? movies.series_end_year : `Not Finished`}</h5>
                </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-xl">
                        <span style={{color:"rgba(255,255,255,0.4)"}}><IoLanguageOutline /></span>
                        <p className="p-0 m-0" style={{color:"rgba(255,255,255,0.4)"}}>Available Languages</p>
                    </div>
                    {movies.languages ? movies.languages.map((item,index)=>(
                        <button className="bg-black px-2 py-1.5 m-3">{item.lang_name}</button>
                    )) : <p>Not Provided</p>}
                </div>

                <div>
                    <div className="flex items-center gap-2 text-xl">
                        <span style={{color:"rgba(255,255,255,0.4)"}}><LuTvMinimalPlay /></span>
                        <p className="p-0 m-0" style={{color:"rgba(255,255,255,0.4)"}}>Streaming</p>
                    </div>
                    <div className="flex items-center gap-4 my-3">
                        {platforms && (
                        platforms.map((stream,index)=>(
                            <div key={index} style={{width:"200px",textAlign:"center"}}>
                                <div style={{display:"flex",justifyContent:"center"}}><img src={`http://127.0.0.1:8000${stream.plat_logo}`} alt="" style={{width:"60px"}} /></div>
                                <p style={{width:"90%",margin:"0 auto"}}>{stream.plat_name}</p>
                            </div>
                        ))
                    )}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-xl">
                        <span style={{color:"rgba(255,255,255,0.4)"}}><PiSquaresFour /></span>
                        <p className="p-0 m-0" style={{color:"rgba(255,255,255,0.4)"}}>Genres</p>
                    </div>
                    <button className="bg-black px-2 py-1.5 my-3">{movies.series_genre}</button>
                </div>

                <div>
                    <p className="p-0 m-0 text-xl" style={{color:"rgba(255,255,255,0.4)"}}>Crews</p>
                    {crews && (
                        crews.map((c,index) =>(
                            <div key={index}><button className="bg-black px-2 py-1.5 my-1">{c.crew}</button></div>
                        ))
                    )}
                </div>

                {movies?.rentals?.length === 0 ? <div className="py-2" onClick={() => handlePayment("webseries",movies.id)}>
                    <Btn1 name={"Rent the movie"} style={{ borderRadius: "10px" }} />
                </div> :
                <div className="py-2">
                    <Btn2 name={"Movie is Rented"} icon={<GoStarFill/>} style={{ borderRadius: "10px", color:"black" }} />
                </div>
                }


            </div>
        </>
    )
}

export default TvShowDetail5;