import {useState} from "react";

export const useFetchUsers = () => {
    const [userList, setUserList] = useState([{id: 1}]);

    const onClickFetchUser = () => alert('함수 실행');


    return {userList, onClickFetchUser};
}