import React from 'react';

const Ticker = () => {
  return (
    <div className='w-full h-fit flex justify-center'>
      <iframe
        height='40'
        scrolling='no'
        src='https://www.dailyforex.com/forex-widget/widget/42869'
        style={{ width: '1500px', height: '40px', display: 'block', border: '0px', overflow: 'hidden' }}
        width='1000'
      ></iframe>
    </div>
  );
};

export default Ticker;
