import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './Snimok.css'

const KROK_WIDTH = 1340

export const Snimok = ({ children }) => {
    const [krok, setKrok] = useState([])
    const [offset, setOffset] = useState(0)


    const leftClick = () => {
        console.log('leftClick')

        setOffset(currentOffset => {
            const newOffset = currentOffset + KROK_WIDTH

            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
    }

    const rightClick = () => {
        console.log('rightClick')

        setOffset((currentOffset) => {

            const newOffset = currentOffset - KROK_WIDTH

            const maxOffset = -(KROK_WIDTH * (krok.length - 1))

            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)

        })
    }


    useEffect(() => {
        setKrok(

            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${KROK_WIDTH}px`,
                        maxWidth: `${KROK_WIDTH}px`,
                    },
                })
            })
        )
    }, [children])



    return (
        <div className='snimok-container'>
            <FaChevronLeft className='snarrow' onClick={leftClick} />
            <div className='win-snimok'>
                <div className='all-snimok-container'

                    style={{
                        transform: `translateX(${offset}px)`
                    }}


                >{krok}</div>
            </div>
            <FaChevronRight className='snarrow' onClick={rightClick} />


        </div>
    )
}