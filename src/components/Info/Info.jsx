import { dataInfo } from './constants'
import InfoCard from '@components/Info/InfoCard'


function Info() {
  return (
    <div className='flex justify-between gap-5 h-[144px] bg-[#333333] mt-[-75px] px-[55px] py-[20px] rounded-md'>
      {
        dataInfo.map((item, index) => {
          return <InfoCard key={index} title={item.title} description={item.description} src={item.scr} />
        })
      }
    </div>
  )
}

export default Info