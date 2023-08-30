import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteTipsModal from '../TipsDeleteModal';
import DeleteTip from '../../components/Tips/DeleteTips';
import { getUserTips } from "../../store/tips";
import "./ManageTips.css"

const ManageTips = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [selectedTip, setSelectedTip] = useState(null);

    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    // const userName = sessionUser.username
    const user_tips = Object.values(useSelector(state => state.tips.allTips))
    // console.log('========================user-tips===>', user_tips)

    // const tipsToMap = Object.values(user_tips)
    // console.log('What does tipsToMap look like====>', tipsToMap)

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
        <div className="manage-tips-container">
            <div className="manage-tips-header">
                <h1>Manage Your Tips</h1>
            </div>

            {user_tips?.map(tip => (
                <div key={tip.id} className="user-tips-individual">
                    <p className="manage-tip-title">{tip.title}</p>
                    <p>{tip.weather_category}</p>
                    <p>{tip.body}</p>
                    <div className="tip-delete-button">
                        <button onClick={() => {
                            return handleDeleteClick(tip)
                        }}>Delete Tip</button>
                    </div>
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
        </div>
    );
}

export default ManageTips;
