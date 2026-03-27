import classes from '../Btn2/Btn2.module.css'





const Btn2 = (props) => {
    return (
        <>
            <div style={props.style} className={`${classes.btn1}`} onClick={props.onClick}>
                <button>{props.name}</button>
                <span>{props.icon}</span>
            </div>
        </>
    )
}

export default Btn2;