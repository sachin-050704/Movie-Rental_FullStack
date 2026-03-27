




const Line = (props) =>{
    return(
        <>
        <div style={{borderLeft:"3px solid #8919B6", color:"white"}}>
            <h1 style={{textTransform:"uppercase",padding:"0 20px",margin:"0"}}>{props.temp}</h1>
        </div>
        </>
    )
}

export default Line;