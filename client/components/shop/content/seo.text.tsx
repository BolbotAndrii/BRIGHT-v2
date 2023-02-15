import React from 'react';

interface ISeoText {
    description: any
}

const SeoText = (props:ISeoText) => {
    return (
        <div className='my-8'>
            {props.description}
        </div>
    );
};

export default SeoText;