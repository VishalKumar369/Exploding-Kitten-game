import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserFormLogo from '../../../assets/logo/userFormLogo.webp';
import './UserForm.css'
import GreenBtn from '../../../shared/components/green-btn/GreenBtn';
import { useDispatch } from 'react-redux';
import { setUserName } from '../applications/actions/setUserName';
import { startGame } from '../../play-ground/applications/actions/game';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the username is not empty
    if (username.trim() !== '') {
      dispatch(setUserName(username,0,0));
      dispatch(startGame())
      navigate('/play');

    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div className='user-form'>
      <img src={UserFormLogo} alt="" />
      <form>
        <div className='form-body'>
          <label htmlFor="username">Enter UserName</label>
          <input
            type="text"
            id="username"
            placeholder='User Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
          {/* <button type="submit">Submit</button> */}
          <div className="user-name-submit-btn" onClick={handleSubmit}>
            <GreenBtn btnName = "Submit"/>
          </div>
      </form>
    </div>
  );
};

export default UserForm;
