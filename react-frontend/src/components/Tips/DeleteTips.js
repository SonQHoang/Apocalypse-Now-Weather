import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTips, getTipById } from '../../store/tips'
import DeleteTipsModal from '../TipsDeleteModal'


function DeleteTip({tipId}) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [tipToDelete, setTipToDelete] = useState(null)
    const dispatch = useDispatch()

    const handleOpenDeleteModal = (tip) => {
        setTipToDelete(tip);
        setShowDeleteModal(true)
    }

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
        setTipToDelete(null)
    }

    useEffect(() => {
        dispatch(getTipById(tipId))
    }, [dispatch, tipId])

    // const handleDeleteTip = () => {
    //     console.log('handleDeleteTip is called');
    //     if (tipToDelete) {
    //         dispatch(deleteTips(tipToDelete.id));
    //         setTipToDelete(null)
    //         handleCloseDeleteModal()
    //     }
    // }

    return (
        <>
            {showDeleteModal && (
                <DeleteTipsModal
                    onClose={handleCloseDeleteModal}
                    // onSubmit={handleDeleteTip}
                />
            )}
        </>
    );
}

export default DeleteTip