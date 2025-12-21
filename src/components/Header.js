import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='foto'>voronstyle</span>
                <header className='header'>
                    <button className='menu-button' onClick={() => setOpen(!isOpen)}></button>
                    <nav className={`menu ${isOpen ? "active" : ""}`}>
                        <ul className='menu__list'>
                            <li className='menu__list'>profile</li>
                            <li className='menu__list'>bonus</li>
                            <li className='menu__list'>notify</li>
                            <li className='menu__list'>location</li>
                            <li className='menu__list'>settion</li>
                            <li className='menu__list'>exit</li>

                        </ul>
                    </nav>
                </header>
            </div>
            <div className='fon'></div>
        </header>
    )
}
