import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='foto'>voronstyle</span>

                <header className='header'>
                    <button className='menu-button' onClick={() => setOpen(!isOpen)}>


                    </button>
                    <nav className={`menu ${isOpen ? "active" : ""}`}>
                        <ul className='menu__list'>
                            <li className='menu__list'>web atcard</li>
                            <li className='menu__list'>foto & designs</li>
                            <li className='menu__list'>UX & UI</li>
                            <li className='menu__list'>drawings</li>
                            <li className='menu__list'>directions promising</li>
                            <li className='menu__list'>exit</li>

                        </ul>
                    </nav>
                </header>
            </div>
            <div className='fon'></div>
        </header>
    )
}
