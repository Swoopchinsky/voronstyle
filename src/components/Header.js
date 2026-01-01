import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    let [menuBut1, setMenuBut1] = useState(false)
    let [menuBut2, setMenuBut2] = useState(false)
    let [menuBut3, setMenuBut3] = useState(false)

    let [menuBut4, setMenuBut4] = useState(false)
    let [menuBut5, setMenuBut5] = useState(false)
    let [menuBut6, setMenuBut6] = useState(false)

    return (
        <header>
            <div>
                <span className='foto'>voronstyle</span>

                <header className='header'>
                    <button className='menu-button' onClick={() => setOpen(!isOpen)}>


                    </button>
                    <nav className={`menu ${isOpen ? "active" : ""}`}>
                        <ul className='menu__list'>
                            <li>
                                <button onClick={() => setMenuBut1(menuBut1 = !menuBut1)} className={`mb1 ${menuBut1 && 'active'}`}>Web Atcard</button>
                                {menuBut1 && (
                                    <div className='mbut1'>
                                        <p>Вэб Аткрытки</p>
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut2(menuBut2 = !menuBut2)} className={`mb2 ${menuBut2 && 'active'}`} >Foto & Designs</button>
                                {menuBut2 && (
                                    <div className='mbut2'>
                                        <p>Фото и Дизайн</p>
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut3(menuBut3 = !menuBut3)} className={`mb3 ${menuBut3 && 'active'}`} >UX & UI</button>
                                {menuBut3 && (
                                    <div className='mbut3'>
                                        <p>User Experience Designer & User Interface</p>
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut4(menuBut4 = !menuBut4)} className={`mb4 ${menuBut4 && 'active'}`} >Drawings</button>
                                {menuBut4 && (
                                    <div className='mbut4'>
                                        <p>Рисунки</p>
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut5(menuBut5 = !menuBut5)} className={`mb5 ${menuBut5 && 'active'}`} >Directions Promising</button>
                                {menuBut5 && (
                                    <div className='mbut5'>
                                        <p>smart contract audit. NFT. Solidity </p>
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut6(menuBut6 = !menuBut6)} className={`mb6 ${menuBut6 && 'active'}`} >about the project</button>
                                {menuBut6 && (
                                    <div className='mbut6'>
                                        <p>Igarjanch 8 921 593 63 24 SPb Карта Сбер привязана к номеру. Шлите Деньги на Удачу.</p>
                                    </div>
                                )}
                            </li>
                            shalom
                        </ul>
                    </nav>
                </header>
            </div>
            <div className='fon'></div>
        </header>
    )
}
