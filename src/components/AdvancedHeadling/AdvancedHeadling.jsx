
function AdvancedHeadling() {
  return (
    <div className="flex justify-center items-center h-[150px]">
      {/* Có thể dùng w-full thay cho grow. nhưng phải set thuộc tính  whitespace-nowrap hoặc set chiều rộng cố định cho khung chứa chữ*/}
      <div className="h-[4px] grow border-y-gray-200 border-y-2" />

      <div className="px-[60px] tracking-widest text-gray-500 font-medium text-xs text-center">
        <div className="uppercase text-[14px]">Don&apos;t miss super offers</div>
        <div className="text-[27px] mt-4 font-Roboto">Our best products</div>
      </div>

      <div className="h-[4px] grow border-y-gray-200 border-y-2" />
    </div>
  )
}

export default AdvancedHeadling