import classes from './Button.module.css';
// (TEMP) using same style for all buttons...

const Button = (props) => {
  let selectedCSS = classes.startBtn // by default...
  if (props.buttonName == "Submit Goal") {
    selectedCSS = classes.submitGoalBtn
  }
  // temp!
  if (props.buttonName != "Start") {
    selectedCSS = classes.otherBtn
  }
  return (
    <div style={{margin: "auto"}}>
        <button className={selectedCSS} onClick={props.onClick}>{props.buttonName}</button>
    </div>
  );
}

export default Button;