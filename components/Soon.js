import React from 'react';
import { IoIosConstruct } from "react-icons/io";

const ComingSoon = () => {
    return (
        <section className='soon'>
            <div className="main">
                <h1>Coming Soon</h1>
                <p>We're working on a great mobile experience. Stay tuned!</p>
            </div>

            <IoIosConstruct className='icon' />
        </section>
    );
};

export default ComingSoon;