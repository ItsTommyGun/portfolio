import React from 'react';

export default function List({items}) {
    return (
        <div className="flex flex-wrap">
            {items.map((item) => {
                return <div className='lg:w-1/4 lg:mx-0 mr-6 my-4' key={item}>
                    <span className='pr-5'>○</span>
                    {item}
                </div>
            })}
        </div>
    )
}