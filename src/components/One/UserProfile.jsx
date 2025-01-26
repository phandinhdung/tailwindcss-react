

function UserProfile() {
  return (
    <div className="flex w-[36rem] gap-x-4 rounded-lg p-12 bg-gray-50">
      <img 
        src="./src/assets/image/girl1.jpg"
        className="w-32 rounded-full border-[5px] border-[#f4be95] self-start"
      />
      <div className="space-y-7 text-left text-[#1c2b62] ">
        <div className="font-Poppins">
          <h1 className="text-3xl font-bold font-p f">Lisa</h1>
          <h2 className="mt-1">Real Artist</h2>
        </div>

        <div className="space-y-4">
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            4.7 Rating
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>

            55,555 reviews
          </p>
          <p className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline-block mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

            478 students
          </p>
        </div>

        <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eos, repellat repellendus, tenetur, vero officia impedit magni ipsam eum recusandae necessitatibus amet voluptas laborum placeat! Ullam voluptatum error eveniet soluta.</p>
        <button className="rounded-md border-2 border-[#c4cadf] p-2 bg-blue-300">Show more</button>
      </div>
    </div>
  )
}

export default UserProfile