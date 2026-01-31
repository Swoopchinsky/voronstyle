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

    let [btnst13, setBtnst13] = useState(false)
    const closest13 = () => {
        setBtnst13(!btnst13)
    }

    let [btnst14, setBtnst14] = useState(false)
    const closest14 = () => {
        setBtnst14(!btnst14)

    }

    let [btnst15, setBtnst15] = useState(false)
    const closest15 = () => {
        setBtnst15(!btnst15)
    }

    let [btnst16, setBtnst16] = useState(false)
    const closest16 = () => {
        setBtnst16(!btnst16)
    }

    let [btnst17, setBtnst17] = useState(false)
    const closest17 = () => {
        setBtnst17(!btnst17)
    }

    let [btnst18, setBtnst18] = useState(false)
    const closest18 = () => {
        setBtnst18(!btnst18)
    }

    let [btnst19, setBtnst19] = useState(false)
    const closest19 = () => {
        setBtnst19(!btnst19)
    }

    let [btnst20, setBtnst20] = useState(false)
    const closest20 = () => {
        setBtnst20(!btnst20)
    }

    let [btnst21, setBtnst21] = useState(false)
    const closest21 = () => {
        setBtnst21(!btnst21)
    }

    let [btnst22, setBtnst22] = useState(false)
    const closest22 = () => {
        setBtnst22(!btnst22)
    }

    let [btnst23, setBtnst23] = useState(false)
    const closest23 = () => {
        setBtnst23(!btnst23)
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
                                                    Реализация смелых идей и творческий подход к процессу создания идеальной фотографии. Работа светом и декорациями.
                                                    Композиция портретов при последующей обработке современными программами.

                                                    Классическая аппаратура, широкий спектр объективов. Многолетний опыт работы с фотографией.
                                                    Каноничный подход к созданию идеальных снимков. Экспертные методы подготовки съёмок позволяют
                                                    добиться результата в кротчайшие сроки.


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
                            <li><button onClick={() => setMenuBut4(menuBut4 = !menuBut4)} className={`mb4 ${menuBut4 && 'active'}`} >Drawings</button>
                                {menuBut4 && (
                                    <div className='pole4'>
                                        <button onClick={() => setBtnst13(btnst13 = !btnst13)} className={`pole4b1 ${btnst13 && 'active'}`}>Graffiti</button> <br />
                                        {btnst13 && (
                                            <div className='st13'>
                                                <p className='st13zgl'>Graffiti </p>
                                                <button onClick={closest13} className='btnst13-close'>close</button>

                                                <div className='contentst13'>
                                                    Изображение или надписи нарисованные краской или ченилами на стенах
                                                    и других поверхностях. Считается, что граффити тесно связанно
                                                    с hip-hop культурой и рисунков в Нью-Йорским метрополитене.
                                                    <br />
                                                    Сегодня это вид уличного исскусства, форма художественного самоваражения. Произведения,
                                                    создаваемые граффити-художниками стали самостоятельным жанром, неотъемлемая часть культуры
                                                    и городского образа. В большинстве стран мира нанесение граффити на чью-либо собственность
                                                    без разрешения считается вандализмом. Натоящее искусство.

                                                    <br />
                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst14(btnst14 = !btnst14)} className={`pole4b2 ${btnst14 && 'active'}`}>Oil & canvas</button> <br />
                                        {btnst14 && (
                                            <div className='st14'>
                                                <p className='st14zgl'>Canvas & Oil</p>
                                                <button onClick={closest14} className='btnst14-close'>close</button>

                                                <div className='contentst14'>
                                                    Широкое применение в Европе масляная живопись получила в начале XV века благодаря искусству
                                                    нидерландского живописца Яна ван Эйка. Краски смешиваются на палитре кистью или мастихином.
                                                    Не следует смешивать более трёх пегментов сразу - к оттенку следует идти кратчайшим путем.
                                                    <br />
                                                    Палитрой может служить деревянная дощечка, вощенная бумага, керамическая плитка.
                                                    Чтобы разбавить краску или сполоснуть кисти, используют скипидар или любой другой растворитель.
                                                    Сильно разбавлять краску нельзя, так как она может не прилипнуть к предыдущему слою.
                                                    Для придания блеска к ним подмешиваются специальные лаки и смолы.
                                                    <br />
                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst15(btnst15 = !btnst15)} className={`pole4b3 ${btnst15 && 'active'}`}>Sketch</button>
                                        {btnst15 && (
                                            <div className='st15'>
                                                <p className='st15zgl'>Skettch</p>
                                                <button onClick={closest15} className='btnst15-close'>close</button>

                                                <div className='contentst15'>
                                                    Скетч, от английского sketch - набросок. Быстрый рисунок передающий ключевую идею,
                                                    композицию или настроение без тщательной детализации.
                                                    Скетчинг используется для визуализации мыслей, в рисовании,
                                                    travel, fashion, промышленности. Техника: Отличается высокой скоростью использования,
                                                    свободной линией и стилизацией. Цели:
                                                    Быстро зафиксировать идею, сделать зарисовку с натуры или создать основу для будущей работы.
                                                    Сферы: Художественный скетчинг. Зарисовка людей, архитектуры, интерьеров. Граффити:
                                                    Небольшой предварительный эскиз. Дизайн (Sketch app):
                                                    Программа для прототипирования.
                                                    <br />


                                                </div>

                                            </div>
                                        )}
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut5(menuBut5 = !menuBut5)} className={`mb5 ${menuBut5 && 'active'}`} >Future</button>
                                {menuBut5 && (
                                    <div className='pole5'>
                                        <button onClick={() => setBtnst16(btnst16 = !btnst16)} className={`pole5b1 ${btnst16 && 'active'}`}>Smart Contract</button> <br />
                                        {btnst16 && (
                                            <div className='st16'>
                                                <p className='st16zgl'>Smart Contract</p>
                                                <button onClick={closest16} className='btnst16-close'>close</button>

                                                <div className='contentst16'>
                                                    Смарт-контракты: Цифровые протоколы(код), работающие на блокчейне,
                                                    которые автоматически исполняют условия договора при выполнении заранее заданных условий <br />
                                                    (if-else)(если-то).
                                                    Они исключают посредников, обеспечивая прозрачность и необратимость сделок. Автоматическое использование:
                                                    Программа сама переводит активы при наступлении условий, устраняя необходимость в доверии между сторонами.
                                                    Работа на блокчейне: Код децентрализован, неизменяем и прозрачен, что минимизирует риски мошенничества.
                                                    Точность (детерминизм):
                                                    Код исключает двусмысленность.

                                                    <br />


                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst17(btnst17 = !btnst17)} className={`pole5b2 ${btnst17 && 'active'}`}>Solidity</button> <br />
                                        {btnst17 && (
                                            <div className='st17'>
                                                <p className='st17zgl'>Solidity</p>
                                                <button onClick={closest17} className='btnst17-close'>close</button>

                                                <div className='contentst17'>
                                                    Объектно-ориентированный, статически типизированный язык программирования,
                                                    созданный специально для написания смарт-контрактов, которые выполняются в блокчейне Ethereum,
                                                    компилируясь в байт-код для Виртуальной машины Ethereum(EVM).
                                                    Сиснтаксис похож на JavaScript, Python, C++. Позволяет создавать децентрализованные приложения (dApps),
                                                    токены (ERC-20, ERC-721) и автоматизированные транзакции.
                                                    Газ (Gas): Каждая операция в смарт-контракте имеет стоимость в виде комиссии (газа), оплачиваемой в ETH.
                                                    Язык имеет особенности, направленные на повышение безопасности.
                                                    <br />
                                                </div>
                                            </div>
                                        )}
                                        <button onClick={() => setBtnst18(btnst18 = !btnst18)} className={`pole5b3 ${btnst18 && 'active'}`}>Web3</button> <br />
                                        {btnst18 && (
                                            <div className='st18'>
                                                <p className='st18zgl'>Web3</p>
                                                <button onClick={closest18} className='btnst18-close'>close</button>

                                                <div className='contentst18'>
                                                    Концепция третьего поколения интернета, основанная на децентрализации,
                                                    блокчейне и технологии владения данными, где пользователи контролируют свои цифровые активы,
                                                    не корпорации. Web3 - это интернет владения, использующий искусственный интеллект,
                                                    смарт-контракты и децентрализованные приложения dApps для создания прозрачной и безопасной сети.
                                                    Децентрализация: Данные не хранятся на центральных серверах, а распределяются между пользователями.
                                                    Владение данными: Принцип not your keys,
                                                    not your data означает, что пользователи сами владеют своими приватными ключами и цифровыми активами.
                                                    <br />
                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst19(btnst19 = !btnst19)} className={`pole5b4 ${btnst19 && 'active'}`}>NFT</button> <br />
                                        {btnst19 && (
                                            <div className='st19'>
                                                <p className='st19zgl'>NFT</p>
                                                <button onClick={closest19} className='btnst19-close'>close</button>

                                                <div className='contentst19'>
                                                    non-fungible token, невзаимозаменяемый токен - уникальный цифровой сертификат,
                                                    работающий на блокчейне, который удостоверяет право собственности на уникальный актив,
                                                    например, цифровое искусство, видео, музыку или игровые предметы. В отличии от криптовалют,
                                                    NFT нельзя обменять один на один, так как каждый токен уникален и подтверждает подлинность объекта.
                                                    Чаще всего NFT создаются на базе Ethereum, Solana,
                                                    что обеспечивает безопасность сделок.
                                                    Несмотря на падение интереса к рынку в последние годы,
                                                    технология NFT остается важным инструментом токенизации цифровых активов.

                                                    <br />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </li>
                            <li><button onClick={() => setMenuBut6(menuBut6 = !menuBut6)} className={`mb6 ${menuBut6 && 'active'}`} >Project</button>
                                {menuBut6 && (
                                    <div className='pole6'>
                                        <button onClick={() => setBtnst20(btnst20 = !btnst20)} className={`pole6b1 ${btnst20 && 'active'}`}>React.JS</button> <br />
                                        {btnst20 && (
                                            <div className='st20'>
                                                <p className='st20zgl'>React.JS</p>
                                                <button onClick={closest20} className='btnst20-close'>close</button>

                                                <div className='contentst20'>
                                                    Декларативная JavaScript-Библиотека для разработка пользовательских интерфейсов.
                                                    Был создан Джорданом Валке. Исходный код открыт в мае 2013 года.
                                                    <br />
                                                    Свойства передаются от родительских компонентов к дочерним.
                                                    Компоненты получают свойства как множество неизменяемых (immutable) значений,
                                                    поэтому компонент не может напрямую изменять свойства,
                                                    но можно вызывать изменения через callback-функции. Свойство-вниз - Событие-наверх.
                                                    Использует виртуальный DOM. Создает кэш-структуру в памяти,
                                                    вычисляет разницу между состояниями интерфейса,
                                                    для оптимального обновления.
                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst21(btnst21 = !btnst21)} className={`pole6b2 ${btnst21 && 'active'}`}>GitHub Pages</button> <br />
                                        {btnst21 && (
                                            <div className='st21'>
                                                <p className='st21zgl'>GitHub Pages</p>
                                                <button onClick={closest21} className='btnst21-close'>close</button>

                                                <div className='contentst21'>
                                                    GitHub - крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.
                                                    Система контроля версий Git и разработан на Ruby on Rails и Erlang компанией GitHub, inc.

                                                    (Logical Awesome) Social Coding. Ветви.
                                                    Талисманом GitHub выбран осьмикот (octocat),
                                                    который был найден Томом Престоном-Вернером на сервисе iStock.
                                                    <br />
                                                    Бесплатный хостинг для статических сайтов(HTML, CSS, JavaScript),
                                                    который позволяет публиковать страницы прямо из вашего репозитория на GitHub.
                                                    Сервис автоматически собирает Ваш сайт из файлов репозитория и делает доступным по уникальной ссылке.
                                                    Шубист не ленись!


                                                </div>
                                            </div>
                                        )}
                                        <button onClick={() => setBtnst22(btnst22 = !btnst22)} className={`pole6b3 ${btnst22 && 'active'}`}>JavaScript</button> <br />
                                        {btnst22 && (
                                            <div className='st22'>
                                                <p className='st22zgl'>JavaScript</p>
                                                <button onClick={closest22} className='btnst22-close'>close</button>

                                                <div className='contentst22'>
                                                    Работает в Браузерах и на серверах, позволяя управлять элементами HTML и CSS,
                                                    создавая динамический контент без перегрузки станицы. Frontend: Добавление интерактивности веб-станицам,
                                                    создание игр, динамических стилей и анимации.
                                                    Backend: Разработка серверных приложений при помощи платформы Node.js.
                                                    Создание кросс-платформенных мобильных приложений. Манипулирование
                                                    DOM:(Document Object Model) Изменение структуры и содержимого HTML-Документа в реальном времени.
                                                    Менеджер пакетов npm (Node Packege Manager) для JavaScript поставляется Системой Node.JS.


                                                </div>

                                            </div>
                                        )}
                                        <button onClick={() => setBtnst23(btnst23 = !btnst23)} className={`pole6b4 ${btnst23 && 'active'}`}>Author</button> <br />
                                        {btnst23 && (
                                            <div className='st23'>
                                                <p className='st23zgl'>Author</p>
                                                <button onClick={closest23} className='btnst23-close'>close</button>

                                                <div className='contentst23'>

                                                    Игорь Борисович. VK Garri Looking. GitHub Swoopchinsky .
                                                    Технические навыки: Visual Studio Code Основы JavaScript Node.JS npm React.JS Vue.JS TypeScript JSX
                                                    Babel (Транспиляция синтаксиса:
                                                    преобразование стрелочных функций, классов, деструктуризацию и другх возможностей ES6+ в старый синтаксис).
                                                    GitHub Pages branch  API <br />
                                                    Python pip (Package Installer for Python)
                                                    Anaconda Python NumPy Matplotlib Jupyter Notebook Pandas Scikit-learn.

                                                    <br />
                                                    Хобби: Разработка, Спорт, Баскетбол, Бокс, Тренажёры, BMX, Penny board, Турник, Футбол, Шахиаты, Lego.
                                                    <br />
                                                    <address>+7 921 593 63 24  Пн - Пт 10.00 - 18.00 </address>


                                                </div>

                                            </div>
                                        )}

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
