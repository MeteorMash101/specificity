import classes from './MiniButton.module.css'
const MiniButton = (props) => {
    let btnStyle = classes.editBtn // default assign
    if (props.label == "Remove") {
        btnStyle = classes.removeBtn
    }
    console.log(props.actID)
    return (
        <button className={btnStyle}>
            {props.label}
        </button>
    );
};

export default MiniButton;