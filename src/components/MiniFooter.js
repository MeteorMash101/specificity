import classes from './MiniFooter.module.css'
import PAndDCounter from './PAndDCounter.js'
import AddDepButton from './AddDepButton.js'

const MiniFooter = (props) => {
    return (
        <div className={classes.miniFooter}>
            <PAndDCounter pCount={props.pCount} dCount={props.dCount}/>
            <AddDepButton/>
        </div>
    );
};

export default MiniFooter;