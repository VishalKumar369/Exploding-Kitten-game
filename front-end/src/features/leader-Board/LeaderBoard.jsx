import React from 'react';
import './LeaderBoard.css'
import useUsers from './hooks/useUsers';

const LeaderBoard = () => {
  const {sortedUsers,calculateRank,users} = useUsers();

  return (
    <div className='leader-board'>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Wins</th>
            <th>Looses</th>
          </tr>
        </thead>
        {
          users && users.length>0 ? 
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr key={index}>
              <th>{calculateRank(user)}</th>
              <td>{user.userName}</td>
              <td>{user.win}</td>
              <td>{user.loose}</td>
            </tr>
          ))}
        </tbody>
          :<></>
        }
      </table>
    </div>
  );
};

export default LeaderBoard;
