import classes from './MiniNavbar.module.css'
import MiniButton from './MiniButton';

const MiniNavbar = (props) => {
    return (
        <div className={classes.miniNavbar}>
            <MiniButton label="Edit"/>
            <MiniButton label="Remove"/>
            {props.isGoal && <div className={classes.mainGoal}>*Main Goal*</div>}
        </div>
    );
};
export default MiniNavbar;