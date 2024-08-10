import React from 'react';

const DetailList = ({title, info}) => {
    return (
        <div className='flex flex-col'>
            <h3 className='text-2xl font-bold pb-2'>{title}</h3>
            <ul className='text-center'>
                <li>{info}</li>
                <li>{info}</li>
                <li>{info}</li>
                <li>{info}</li>
                <li>{info}</li>
            </ul>
        </div>
    );
};

export default DetailList;