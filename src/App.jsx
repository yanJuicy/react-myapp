import {useContext} from "react";
import {Card} from "./components/Card";
import {AdminFlagContext} from "./components/providers/AdminFlagProvider";

export const App = () => {

    const [isAdmin, setIsAdmin] = useContext(AdminFlagContext);

    const onClickSwitch = () => setIsAdmin(!isAdmin);

    return (
        <div>
            {isAdmin ? <span>관리자입니다</span> : <span>관리자가 아닙니다</span>}
            <button onClick={onClickSwitch}>전환</button>
            <Card isAdmin={isAdmin}/>
        </div>
    );

};