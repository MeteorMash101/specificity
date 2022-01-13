import classes from './UtilBar.module.css'
const UtilBar = (props) => {
    return (
        <div className={classes.utilBar}>
            <h2>Activities List</h2>
            <h2>Sort By: Pre-reqs</h2>
        </div>
    );
};

export default UtilBar;