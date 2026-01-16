import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setOpen] = useState(false);

    let [menuBut1, setMenuBut1] = useState(false)
    let [menuBut2, setMenuBut2] = useState(false)
    let [menuBut3, setMenuBut3] = useState(false)

    let [menuBut4, setMenuBut4] = useState(false)
    let [menuBut5, setMenuBut5] = useState(false)
    let [menuBut6, setMenuBut6] = useState(false)

    let [btst1, setBtSt1] = useState(false)
    const toggleModal = () => {
        setBtSt1(!btst1);
    }

    let [btnst2, setBtnSt2] = useState(false)
    const closest2 = () => {
        setBtnSt2(!btnst2)
    }

    let [btnst3, setBtnSt3] = useState(false)
    const closest3 = () => {
        setBtnSt3(!btnst3)
    }

    let [btnst4, setBtnSt4] = useState(false)
    const closest4 = () => {
        setBtnSt4(!btnst4)
    }

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
                                <button onClick={() => setMenuBut1(menuBut1 = !menuBut1)} className={`mb1 ${menuBut1 && 'active'}`}>Article card</button>
                                {menuBut1 && (

                                    <div className='pole1'>
                                        <button onClick={() => setBtSt1(btst1 = !btst1)} className={`pole1b1 ${btst1 && 'active'}`}>Article card</button> <br />
                                        {btst1 && (
                                            <div className='st1'>
                                                <p className='st1zgl'>Article card</p>
                                                <button onClick={toggleModal} className='btnst1-close'>close</button>

                                                <div className='contentst1'>Оставь свой информационный след. <br />
                                                    Какая Твоя Супер Сила? <br />
                                                    Безграничные возможности Современных Технологий
                                                    позваляют безпрепятственно взаимодействовать и создавать не бывалые ранее
                                                    структуры архитектурных моделий обработки информации. Изучение и создание простейших
                                                    Вэб приложений, Индивидуальный Стиль, Оформление Юзер Интерфейсов  и реализация элементарных Функций.
                                                    Неоспаримое Превосходство Модульных подходов Разработки, Тестирование в реальном времени и Поиск Оптимальнейшего Решения.
                                                    Кодь Всегда
                                                </div>
                                            </div>
                                        )}
                                        <button onClick={() => setBtnSt2(btnst2 = !btnst2)} className={`pole1b2 ${btnst2 && 'active'}`}>Hello Web</button> <br />
                                        {btnst2 && (
                                            <div className='st2'>
                                                <p className='st2zgl'>Hello Web</p>
                                                <button onClick={closest2} className='btnst2-close'>close</button>

                                                <div className='contentst2'>Камуникация вне социальных сетей <br />
                                                    Увлекательный и разнообразный процесс развития Web индудустрии неумольмо быстро
                                                    ведет нас в направление обсолютно новой реальности. При таких условиях игнорировать
                                                    изучение языков програмирования становится новозможным. Hello Web предлагает максимально
                                                    не сложный курс освоения элементарных дисциплин. <br />
                                                    Установить Visual Studio Code
                                                    Пакетный менеджер Pip для Python. pip install,
                                                    Библиотека PyGame продемонтрирует основы ООП. Библиотека Matplotlib и Pandas. <br />
                                                    npm JavaScript Bable.JS React.JS GitHub Pages
                                                </div>

                                            </div>
                                        )}


                                        <button onClick={() => setBtnSt3(btnst3 = !btnst3)} className={`pole1b3 ${btnst3 && 'active'}`}>optimal choice</button> <br />
                                        {btnst3 && (
                                            <div className='st3'>
                                                <p className='st3zgl'>optimal choice</p>
                                                <button onClick={closest3} className='btnst3-close'>close</button>

                                                <div className='contentst3'>JSX JavaScript XML - это расширение синтаксиса JavaScrpt<br />
                                                    Которое позволяет писать HTML-подобную разметку рямо внутри JS-файлов, смешивая логики и структуры UI в одном месте.
                                                    JSX язык шаблонов, наделенной силой JavaScript. React исходит из ринципа, что логика рендеринга непрерывно связана с прочей логикой
                                                    UI: оброботка событий, изменение состояний во времени, подготовка данных к отображению.

                                                    React разделяет ответственность с помощью слабо связанных единиц, называемых Компоненты<br />
                                                    При использовании TypeScript фаилы имеют расширение .tsx
                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnSt4(btnst4 = !btnst4)} className={`pole1b4 ${btnst4 && 'active'}`}>nodes API</button> <br />
                                        {btnst4 && (
                                            <div className='st4'>
                                                <p className='st4zgl'>Application Programminng Interface</p>
                                                <button onClick={closest4} className='btnst4-close'>close</button>

                                                <div className='contentst4'>Правил и Протоколов, который позволяет разным программным приложениям обмениваться данными и взаимодействовать,
                                                    API - контракт, который предоставляет программа.
                                                    Application programming interface - интерфейс программирования приложения. Описание способов взаимодействия
                                                    компютерных программ. Применяются встроенные fetch или библиотеки Axios.<br />
                                                    React-компоненты управляют состоянием и жизненным циклом при взаимодействии с API, используя хуки
                                                    (useEffec, useState) или методы (componentDidMount) для выполнения запросов и рендеринга данных.
                                                    <br />

                                                </div>

                                            </div>
                                        )}
                                    </div>

                                )}
                            </li>
                            <li><button onClick={() => setMenuBut2(menuBut2 = !menuBut2)} className={`mb2 ${menuBut2 && 'active'}`} >Foto Designs</button>
                                {menuBut2 && (
                                    <div className='pole2'>
                                        <button className='pole2b1'>Интерьеры</button> <br />
                                        <button className='pole2b2'>Мастерская Живописи</button> <br />
                                        <button className='pole2b3'>Союз Жудожников СПб</button> <br />
                                        <button className='pole2b4'>Фото от Vornstyle</button> <br />

                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut3(menuBut3 = !menuBut3)} className={`mb3 ${menuBut3 && 'active'}`} >UX & UI</button>
                                {menuBut3 && (
                                    <div className='pole3'>
                                        <button className='pole3b2'>User Interface</button> <br />
                                        <button className='pole3b1'>User Experience Designer</button> <br />
                                        <button className='pole3b3'>button </button> <br />
                                        <button className='pole3b4'>gradient </button> <br />
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut4(menuBut4 = !menuBut4)} className={`mb4 ${menuBut4 && 'active'}`} >drawings</button>
                                {menuBut4 && (
                                    <div className='pole4'>
                                        <button className='pole4b1'>Graffiti</button> <br />
                                        <button className='pole4b2'>Oil</button> <br />
                                        <button className='pole4b3'>Sketch</button>
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut5(menuBut5 = !menuBut5)} className={`mb5 ${menuBut5 && 'active'}`} >priority</button>
                                {menuBut5 && (
                                    <div className='pole5'>
                                        <button className='pole5b1'>smart contract</button> <br />
                                        <button className='pole5b2'>Solidity</button> <br />
                                        <button className='pole5b3'>Web3</button> <br />
                                        <button className='pole5b4'>NFT cart</button> <br />
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut6(menuBut6 = !menuBut6)} className={`mb6 ${menuBut6 && 'active'}`} >about the project</button>
                                {menuBut6 && (
                                    <div className='pole6'>
                                        <button className='pole6b1'>React</button> <br />
                                        <button className='pole6b2'>GitHub</button> <br />
                                        <button className='pole6b3'>JavaScript</button> <br />
                                        <button className='pole6b4'>Author</button> <br />

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
