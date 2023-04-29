import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Terms and condition</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate error consequuntur fugiat non. Consequatur, pariatur sunt. Officia enim quam perspiciatis.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;