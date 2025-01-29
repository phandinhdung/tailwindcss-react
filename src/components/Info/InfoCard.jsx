
function InfoCard({title, description, src}) {
  return (
    <div className='flex justify-center items-center gap-5'>
      <img className='b' width={40} height={41} src={src} alt=''/>
      <div>
        <div className='text-white font-Karla text-[17px]'>{title}</div>
        <span className='text-white font-Karla text-[16px]'>{description}</span>
      </div>
    </div>
  )
}

export default InfoCard