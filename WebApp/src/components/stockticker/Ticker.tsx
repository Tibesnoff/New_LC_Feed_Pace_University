import React from 'react';

const Ticker = () => {
  return (
    <div className='w-full h-fit flex justify-center'>
      <iframe
        height='40'
        src='https://www.dailyforex.com/forex-widget/widget/42861'
        style={{
          width: '50%',
          height: '40px',
          display: 'block',
          border: '0px',
          overflow: 'hidden'
        }}
      />
    </div>
  );
};

export default Ticker;
