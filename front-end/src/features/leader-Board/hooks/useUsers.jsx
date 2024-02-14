// import { useEffect, useState } from "react";
// import userServices from "../../../shared/services/userService";

const useUsers = () => {
    const users = JSON.parse(localStorage.getItem('leaderBoard'))
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try{
    //         const response = await userServices.getAll();
    //         const orderedUsers = response.data
    //         setUsers(orderedUsers);
    //       } catch (error) {
    //         console.error('Error fetching user data:', error);
    //       }
    //     };
    //     fetchData();
    //   }, []); 
    

    const calculateRank = (user) => {
        const sortedUsers = users.slice().sort((a, b) => b.wins - a.wins);
        return sortedUsers.findIndex((u) => u.username === user.username) + 1;
    };

    const sortedUsers = users && users.slice().sort((a, b) => calculateRank(a) - calculateRank(b));

    return {sortedUsers,calculateRank,users}
}

export default useUsers;