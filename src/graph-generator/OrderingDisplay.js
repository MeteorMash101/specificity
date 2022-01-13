import CreateGraph from './CreateGraph.js';

const OrderingDisplay = (props) => {
    return (
        <CreateGraph actList={props.actList} actToNodeID={props.actToNodeID}/>
    );
};

export default OrderingDisplay;