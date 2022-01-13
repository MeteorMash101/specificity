import classes from './Message.module.css';

const Message = (props) => {
  return (
    <div className={classes.message}>
        <h2>{props.text}</h2>
    </div>
  );
}

export default Message;