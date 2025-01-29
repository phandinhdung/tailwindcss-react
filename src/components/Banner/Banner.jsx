
function Banner() {
  return (
    <div className="bg-[url('./src/assets/images/banner-Eco.jpeg')] min-h-[750px] bg-no-repeat bg-center flex justify-center items-center">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-[42px] text-[#222222] font-Poppins text-center">XStore Marseille</h1>
        <p className="text-center text-[#555555]">
          Make yours clelebrations even more specails this years with beautiful.
        </p>
        <a className="whitespace-nowrap py-2 px-9  mt-12 bg-gray-950 hover:bg-gray-700 cursor-pointer text-white rounded-md" href="#" >Go to shop</a>
      </div>
    </div>
  )
}

export default Banner