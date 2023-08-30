import React, { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteTipsModal from '../TipsDeleteModal';
import DeleteTip from '../../components/Tips/DeleteTips';
import { getUserTips } from "../../store/tips";

const ManageTips = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const [selectedTip, setSelectedTip] = useState(null);

    const sessionUser = useSelector(state => state.session.user)
    const userId = sessionUser.id
    const user_tips = useSelector(state => state.tips.allTips)
    console.log('======================== Currently Empty user_tips', user_tips)

    const tipsToMap = Object.values(user_tips)
    console.log('What does tipsToMap look like====>', tipsToMap)
    
    useEffect(() => {
        dispatch(getUserTips(userId))
        // console.log('What is the userId====>', userId)
    },[dispatch, userId])

    const handleDeleteClick = (tip) => {
        setSelectedTip(tip);
        setShowModal(true);
    }

    return (
        <>
            <h1>Manage Your Tips</h1>
        
            {tipsToMap?.map(tip => (
                <div key={tip.id}>
                    <button onClick={() => handleDeleteClick(tip)}>Delete Tip</button>
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
