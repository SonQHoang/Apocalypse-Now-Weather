import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import DeleteTipsModal from '../TipsDeleteModal';
import DeleteTip from '../Tips/DeleteTips';
import { getUserTips } from "../../store/tips";
import "./ManageTips.css"

const ManageTips = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [selectedTip, setSelectedTip] = useState(null);
    const user = useSelector(state => state.session.user)

    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    // const userName = sessionUser.username
    const user_tips = Object.values(useSelector(state => state.tips.allTips))
    // console.log('========================user-tips===>', user_tips)

    useEffect(() => {
        dispatch(getUserTips())
        // console.log('What is the userId====>', userId)
    }, [dispatch, userId])

    const handleDeleteClick = async (tip) => {
        setSelectedTip(tip)
        setShowModal(true)
        await dispatch(getUserTips())
    }

    return (
        <>
            <div className="manage-tips-container">
                <div className="manage-tips-header">
                    <h1>Manage Your Tips</h1>
                    {user !== null ? (
                        <NavLink exact to='/tips/new'>
                            <button className="create-new-tip-button">Create a New Tip</button>
                        </NavLink>
                    ) : null}
                </div>
            </div>


            {user_tips?.map(tip => (
                <div key={tip.id} className="user-tips-individual">
                    <div className="single-tip-header">
                        <h2 className="single-tip-title">{tip.title}</h2>
                        <h3 className="single-tip-weather-category">{tip.weather_category}</h3>
                    </div>
                    <div className="single-tip-body">
                        <p>{tip.body}</p>
                    </div>
                        <button className="tip-delete-button" onClick={() => {
                            return handleDeleteClick(tip)
                        }}>Delete Tip</button>
                    <DeleteTip tipId={tip.id} />
                </div>
            ))}
            {showModal && (
                <DeleteTipsModal
                    tipId={selectedTip.id}
                    onSubmit={() => {
                        setShowModal(false);
                        setSelectedTip(null);
                    }}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedTip(null);
                    }}
                />
            )}
        </>
    );
}

export default ManageTips;
