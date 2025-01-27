import React from 'react'

function UsersList() {
  const FILTERS = ['Reputation', 'New users', 'Relax', 'Person', 'Fashion'];

  return (
    <div className="min-w-[40rem] rounded-lg bg-white p-16 shadow">
      <h1 className='font-Poppins text-3xl font-black'>Users</h1>

      <div className='flex mt-6 gap-4 flex-col md:flex-row'>
        <div>
          <div className="relative grow rounded-md border-2 border-gray-300">
            <input type='text' className="mr-2 w-full px-4 py-3 pl-10" placeholder="Search users">
            </input>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-3 top-3.5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        <div className="space-x-2">
          {
            FILTERS.map(flt => (
              <a key={flt} className={`mb-2 inline-block cursor-pointer rounded-sm bg-white px-4 py-3 hover:text-blue-400`} id={flt}>
                {flt}
              </a>
            )
            )
          }
        </div>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {/* user */}
        <div className='flex p-4 rounded-xl cursor-pointer gap-x-4 hover:border-blue-400 border-2 hover:shadow-lg border-transparent'>
          <img
            src="./src/assets/image/girl1.jpg"
            className='size-24 rounded-full'
            alt=""
          />

          <div>
            <h3 className='font-Poppins font-black'>Sophie</h3>
            <p className='font-Poppins text-sm'>Student</p>
            <div className='mt-4 space-x-2'>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>React</span>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>Javascript</span>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>Node.js</span>
            </div>
          </div>
        </div>
        {/* user */}
        <div className='flex p-4 rounded-xl cursor-pointer gap-x-4 hover:border-blue-400 border-2 hover:shadow-lg border-transparent'>
          <img
            src="./src/assets/image/girl2.jpg"
            className='size-24 rounded-full object-fill'
            alt=""
          />

          <div>
            <h3 className='font-Poppins font-black'>Sophie</h3>
            <p className='font-Poppins text-sm'>Student</p>
            <div className='mt-4 space-x-2'>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>React</span>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>Javascript</span>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>Node.js</span>
            </div>
          </div>
        </div>

        {/* user */}
        <div className='flex p-4 rounded-xl cursor-pointer gap-x-4 hover:border-blue-400 border-2 hover:shadow-lg border-transparent'>
          <img
            src="./src/assets/image/girl1.jpg"
            className='size-24 rounded-full'
            alt=""
          />

          <div>
            <h3 className='font-Poppins font-black'>Sophie</h3>
            <p className='font-Poppins text-sm'>Student</p>
            <div className='mt-4 space-x-2'>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>React</span>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>Javascript</span>
              <span className='inline-block rounded-full text-xs text-[%516FD4] border-[1px] border-slate-500 px-1 py-[2px] text-blue-500'>Node.js</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default UsersList