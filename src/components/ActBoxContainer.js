import classes from './ActBoxContainer.module.css'
const ActBoxContainer = (props) => {
    return (
        <div className={classes.actBoxContainer}>
            {props.children}
        </div>
    );
};

export default ActBoxContainer;