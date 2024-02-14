import { useDispatch, useSelector } from 'react-redux';
import { getCardDetails } from '../applications/selectors/getCardDetails';
import { getUserDetail } from '../../user/applications/selectors/getUserDetail';
import { startGame } from '../applications/actions/game';
import { flipCard } from '../applications/actions/getCard';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const usePlayGround = () => {
    const dispatch = useDispatch();
    const cardDetails = useSelector(getCardDetails);
    const user = useSelector(getUserDetail);

    const getStarted = () => {
        dispatch(startGame())
    }

    const handleFlipCard = () => {
        dispatch(flipCard(user))
    }

    const navigate = useNavigate();
    useEffect(() => {
        if (user.userName === '') {
            navigate('/')
        }
    })
    return {handleFlipCard ,cardDetails,getStarted};
}

export default usePlayGround