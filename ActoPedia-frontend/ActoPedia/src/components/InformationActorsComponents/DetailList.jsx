import React from 'react';

const DetailList = ({title, info}) => {
    return (
        <div >
            <ul className=''>
                <li className='whitespace-normal break-words'>{info}</li>
            </ul>
        </div>
    );
};

export default DetailList;