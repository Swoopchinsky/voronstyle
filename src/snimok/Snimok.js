import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './Snimok.css'

const KROK_WIDTH = 450

export const Snimok = ({ children }) => {
    const [krok, setKrok] = useState([])

    const leftClick = () => {
        console.log('leftClick')
    }

    const rightClick = () => {
        console.log('rightClick')
    }


    useEffect(() => {
        setKrok(

            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        ninWidth: `${KROK_WIDTH}px`,
                        maxwidth: `${KROK_WIDTH}px`,
                    },
                })
            })
        )
    }, [children])



    return (
        <div className='snimok-container'>
            <FaChevronLeft className='snarrow' onClick={leftClick} />
            <div className='win-snimok'>
                <div className="all-snimok-container">{krok}</div>
            </div>
            <FaChevronRight className='snarrow' onClick={rightClick} />


        </div>
    )
}