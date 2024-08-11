import React from 'react';

const DetailList = ({title, info}) => {
    return (
        <div className='flex'>
            <ul className='text-center'>
                <li>{info}</li>
            </ul>
        </div>
    );
};

export default DetailList;