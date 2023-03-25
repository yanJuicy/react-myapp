import ReactDOM from "react-dom";
import {useState, useEffect} from "react";
import {ColoredMessage} from "./components/ColoredMessage";
import {CssModules} from "./components/CssMoudles";
import {StyledJsx} from "./components/StyledJsx";
import {StyledComponents} from "./components/StyledComponents";

export const App = () => {

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        alert();
        setNum(num + 1)
    };

    useEffect(() => {
        alert();
    }, [num]);

    return (
        <>
            <h1 style={{color: "red"}}>안녕하세요!</h1>
            <ColoredMessage color="blue">잘 지내시죠?</ColoredMessage>
            <ColoredMessage color="pink">잘 지냅니다!</ColoredMessage>
            <button onClick={onClickButton}>버튼</button>
            <p>{num}</p>
            <CssModules/>
            <StyledJsx/>
            <StyledComponents/>
        </>
    )
        ;
};

ReactDOM.render(<App/>, document.getElementById("root"));
