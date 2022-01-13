import { useState } from 'react';
import Button from '../components/Button';
import classes from './ActivityForm.module.css';

/* EDIT: make sure no cycles...for p&d */
const ActivityForm = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredDescription, setEnteredDescription] = useState('')
    const [selectedPrerequisites, setSelectedPrerequisites] = useState([])
    const [selectedDependencies, setSelectedDependencies] = useState([])
    const addActHandler = (event) => {
        event.preventDefault();
        // EDIT: add error checking
        let actInfo = {
            // keyID, isGoal gets assigned in parent, rest will be from the user input.
            name: enteredName, 
            description: enteredDescription,
            prerequisites: selectedPrerequisites, 
            dependencies: selectedDependencies
        }
        // Uses parent's add act. method.
        props.onAddAct(actInfo);
        // clear inputs...
        setEnteredName('');
        setEnteredDescription('');
    }
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    const descriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const prereqChangeHandler = (selectedItems) => {
        const prereqs = [];
        for (let i = 0; i < selectedItems.length; i++) {
            prereqs.push(selectedItems[i].value);
        }
        console.log("PREREQs ENTERED:", prereqs);
        setSelectedPrerequisites(prereqs);
    };
    const depChangeHandler = (selectedItems) => {
        const deps = [];
        for (let i = 0; i < selectedItems.length; i++) {
            deps.push(selectedItems[i].value);
        }
        console.log("DEPs ENTERED:", deps);
        setSelectedDependencies(deps);
    };

    return (
        <form onSubmit={addActHandler} className={classes.actForm}>
            <div className={classes.inputs}>
                <label>Activity: </label>
                <input type="text" value={enteredName} onChange={nameChangeHandler} className={classes.input}/>
            </div>
            <div className={classes.inputs}>
                <label>Description:</label>
                <textarea className={classes.textArea} type="text" value={enteredDescription} onChange={descriptionChangeHandler}/>
            </div>
            <div className={classes.inputs}>
                <label>Prerequisites: </label>
                <select className={classes.selectors} multiple={true} value={selectedPrerequisites} onChange={ (e) => {prereqChangeHandler(e.target.selectedOptions)} }>
                {/* List out all the act name(s) as options...*/}
                {props.actList.map((act) => (
                    <option key={act.keyID} value={act.name}>{act.name}</option>
                ))}
                </select>
            </div>
            <div className={classes.inputs}>
                <label>Dependencies: </label>
                <select className={classes.selectors} multiple={true}  value={selectedDependencies} onChange={ (e) => {depChangeHandler(e.target.selectedOptions)} }>
                {props.actList.map((act) => (
                    <option key={act.keyID} value={act.name}>{act.name}</option>
                ))}
                </select>
            </div>
            <div className={classes.options}>
                <Button onClick={props.onClickExit} buttonName="Exit"></Button>
                <Button buttonName="Save"></Button>
            </div>
        </form>
    );
};

export default ActivityForm;