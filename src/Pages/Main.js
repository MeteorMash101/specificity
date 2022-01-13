import { Fragment } from "react";
import Header from '../components/Header.js';
import Message from '../components/Message';
import classes from './Main.module.css';
import Button from "../components/Button.js";


const Main = (props) => {
  return (
    <div className={classes.main}>
        <Header/>
        <Message text="Achieve your goals by being specific."/>
        <Button onClick={props.onClick} buttonName="Start"/>
    </div>
  );
}

export default Main;