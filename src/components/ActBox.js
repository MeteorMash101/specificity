import { Fragment } from 'react';
import classes from './ActBox.module.css'
import MiniNavbar from './MiniNavbar.js'
import MiniParagraph from './MiniParagraph.js'
import MiniFooter from './MiniFooter.js'

const ActBox = (props) => {
    console.log("KEY", props.key)
    return (
        <div className={classes.actBox}>
            <h1 className={classes.actName}>{props.name}</h1>
            <MiniNavbar isGoal={props.isGoal}/>
            <MiniParagraph desc={props.description}/>
            <MiniFooter pCount={props.pCount} dCount={props.dCount}/>
        </div>
    );
};

export default ActBox;