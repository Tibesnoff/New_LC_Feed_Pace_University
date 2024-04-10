const Ticker = () => {
    return (
        <div className="w-full h-fit flex justify-center bg-white rounded-md border-2 border-white mt-2">
            <iframe
                title="Forex Rates"
                height="40"
                scrolling="no" //Scrolling needs to be here
                seamless={true}
                src="https://www.dailyforex.com/forex-widget/widget/42869"
                style={{
                    width: '1500px',
                    height: '40px',
                    display: 'block',
                    border: '0px',
                    overflow: 'hidden',
                }}
                width="1000"
            ></iframe>
        </div>
    );
};

export default Ticker;
