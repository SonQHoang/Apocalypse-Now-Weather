import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTip } from "../../store/tips";
import "./CreateNewTip.css"

const TipsAddForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [body, setBody] = useState("");
    const user = useSelector((state) => state.session.user);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleTipChange = (e) => {
        setBody(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTip = {
            title: title,
            weather_category: selectedCategory,
            body: body,
        };

        dispatch(createTip(newTip, user.id));

        // Reset form fields after submission
        setTitle("");
        setSelectedCategory("");
        setBody("");
    };

    return (
        <div className="create-new-tip-form-container">
            <form className="create-tip-form" onSubmit={handleSubmit}>
                <h2 className="create-new-tip-form-header">Create a New Tip</h2>

                <div className="tip-title-label-container">
                    <label className="tip-title-label">Title</label>
                </div>
                <div className="tip-title-input-container">
                    <input
                        placeholder="Title of your tip"
                        type="text"
                        value={title}
                        className="tip-title-input"
                        onChange={handleTitleChange}
                    />
                </div>
                <div className="tip-weather-category-container">
                    <label className="tip-weather-category-label">Weather Category</label>
                </div>
                <div className='tip-weather-cat-selector'>
                <select
                    id="weatherCategory"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    <option value="">Select the Weather Category</option>
                    <option value="Natural_Disasters">Natural Disasters</option>
                    <option value="Supernatural_Phenomena">Supernatural Phenomena</option>
                    <option value="Mystical_Elements">Mystical Elements</option>
                    <option value="Paranormal_Chaos">Paranormal Chaos</option>
                </select>
                </div>
                <div className="tip-input-label-container">
                    <label className="tip-input-label">Tip</label>
                </div>
                <div className="tip-body-input-container" >
                <textarea
                    value={body}
                    onChange={handleTipChange}
                    placeholder="Add your tip here!"
                    className="tip-body-input"
                />
                </div>
                <div className="tip-form-submit-container">
                    <button type="submit" className="submit-new-tip-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default TipsAddForm;
