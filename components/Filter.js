import React, {useState, useContext} from 'react'
import { HiPresentationChartLine } from 'react-icons/hi'
import { CgFigma } from 'react-icons/cg'
import { SiAdobeaftereffects } from 'react-icons/si'
import { AiFillStar } from 'react-icons/ai'
import BlogContext from '../store/contactContext'

const Filter = () => {
    const blogContext = useContext(BlogContext)

    const [selected, setSelected] = useState('all')

  return (
    <div className='filter'>
        <ul>
            <li onClick={() => {
                blogContext.toggleFilterType('all')
                setSelected('all')
            }}>
                <AiFillStar className={`icon ${selected === 'all' && 'selected'}`} />
                <span>Everything</span>
            </li>
            <li onClick={() => {
                blogContext.toggleFilterType('pres')
                setSelected('pres')
            }}>
                <HiPresentationChartLine className={`icon ${selected === 'pres' && 'selected'}`} />
                <span>Presentations</span>
            </li>
            <li onClick={() => {
                blogContext.toggleFilterType('ui')
                setSelected('ui')
            }}>
                <CgFigma className={`icon ${selected === 'ui' && 'selected'}`} />
                <span>UI Design</span>
            </li>
            <li onClick={() => {
                blogContext.toggleFilterType('ani')
                setSelected('ani')
            }}>
                <SiAdobeaftereffects className={`icon ${selected === 'ani' && 'selected'}`} />
                <span>Animations</span>
            </li>
        </ul>
    </div>
  )
}

export default Filter