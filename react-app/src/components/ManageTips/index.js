import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom"
import DeleteTipsModal from '../TipsDeleteModal';
import DeleteTip from '../Tips/DeleteTips';
import UpdateTipsModal from "../TipsUpdateModal";
import UpdateTip from "../Tips/UpdateTips";
import { getUserTips } from "../../store/tips";
import "./ManageTips.css"

const ManageTips = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [selectedTip, setSelectedTip] = useState(null);
    const [modalType, setModalType] = useState(null);
    const user = useSelector(state => state.session.user)

    const sessionUser = useSelector(state => state.session.user)
    // console.log('sessionuser=======>', sessionUser)
    const userId = sessionUser.id
    const user_tips = Object.values(useSelector(state => state.tips.allTips))

    useEffect(() => {
        dispatch(getUserTips())
        // console.log('What is the userId====>', userId)
    }, [dispatch, userId])

    const handleDeleteClick = async (tip) => {
        setSelectedTip(tip)
        setModalType("delete");
        setShowModal(true)
        // console.log('Is deleteClick being triggered==========>', tip)
        await dispatch(getUserTips())
    }

    const handleUpdateClick = async (tip) => {
        setSelectedTip(tip)
        setModalType("update");
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

            <div className="individual-tips-container">
            {user_tips?.map(tip => (
                <div key={tip.id} className="user-tips-individual">
                    <div className="single-tip-header">
                        <h2 className="single-tip-title">{tip.title}</h2>
                        <h3 className="single-tip-weather-category">{tip.weather_category}</h3>
                    </div>
                    <div className="single-tip-body">
                        <p>{tip.body}</p>
                    </div>
                    <div>
                        <button className="tip-update-button" onClick={() => {
                            return handleUpdateClick(tip)
                        }}>Update Tip</button>
                        <UpdateTip tipId={tip.id} />
                        
                        <button className="tip-delete-button" onClick={() => {
                            return handleDeleteClick(tip)
                        }}>Delete Tip</button>
                        <DeleteTip tipId={tip.id} />
                    </div>
                </div>
            ))}
            {showModal && modalType === "delete" && (
                <DeleteTipsModal
                    tipId={selectedTip.id}
                    onSubmit={() => {
                        setShowModal(false);
                        setSelectedTip(null);
                        setModalType(null);
                    }}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedTip(null);
                        setModalType(null);
                    }}
                />
            )}

            {showModal && modalType === "update" && (
                <UpdateTipsModal
                    tipData={selectedTip}
                    tipId={selectedTip.id}
                    onSubmit={() => {
                        setShowModal(false);
                        setSelectedTip(null);
                        setModalType(null);
                    }}
                    onClose={() => {
                        setShowModal(false);
                        setSelectedTip(null);
                        setModalType(null);
                    }}
                />
            )}
        </div>
        </>
    );
}

export default ManageTips;
