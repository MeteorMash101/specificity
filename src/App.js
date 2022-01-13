import { Fragment, useState } from "react";
import OrderingDisplay from './graph-generator/OrderingDisplay.js';
import Main from './Pages/Main.js';
import FormInit from './Pages/FormInit.js'
import FormNew from './Pages/FormNew.js'
import ActivityList from "./Pages/ActivityList.js";

function App() {
  // [Activity schema]:
  // keyID: str Node_# (1-N, where 1 refers to the main goal)
  // isGoal: bool (only true for Node_1)
  // name: str
  // description: str
  // prerequisites: [str]
  // dependencies: [str] (Node_1 has no dependencies)
  const [actList, setActList] = useState([]);
  const [actCount, setActCount] = useState(1); // used for assigning IDs
  // (TEMP TESTING) reset these bool inits! [T, F, F, F] 
  const [showMain, setShowMain] = useState(true); 
  const [showGoalForm, setShowGoalForm] = useState(false); 
  const [showActList, setShowActList] = useState(false); 
  const [showNewActForm, setShowNewActForm] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  // Hashmap to find proper Node_ID corresponding to activity name. (Used in graph generation step)
  const [actToNodeID, setActToNodeID] = useState(new Map([]));
  const onClickStart = () => {
    setShowMain(false)
    setShowGoalForm(true)
  }
  const generateKey = (currActNum) => {
    return 'Node_' + currActNum.toString()
  }
  const onAddGoal = (goalInfo) => {
    console.log("act list (b4 update): ", actList)
    setActList((prevActList) => {
      setActCount(actCount + 1)
      setShowGoalForm(false)
      setShowActList(true)
      const actKey = generateKey(actCount);
      setActToNodeID(actToNodeID.set(goalInfo.name, actKey))
      return [
        {
          keyID: actKey,
          isGoal: true,
          ...goalInfo
        }
      ];
    });
    console.log("[UPDATED STATE]...new activity (goal): ", goalInfo)
  }
  const onClickAddAct = () => {
    setShowActList(false)
    setShowNewActForm(true)
  }
  const onAddAct = (actInfo) => {
    // EDIT: add err. checking to make sure no dup. act names - must be unique. (use HM)
    setActList((prevActList) => {
      console.log("act list (b4 update): ", actList)
      // ADD ERR CHECKING
      setActCount(actCount + 1)
      setShowNewActForm(false)
      setShowActList(true)
      const actKey = generateKey(actCount);
      setActToNodeID(actToNodeID.set(actInfo.name, actKey))
      return [
        ...prevActList,
        { 
          keyID: actKey, 
          isGoal: false, 
          ...actInfo
        },
      ];
    });
    console.log("[UPDATED STATE]...new activity: ", actInfo)
  }
  const onClickExit = () => {
    setShowNewActForm(false)
    setShowActList(true)
  }
  // EDIT: may use react-router for this;
  const onClickGenGraph = () => {
    setShowActList(false)
    setShowGraph(true)
  }
  // delete act, passed in unique ID.
  const deleteAct = (actID) => {
    console.log("ACT ID TO DELETE:", actID)
    setActList(actList.filter((act) => act.keyID !== actID))
    // dec. node_# count...
  }


  return (
    <Fragment>
      {showMain && <Main onClick={onClickStart}/>}
      {showGoalForm && <FormInit onAddGoal={onAddGoal}/>}
      {showActList && <ActivityList actList={actList} onDelete={deleteAct} onClickAddAct={onClickAddAct} onClickGenGraph={onClickGenGraph}/>}
      {showNewActForm && <FormNew onClickExit={onClickExit} onAddAct={onAddAct} actList={actList}/>}
      {showGraph && <OrderingDisplay actList={actList} actToNodeID={actToNodeID}/>}
    </Fragment>
  );
}

export default App;

// BOILERPLATE FOR REACT ROUTER, THERE MIGHT BE BETTER WAYS...: (UNCOMMENT)
// import React, { Fragment } from 'react';
// import { useState, useEffect } from 'react';

// // import './layout.css';

// import Shop1 from './shop1.jsx';
// import Shop2 from './shop2.jsx';
// import Shop3 from './shop3.jsx';
// import Shop4 from './shop4.jsx';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// function Layout() {
//   const [schoolName, setSchoolName] = useState('');
//   const [range, setRange] = useState(0);
//   const saveSchoolHandler = (enteredSchool) => {
//     setSchoolName(enteredSchool);
//   };
//   const saveRangeHandler = (enteredRange) => {
//     setRange(enteredRange);
//   };
//   // console.log("curr School (Parent):",schoolName);
//   // console.log("curr range (Parent):",range);
//   // Controlling page views with React Router & passing in handlers to children-
//   // -to modify the state variables that are passed around...
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           <Shop1 onSaveSchool={saveSchoolHandler}/>
//         </Route>
//         <Route path="/shop1">
//           <Shop1 onSaveSchool={saveSchoolHandler}/>
//         </Route>
//         <Route path="/shop2">
//           <Shop2 selectedSchool={schoolName}/>
//         </Route>
//         <Route path="/shop3">
//           <Shop3 onSaveRange={saveRangeHandler}/>
//         </Route>
//         <Route path="/shop4">
//           <Shop4 selectedSchool={schoolName} selectedRange={range}/>
//         </Route>
//       </Switch>
//     </Router>
//   )
// }
// export default Layout;