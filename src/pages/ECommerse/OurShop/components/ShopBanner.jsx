import CountdownTimer from '@components/CountdownTimer/CountdownTimer';

function ShopBanner() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-[url('./src/assets/images/shopBg.jpeg')] h-[279px] bg-no-repeat bg-cover mt-3 rounded-md">
      <CountdownTimer targetDate={targetDate} />
      <div className="capitalize font-Poppins text-[24px] text-xl tracking-widest">The classics make a comeback</div>
      <a className="whitespace-nowrap py-2 px-9 bg-gray-950 hover:bg-gray-700 cursor-pointer text-white rounded-md" href="#" >Buy now</a>
    </div>
  )
}

export default ShopBanner