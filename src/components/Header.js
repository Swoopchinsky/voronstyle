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

                                    <div className='pole1'>
                                        <button className='pole1b1'>Вэб Аткрытки</button> <br />
                                        <button className='pole1b2'>Hello Web</button> <br />
                                        <button className='pole1b3'>Web business card</button> <br />
                                        <button className='pole1b4'>communication format</button> <br />
                                    </div>

                                )}
                            </li>
                            <li><button onClick={() => setMenuBut2(menuBut2 = !menuBut2)} className={`mb2 ${menuBut2 && 'active'}`} >Foto & Designs</button>
                                {menuBut2 && (
                                    <div className='mbut2'>
                                        <button>Интерьеры</button> <br />
                                        <button>Мастерская Живописи</button> <br />
                                        <button>Союз Жудожников СПб</button> <br />
                                        <button>Фото от Vornstyle</button> <br />

                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut3(menuBut3 = !menuBut3)} className={`mb3 ${menuBut3 && 'active'}`} >UX & UI</button>
                                {menuBut3 && (
                                    <div className='mbut3'>
                                        <button>User Experience Designer</button> <br />
                                        <button>User Interface</button> <br />
                                        <button>button </button> <br />
                                        <button>gradient </button> <br />
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut4(menuBut4 = !menuBut4)} className={`mb4 ${menuBut4 && 'active'}`} >Drawings</button>
                                {menuBut4 && (
                                    <div className='mbut4'>
                                        <button>Graffiti</button> <br />
                                        <button>Oil</button> <br />
                                        <button>Sketch</button>
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut5(menuBut5 = !menuBut5)} className={`mb5 ${menuBut5 && 'active'}`} >Directions Promising</button>
                                {menuBut5 && (
                                    <div className='mbut5'>
                                        <button>audit smart contract</button> <br />
                                        <button>Solidity</button> <br />
                                        <button>Web3</button> <br />
                                        <button>NFT cart</button> <br />
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut6(menuBut6 = !menuBut6)} className={`mb6 ${menuBut6 && 'active'}`} >about the project</button>
                                {menuBut6 && (
                                    <div className='mbut6'>
                                        <button>React</button> <br />
                                        <button>GitHub</button> <br />
                                        <button>JavaScript</button> <br />
                                        <button>Author</button> <br />
                                        <p>Igarjanch 8 921 593 63 24 SPb Карта Сбер привязана к номеру. Шлите Деньги на Удачу.</p>
                                    </div>
                                )}
                            </li>

                        </ul>
                    </nav>
                </header>
            </div>
            <div className='fon'></div>
        </header>
    )
}
