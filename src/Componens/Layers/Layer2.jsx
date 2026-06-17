

import Layer1 from "./Layer1";

function Layer2(props){

    return(
        <div className="bg-danger p-2">
            <h1>This is layer 2 - {props.wname}</h1>
            <Layer1 wname={props.wname} />
        </div>
    )
}

export default Layer2;