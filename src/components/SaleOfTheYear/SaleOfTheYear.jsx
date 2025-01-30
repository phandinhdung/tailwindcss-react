import useTranslateXImage from "@/hooks/useTranslateXImage";

function SaleOfTheYear() {
  const {translateXPosition} = useTranslateXImage();

  return (
    <div className="mt-28 flex justify-between w-[1500px]">
      <div style={{
        transform: `translateX(${translateXPosition}px)`,
        transition: 'transform 0.6s ease'
      }}>
      {/* <div className={`translate-x-[25px]`}> không dùng được kiểu này*/}
        <img className="rounded-md" src='./src/assets/images/sale1.jpeg' alt=""/>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 w-[300px]">
        <h2 className="text-center text-[35px] font-Karla font-bold">Sale of the year</h2>
        <p className="text-center w-[300px]">
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
           </p>
        <a className="whitespace-nowrap py-2 px-9 bg-gray-950 hover:bg-gray-700 cursor-pointer text-white rounded-md" href="#" >Read more</a>
      </div>
      <div style={{
        transform: `translateX(-${translateXPosition}px)`,
        transition: 'transform 0.6s ease'
      }}><img className="rounded-md" src='./src/assets/images/sale2.jpeg' alt=""/></div>
    </div>
  )
}

export default SaleOfTheYear