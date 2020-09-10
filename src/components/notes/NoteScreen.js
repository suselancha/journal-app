import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div  className="note__main-content"> 
            
            <NotesAppBar />

            <div className="note__content">
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="note__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happend today"
                    className="note__textarea"
                ></textarea>  

                <div className="note__image">
                    <img
                        src="https://images.ctfassets.net/hrltx12pl8hq/VZW7M82mrxByGHjvze4wu/216d9ff35b6980d850d108a50ae387bf/Carousel_01_FreeTrial.jpg?fit=fill&w=800&h=450"
                        alt="imagen"
                    />
                </div>    
                
            </div>

        </div>
    )
}
