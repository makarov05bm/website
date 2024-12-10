import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CgEnter } from 'react-icons/cg'
import { MdLocalFireDepartment } from 'react-icons/md'

const ProjectItem = ({ image, title, slug, link }) => {
    return (
        <article className='project-item'>
            <Image src={image} width={300} height={200} layout='responsive' placeholder='blur' blurDataURL={image} alt={title} />
            <div className="content">
                <h2>{title}</h2>
                <div className="links">
                    <ul>
                        <li className="btn">
                            <Link legacyBehavior href={`/posts/${slug}`}>
                                <a>
                                    <MdLocalFireDepartment className='icon' />
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li className="btn">
                            <a href={link} target='_blank' rel='noopener noreferrer'>
                                <CgEnter className='icon' />
                                Visit
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default ProjectItem
