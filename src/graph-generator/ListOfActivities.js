import { Fragment } from 'react';
import ActivityGC from './ActivityGC.js';
import AssignArrows from './AssignArrows.js';

// // DEPRECIATED (WAS FOR TESTING)
// const DUMMY_ACTIVITIES = [
//   {
//     id: 'Node_1',
//     name: 'Activity 1',
//     description: 'Finest fish and veggies',
//     prerequisites: [],
//     dependencies: ['Node_2']
//   },
//   {
//     id: 'Node_2',
//     name: 'Activity 2',
//     description: 'A german specialty!',
//     prerequisites: ['Node_1'],
//     dependencies: ['Node_3']
//   },
//   {
//     id: 'Node_3',
//     name: 'Activity 3',
//     description: 'American, raw, meaty',
//     prerequisites: ['Node_2'],
//     dependencies: ['Node_4', 'Node_5']
//   },
//   {
//     id: 'Node_4',
//     name: 'Activity 4',
//     description: 'Description',
//     prerequisites: ['Node_3'],
//     dependencies: ['Node_6']
//   },
//   {
//     id: 'Node_5',
//     name: 'Activity 5',
//     description: 'Description',
//     prerequisites: ['Node_3'],
//     dependencies: ['Node_6']
//   },
//   {
//     id: 'Node_6',
//     name: 'Activity 6',
//     description: 'Description',
//     prerequisites: ['Node_4', 'Node_5'],
//     dependencies: []
//   }
// ];

const ListOfActivities = (props) => {
  const activities = props.actList.map((act) => (
    {
      id: act.keyID,
      name: act.name,
      description: act.description,
      prerequisites: act.prerequisites.map((prereq) => (
        props.actToNodeID.get(prereq)
      )),
      dependencies: act.dependencies.map((dep) => (
        props.actToNodeID.get(dep)
      ))
    }
  ))
  const activityComponents = activities.map((act) => (
    // activity "Graph Component" representation...
    <ActivityGC
    key={act.id}
    id={act.id}
    name={act.name}
    description={act.description}
    prerequisites={act.prerequisites}
    dependencies={act.dependencies}
    />
  ));
  const arrowAssignments = [];
  for (let i = 0; i < activities.length; i++) {
    // connecting act -> its dependencies...
    for (let j = 0; j < activities[i].dependencies.length; j++) {
      arrowAssignments.push(
        <AssignArrows
          start={activities[i].id}
          end={activities[i].dependencies[j]}
        />
      )
    }
    // connecting act's prereqs -> act...
    for (let j = 0; j < activities[i].prerequisites.length; j++) {
      arrowAssignments.push(
        <AssignArrows
          start={activities[i].prerequisites[j]}
          end={activities[i].id}
        />
      )
    }
  }
  return (
    <Fragment>
      <ul>{activityComponents}</ul>
      <ul>{arrowAssignments}</ul>
    </Fragment>
  );
};

export default ListOfActivities;