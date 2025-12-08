import { useState, useEffect, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './Cadr.css'

const ANA_WIDTH = 500

export const Cadr = ({ children }) => {
    const [ana, setAna] = useState([])
    const [offset, setOffset] = useState([0])

    const leftClick = () => {
        console.log('g')
        setOffset(currentOffset => {
            const newOffset = currentOffset + ANA_WIDTH

            return Math.min(newOffset, 0)
        })
    }

    const rightClick = () => {
        console.log('o')
        setOffset((currentOffset) => {
            const newOffset = currentOffset - ANA_WIDTH

            const maxOffset = (ANA_WIDTH * -(ana.length - 1))
            console.log(newOffset, maxOffset)
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setAna(
            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${ANA_WIDTH}px`,
                        maxWidth: `${ANA_WIDTH}px`,
                    },
                })
            })

        )
    }, [children])


    return (
        <div className="cadr-container">
            <FaChevronLeft className='chevron' onClick={leftClick} />
            <div className="win-cadr">
                <div
                    className="all-cadr-container"
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}

                >
                    {ana}
                </div>
            </div>
            <FaChevronRight className='chevron' onClick={rightClick} />

        </div>
    )
}