import ReactDOM from "react-dom";

export const App = () => {

    const onClickButton = () => {
        alert();
    };

    const contentStyle = {
        color: "blue",
        fontsize: "20px"
    };

    return (
        <>
            <h1 style={{color: "red"}}>안녕하세요!</h1>
            <p style={contentStyle}>잘 지내시죠?</p>
            <button onClick={onClickButton}>버튼</button>
        </>
    )
        ;
};

ReactDOM.render(<App/>, document.getElementById("root"));
