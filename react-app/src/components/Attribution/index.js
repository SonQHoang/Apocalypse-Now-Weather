import React from 'react'
import './Attribution.css'
import iconAttributions from "./Resource-Attributions"

function Attribution() {

    return (
        <div className="attributions-outer-container">
            <div className="attributions-header-container">
                <div className="attributions-header">
                    <h1>Attributions</h1>
                </div>
            </div>
            <div className="thank-you-line">
                <h2>We would like to credit and give a big thank you to the creators of the following resources </h2>
            </div>
            <div className="thank-you-container">
                {Object.keys(iconAttributions).map(key => {
                    const attribution = iconAttributions[key];
                    // console.log('attribution============>', attribution)
                    return (
                        <ul key={key}>
                            <div className="attribution-list-container">
                                <div className="attributions-list">
                                    <a href={attribution.url}
                                        title={attribution.title}
                                        creator={attribution.creator}
                                        className="attribution-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <h3 className="attribution-creator"> Creator: {attribution.creator}</h3>
                                    </a>
                                </div>
                                <div className="attribution-details">
                                    <p className="attribution-title"> Resource: {attribution.title}</p>
                                    <p className="attribution-link">{attribution.url}</p>
                                </div>
                            </div>

                        </ul>
                    )
                }
                )}
            </div>
        </div>
    )
}
export default Attribution