import classes from './MiniParagraph.module.css'
const MiniParagraph = (props) => {
    return (
        <p className={classes.miniParagraph}>
            {props.desc}
        </p>
    );
};

export default MiniParagraph;