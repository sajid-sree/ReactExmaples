import Layer2 from "./Layer2";

function Layer3(props){

    return(
        <div className="bg-success text-light p-3">
            <h1>This is layer 3 - {props.wname}</h1>
            <Layer2 wname={props.wname} />
        </div>
    )
}

export default Layer3;