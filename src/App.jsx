import {useState, memo, useCallback} from "react";
import {Card} from "./components/Card";

export const App = memo(() => {

    const [isAdmin, setIsAdmin] = useState(false);

    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
            {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
            <button onClick={onClickSwitch}>전환</button>
            <Card isAdmin={isAdmin} />
        </div>
    );

});