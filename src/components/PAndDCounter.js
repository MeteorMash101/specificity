import classes from './PAndDCounter.module.css'

const PAndDCounter = (props) => {
    return (
        <div className={classes.pAndDContainer}>
            <p className={classes.pContent}>Prereqs #: {props.pCount}</p>
            <p className={classes.pContent}>Dependencies #: {props.dCount}</p>
        </div>
    );
};

export default PAndDCounter;