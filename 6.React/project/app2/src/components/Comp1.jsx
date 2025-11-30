import "./styles/style.scss"
function Comp1(props) {
    return (
        <div id="comp1">
            <h1>hello {props.name} your age is {props.age}</h1>
        
            <h1>This is Languages :</h1>
            <ul>
                <li>Htmk</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Node JS</li>
                <li>Mongodb</li>
                <li>React</li>
            </ul>
        </div>
    )
}

export { Comp1 }