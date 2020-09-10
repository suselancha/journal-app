import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://img.huffingtonpost.com/asset/5c8baaf52400004205a4eb08.jpeg?ops=scalefit_630_noupscale)'
                }}
            >
            </div>
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>

                <p className="journal__entry-content">
                    Nulla minim ea culpa fugiat culpa culpa duis quis nulla do. Sint non quis id magna officia occaecat amet commodo proident labore laborum. Commodo aliquip minim duis nulla elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Lunes</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
