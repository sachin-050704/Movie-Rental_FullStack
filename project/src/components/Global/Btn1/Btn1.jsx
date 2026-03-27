import classes from '../Btn1/Btn1.module.css'





const Btn1 = (props) => {
    return (
        <>
            <div style={props.style} className={`${classes.btn1}`}>
                <button>{props.name}</button>
                <span>{props.icon}</span>
            </div></>
    )
}

export default Btn1;