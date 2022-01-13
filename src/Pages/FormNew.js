import Header from '../components/Header';
import Message from '../components/Message';
import ActivityForm from '../components/ActivityForm';

const FormNew = (props) => {
  return (
    <div>
			<Header/>
			<Message text="Add an activity..."/>
			<ActivityForm onClickExit={props.onClickExit} onAddAct={props.onAddAct} actList={props.actList}/>
    </div>
  );
}

export default FormNew;