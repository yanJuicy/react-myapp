import {useFetchUsers} from "./hooks/useFetchUsers";
import {useState} from "react";

export const App = () => {

    const {userList, isLoading, isError, onClickFetchUser} = useFetchUsers();

    return (
        <div>
            <button onClick={onClickFetchUser}>사용자 정보 얻기</button>
            {isError && <p style={{color: "red"}}>에러가 발생했습니다</p>}
            {isLoading ? (
                <p>데이터를 가져오고 있습니다</p>
            ) : (
                userList.map(user => (
                    <p>{`${user.id}: ${user.name}(${user.age} 세)`}</p>
                ))
            )}
        </div>
    );
};