import React from 'react';
import Xarrow, {useXarrow, Xwrapper} from 'react-xarrows';
import ListOfActivities from './ListOfActivities.js';

const CreateGraph = (props) => {
    return (
        <Xwrapper>
            {/* creating a proper list of activity components */}
            <ListOfActivities actList={props.actList} actToNodeID={props.actToNodeID}/>
        </Xwrapper>
    );
}

export default CreateGraph