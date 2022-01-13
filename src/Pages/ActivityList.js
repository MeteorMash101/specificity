import { Fragment } from 'react';
import Header from "../components/Header";
import UtilBar from "../components/UtilBar";
import ActBox from "../components/ActBox";
import ActBoxContainer from "../components/ActBoxContainer";
import Button from '../components/Button';
import classes from './ActivityList.module.css';

// {props.users.map((user) => (
//     <li key={user.id}>
//       {user.name} ({user.age} years old)
//     </li>
// ))}

const ActivityList = (props) => {
    return (
        <Fragment>
            <Header/>
            <UtilBar/>
            {
            props.actList.length > 0 &&
            <ActBoxContainer>
                {console.log("IN ACTLIST, curr actlist:", props.actList)}
                {props.actList.map((act) => (
                    <ActBox 
                    key={act.keyID}
                    isGoal={act.isGoal} 
                    name={act.name} 
                    description={act.description} 
                    pCount={act.prerequisites.length}
                    dCount={act.dependencies.length}
                    />
                ))}
                <ActBox actList={props.actList}/>
            </ActBoxContainer>
            }
			<div className={classes.options}>
				<Button buttonName="Add Activity" onClick={props.onClickAddAct}></Button>
				<Button buttonName="Generate Dependency Graph" onClick={props.onClickGenGraph}></Button>
			</div>
        </Fragment>
    );
};

export default ActivityList;