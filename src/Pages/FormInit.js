import Header from '../components/Header';
import Message from '../components/Message';
import GoalForm from '../components/GoalForm'

function FormInit(props) {
  return (
    <div>
        <Header/>
        <Message text="What is your main goal?"/>
        <GoalForm onAddGoal={props.onAddGoal}/>
        {/* <div><Next/><Exit/></div> */}
    </div>
  );
}

export default FormInit;