import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import ProductItem from "@components/ProductItem/ProductItem";

function HeadingListProducts() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3);

  return (
    <div className="flex flex-row justify-center items-center gap-5">
      <div className="basis-1/2 flex flex-col gap-5 justify-center items-center bg-[url('./src/assets/images/man1.jpeg')] bg-cover h-[490px]">
        <CountdownTimer targetDate={targetDate} />
        <div className="capitalize font-Poppins text-[24px] text-xl tracking-widest">The classics make a comeback</div>
        <a className="whitespace-nowrap py-2 px-9 bg-gray-950 hover:bg-gray-700 cursor-pointer text-white rounded-md" href="#" >Buy now</a>
      </div>
      <div className="basis-1/2 flex flex-row gap-5 justify-between">
        <ProductItem firstImage='./src/assets/images/man20.jpg' secondImage='./src/assets/images/man21.jpg' className="basis-1/2" />
        <ProductItem firstImage='./src/assets/images/story2.jpg' secondImage='./src/assets/images/story1.jpg' className="basis-1/2" />
      </div>
    </div>
  )
}

export default HeadingListProducts