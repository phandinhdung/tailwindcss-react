
function Banner() {
  return (
    <div className="bg-[url('./src/assets/images/banner-Eco.jpeg')] min-h-[750px] bg-no-repeat bg-center flex justify-center items-center">
      <div className="flex-col gap-5 justify-center items-center">
        <h1 className="text-[42px] text-[#222222] font-Poppins text-center">XStore Marseille</h1>
        <p className="text-center text-[#555555]">
          Make yours clelebrations even more specails this years with beautiful.
        </p>
        <div className="flex justify-center">
          <button className="py-2 px-9 mt-12 bg-black text-white rounded-md">Go to shop</button>
        </div>
      </div>
    </div>
  )
}

export default Banner