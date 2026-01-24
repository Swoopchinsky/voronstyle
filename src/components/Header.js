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

    let [btnst5, setBtnst5] = useState(false)
    const closest5 = () => {
        setBtnst5(!btnst5)
    }

    let [btnst6, setBtnst6] = useState(false)
    const closest6 = () => {
        setBtnst6(!btnst6)
    }

    let [btnst7, setBtnst7] = useState(false)
    const closest7 = () => {
        setBtnst7(!btnst7)
    }

    let [btnst8, setBtnst8] = useState(false)
    const closest8 = () => {
        setBtnst8(!btnst8)
    }

    let [btnst9, setBtnst9] = useState(false)
    const closest9 = () => {
        setBtnst9(!btnst9)
    }

    let [btnst10, setBtnst10] = useState(false)
    const closest10 = () => {
        setBtnst10(!btnst10)
    }

    let [btnst11, setBtnst11] = useState(false)
    const closest11 = () => {
        setBtnst11(!btnst11)
    }

    let [btnst12, setBtnst12] = useState(false)
    const closest12 = () => {
        setBtnst12(!btnst12)
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
                                                    позволяют беспрепятственно взаимодействовать и создавать не бывалые ранее
                                                    структуры архитектурных моделей обработки информации. Изучение и создание простейших
                                                    Вэб приложений, Индивидуальный Стиль, Оформление Юзер Интерфейсов  и реализация элементарных Функций.
                                                    Неоспоримое Превосходство Модульных подходов Разработки, Тестирование в реальном времени и Поиск Оптимальнейшего Решения.
                                                    Кодь Всегда
                                                </div>
                                            </div>
                                        )}
                                        <button onClick={() => setBtnSt2(btnst2 = !btnst2)} className={`pole1b2 ${btnst2 && 'active'}`}>Hello Web</button> <br />
                                        {btnst2 && (
                                            <div className='st2'>
                                                <p className='st2zgl'>Hello Web</p>
                                                <button onClick={closest2} className='btnst2-close'>close</button>

                                                <div className='contentst2'>Коммуникация вне социальных сетей <br />
                                                    Увлекательный и разнообразный процесс развития Web индудустрии неумолимо быстро
                                                    ведет нас в направление абсолютно новой реальности. При таких условиях игнорировать
                                                    изучение языков программирования становится невозможным. Hello Web предлагает максимально
                                                    не сложный курс освоения элементарных дисциплин. <br />
                                                    Установить Visual Studio Code
                                                    Пакетный менеджер Pip для Python. pip install,
                                                    Библиотека PyGame продемонстрирует основы ООП. Библиотека Matplotlib и Pandas. <br />
                                                    npm JavaScript Bable.JS React.JS GitHub Pages
                                                </div>

                                            </div>
                                        )}


                                        <button onClick={() => setBtnSt3(btnst3 = !btnst3)} className={`pole1b3 ${btnst3 && 'active'}`}>optimal choice</button> <br />
                                        {btnst3 && (
                                            <div className='st3'>
                                                <p className='st3zgl'>optimal choice</p>
                                                <button onClick={closest3} className='btnst3-close'>close</button>

                                                <div className='contentst3'>JSX JavaScript XML - это расширение синтаксиса JavaScript<br />
                                                    Которое позволяет писать HTML-подобную разметку прямо внутри JS-файлов, смешивая логики и структуры UI в одном месте.
                                                    JSX язык шаблонов, наделенной силой JavaScript. React исходит из принципа, что логика рендеринга непрерывно связана с прочей логикой
                                                    UI: обработка событий, изменение состояний во времени, подготовка данных к отображению.

                                                    React разделяет ответственность с помощью слабо связанных единиц, называемых Компонентами.
                                                    При использовании TypeScript файлы имеют расширение .tsx
                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnSt4(btnst4 = !btnst4)} className={`pole1b4 ${btnst4 && 'active'}`}>API</button> <br />
                                        {btnst4 && (
                                            <div className='st4'>
                                                <p className='st4zgl'>Application Programminng Interface</p>
                                                <button onClick={closest4} className='btnst4-close'>close</button>

                                                <div className='contentst4'>Правила и Протоколы, которые позволяют разным программным приложениям обмениваться данными и взаимодействовать,
                                                    API - контракт, который предоставляет программа.
                                                    Application programming interface - интерфейс программирования приложения. Описание способов взаимодействия
                                                    компъютерных программ. Применяются встроенные fetch или библиотеки Axios.<br />
                                                    React-компоненты управляют состоянием и жизненным циклом при взаимодействии с API, используя хуки
                                                    (useEffec, useState) или методы (componentDidMount) для выполнения запросов и рендеринга данных.
                                                    <br />

                                                </div>

                                            </div>
                                        )}
                                    </div>

                                )}
                            </li>
                            <li><button onClick={() => setMenuBut2(menuBut2 = !menuBut2)} className={`mb2 ${menuBut2 && 'active'}`} >Foto Design</button>
                                {menuBut2 && (
                                    <div className='pole2'>
                                        <button onClick={() => setBtnst5(btnst5 = !btnst5)} className={`pole2b1 ${btnst5 && 'active'}`}>Interior</button> <br />
                                        {btnst5 && (
                                            <div className='st5'>
                                                <p className='st5zgl'>Interior</p>
                                                <button onClick={closest5} className='btnst5-close'>close</button>

                                                <div className='contentst5'>Сотрудничество с Талантливым Дизайнерам и Проектировщиком. Классическое представление
                                                    современных стилей оформления помещений. Неоклассицизм. Оптимизация пространства и комфорт.
                                                    <br />
                                                    Создание технической документации и сопровождения реализации проекта. Предоставления множества вариантов трехмерных моделей.
                                                    Работа новыми материалами и методами воплощения эксклюзивных сред обитания.
                                                    <br />
                                                    Огромный опты и значительное количество реализованных проектов, от дизайнерских кухонь, до загородных домов.
                                                    Создадим Ваш Уютный Уголок.
                                                </div>
                                            </div>
                                        )}
                                        <button onClick={() => setBtnst6(btnst6 = !btnst6)} className={`pole2b2 ${btnst6 && 'active'}`}>ArtCentr</button> <br />
                                        {btnst6 && (
                                            <div className='st6'>
                                                <p className='st6zgl'>ArtCentr</p>
                                                <button onClick={closest6} className='btnst6-close'>close</button>

                                                <div className='contentst6'>Мастер классы по искусству живописи маслом, подготовка к вступлению в Художественные ВУЗы.
                                                    Погружение в творческую атмосферу создания собственных Шедевров.
                                                    <br />
                                                    Академический подход к написанию работ и создания художественного портфолио в кротчайшие сроки.
                                                    Основная цель передать опыт и развить талант каждого участника проекта.
                                                    Индивидуальный подход и мотивация двигаться.
                                                    <br />
                                                    Прокачав свой уровень Вы сможете реализовывать свои Картины, устраивать выставки и веб галереи.
                                                    Реализуй Свой Потенциал. Готовая картина после первого занятия.
                                                    Средство отвлечься от забот и получить приятный опыт.

                                                </div>
                                            </div>
                                        )}
                                        <button onClick={() => setBtnst7(btnst7 = !btnst7)} className={`pole2b3 ${btnst7 && 'active'}`}>UnionOfArtists</button> <br />
                                        {btnst7 && (
                                            <div className='st7'>
                                                <p className='st7zgl'>UnionOfArtists</p>
                                                <button onClick={closest7} className='btnst7-close'>close</button>

                                                <div className='contentst7'>
                                                    Экскурсии в Кузницу Академии Художественной Ковки к Величайшему Мастеру обработки металла.
                                                    Сохраняя традиции классической школы.
                                                    Обучающая лекция о физико-химических свойствах различных сплавов и их взаимодействии между собой.
                                                    <br />
                                                    Эксклюзивная возможность заглянуть в огненную колыбель кузнечного дела.
                                                    Прикоснуться к пламени и узнать секреты древнейшего ремесла.
                                                    <br />
                                                    Разожжём горн и познакомимся с магическим процессом преображения безликого куска железа
                                                    в застывшую симфонию формы и пропорций.

                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst8(btnst8 = !btnst8)} className={`pole2b4 ${btnst8 && 'active'}`}>VoronStyle</button> <br />
                                        {btnst8 && (
                                            <div className='st8'>
                                                <p className='st8zgl'>VoronStyle</p>
                                                <button onClick={closest8} className='btnst8-close'>close</button>

                                                <div className='contentst8'>
                                                    Фотосессии на выезде. Побережье Кронштадта, Выборг, затерянные миры Ленинградской области.
                                                    0.618 Идеальный стандарт пропорций на Ваших фотографиях.
                                                    <br />
                                                    Реализация смелых идей и творческий подход к процессу создания идеальной фотографии. Работа со светом и декорациями.
                                                    Композиция портретов с последующей обработкой современными программами.
                                                    <br />
                                                    Разожжём горн и познакомимся с магическим процессом преображения безликого куска железа
                                                    в застывшую симфонию формы и пропорций. Добродушная обстановка во время творческого процесса.

                                                </div>
                                            </div>
                                        )}

                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut3(menuBut3 = !menuBut3)} className={`mb3 ${menuBut3 && 'active'}`} >UX & UI</button>
                                {menuBut3 && (
                                    <div className='pole3'>
                                        <button onClick={() => setBtnst9(btnst9 = !btnst9)} className={`pole3b1 ${btnst9 && 'active'}`}>UX</button> <br />
                                        {btnst9 && (
                                            <div className='st9'>
                                                <p className='st9zgl'>User Experience</p>
                                                <button onClick={closest9} className='btnst9-close'>close</button>

                                                <div className='contentst9'>
                                                    Пользовательский опыт, совокупность всех ощущений и впечатлений человека при взаимодействии
                                                    с продуктом, системой или услугой. Эмоции человека.
                                                    <br />
                                                    UX Design процесс создания такого продукта, чтобы он был максимально удобным, интуитивно понятным,
                                                    функциональным и приносил удовольствие пользователю. UX дизайнер работает над логикой, структурой, навигацией.
                                                    <br />
                                                    Основные задачи UX дизайнера: Исследование потребностей и проблем аудитории.
                                                    Проектирование информационной архитектуры и сценариев использования.
                                                    Создание прототипов и Тестирование. Оптимизация.
                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst10(btnst10 = !btnst10)} className={`pole3b2 ${btnst10 && 'active'}`}>UI</ button> <br />
                                        {btnst10 && (
                                            <div className='st10'>
                                                <p className='st10zgl'>User Intrface</p>
                                                <button onClick={closest10} className='btnst10-close'>close</button>

                                                <div className='contentst10'>
                                                    Визуальная и интерактивная часть продукта (сайта, приложения, программы),
                                                    с которой взаимодействует человек: Кнопка, меню, шрифт, цвет и  иконки;
                                                    UI отвечает за то, как продукт выглядит и ощущается.
                                                    <br />
                                                    Ключевые аспекты UI: Визуальные элементы-цвета, шрифты, кнопки, иконки, изображения, анимация.
                                                    Компоненты: Меню, формы ввода, списки, вкладки.
                                                    Цель: Создание эстетически приятного и привлекательного внешнего вида,
                                                    который вызывает доверие у пользователя. Отличие от UX: UI - визуальная составляющая продукта,
                                                    в то время как UX - описывает логику и структуру.

                                                    <br />

                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst11(btnst11 = !btnst11)} className={`pole3b3 ${btnst11 && 'active'}`}>Button </button> <br />
                                        {btnst11 && (
                                            <div className='st11'>
                                                <p className='st11zgl'>Button</p>
                                                <button onClick={closest11} className='btnst11-close'>close</button>

                                                <div className='contentst11'>
                                                    Элемент интерфейса или физическое устройство, при нажатии на которое выполняется заданное действие.
                                                    В веб-разработке тег button используется для создания интерактивных элементов, которые могут содержать текст,
                                                    изображение и стили. Основные типы: submit (отправка), reset (сброс). Интерактивные компоненты в приложениях
                                                    (диалоги, панели инструментов)

                                                    Множество возможных разновидностей сложных кнопок бесконечно. Могут быть фиксируемыми,
                                                    реагировать на быстрые клики,
                                                    включать многофазные счётные триггеры и более сложные устройства с большим количеством состояний.

                                                    <br />

                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst12(btnst12 = !btnst12)} className={`pole3b4 ${btnst12 && 'active'}`}>Gradient </button> <br />
                                        {btnst12 && (
                                            <div className='st12'>
                                                <p className='st12zgl'>Gradient</p>
                                                <button onClick={closest12} className='btnst12-close'>close</button>

                                                <div className='contentst12'>
                                                    Вид заливки в компьютерной графике, которая по заданным параметрам цвета
                                                    в ключевых точках рассчитывает промежуточные цвета остальных точек.
                                                    При этом создаются плавные переходы. Обычно в градиенте можно использовать
                                                    более двух цветов и дополнительно указывать настройки прозрачности и смещения границы цветов.
                                                    <br />
                                                    Основные виды градиентов: Линейный - ключевые точки располагаются на одной прямой.
                                                    Круговой - относительно первой ключевой точки строятся концентрически окружности.
                                                    Угловой - ключевые точки располагаются по кругу. Отражённый - похож на линейный. Ромбовидный.
                                                    <br />


                                                </div>

                                            </div>
                                        )}
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
                            <li><button onClick={() => setMenuBut5(menuBut5 = !menuBut5)} className={`mb5 ${menuBut5 && 'active'}`} >Future</button>
                                {menuBut5 && (
                                    <div className='pole5'>
                                        <button className='pole5b1'>smart contract</button> <br />
                                        <button className='pole5b2'>Solidity</button> <br />
                                        <button className='pole5b3'>Web3</button> <br />
                                        <button className='pole5b4'>NFT cart</button> <br />
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut6(menuBut6 = !menuBut6)} className={`mb6 ${menuBut6 && 'active'}`} >project</button>
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
