import { useDispatch, useSelector } from 'react-redux';
import './LikeButton.css';
import * as likeActions from '../../store/like';
import { useState } from 'react';
import { useEffect } from 'react';

//comment

const LikeButton = ({eventId}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const likes = useSelector(state => state.likes)
    const correctLike = Object.values(likes).find(like => like.eventId === eventId)
    let liked = correctLike ? true : false
    

    const handleLike = (e) => {
        e.preventDefault()
        dispatch(likeActions.createLike({
            eventId, 
            likerId: sessionUser.id
        }))
    }
    
    let buttonDisplay = liked ? (
        <div id='button-liked-container' onClick={() => dispatch(likeActions.deleteLike(correctLike.id))}>
            LIKED
        </div>
    ) : (
        <div id='button-not-liked-container' onClick={handleLike}>
            <span className="material-symbols-rounded" id='like-icon-button'>favorite</span>
        </div>
    )
    return buttonDisplay
}

export default LikeButton;
