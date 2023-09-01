import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTips, getTipById } from '../../store/tips'
import UpdateTipsModal from '../TipsUpdateModal';

function UpdateTip({tipId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [tipToDelete, setTipToDelete] = useState(null)
    const dispatch = useDispatch()

    const handleOpenDeleteModal = (tip) => {
        setTipToDelete(tip);
        setShowDeleteModal(true)
    }

    const handleCloseUpdateModal = () => {
        setShowDeleteModal(false);
        setTipToDelete(null)
    }

    return (
        <>
            {showDeleteModal && (
                <UpdateTipsModal
                    onClose={handleCloseUpdateModal}
                    // onSubmit={handleDeleteTip}
                />
            )}
        </>
    );
}

export default UpdateTip
