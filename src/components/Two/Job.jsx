

function Job({title, bgClass, icon}) {
  return (
    <div className={`${bgClass} p-4 flex flex-col aspect-square rounded-lg items-center justify-center cursor-pointer`}>
      {icon}
      <p className="pt-2 font capitalize">{title}</p>
    </div>
  )
}

export default Job