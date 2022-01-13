import Draggable from 'react-draggable';
import { useXarrow } from 'react-xarrows';
import classes from './ActivityGC.module.css'

// const boxStyle = {border: 'grey solid 2px', borderRadius: '10px', padding: '5px', width: '10%', background: "aquamarine", borderstyle: "solid" };
// draggable is for allowing the boxes to be dragged.
// arrows are for connecting activities w/ arrows.
const ActivityGC = (props) => {
    const updateXarrow = useXarrow();
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div id={props.id} className={classes.actGC}>
                {props.name}
            </div>
        </Draggable>
    );
};

export default ActivityGC;