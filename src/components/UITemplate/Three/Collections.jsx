
function Collections() {
  const TAGS = ['Profile', 'New York', 'Relax', 'Person', 'Fashion'];

  return (
    <div className="w-full rounded-lg bg-[#eff0f1] p-16 font-[#0E0e38] shadow-lg">
      <h1 className="font-Poppins text-3xl font-bold">Popular Collections</h1>

      <div className="mt-6 space-x-2">
        {
          TAGS.map(tag => (
            <a key={tag} className={`rounded-md mb-2 inline-block cursor-pointer bg-white px-4 py-3 hover:text-blue-400`} id={tag}>
              {tag}
            </a>
          )
          )
        }
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Card */}
        <div className="rounded-3xl bg-white p-6">
          <div>
            <img
              src="./src/assets/images/girl1.jpg"
              className="aspect-video w-full rounded-2xl object-cover object-top"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="./src/assets/images/girl1.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />

            <img
              src="./src/assets/images/girl1.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />

            <img
              src="./src/assets/images/girl1.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex pt-6 justify-between">
            <p className="font-Poppins font-medium">People</p>
            <p className="font-Poppins flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              144
            </p>
          </div>
        </div>
        {/* Card */}
        <div className="rounded-3xl bg-white p-6">
          <div>
            <img
              src="./src/assets/images/girl2.jpg"
              className="aspect-video w-full rounded-2xl object-cover object-top"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="./src/assets/images/girl2.jpg"
              className="aspect-video w-full rounded-2xl object-cover object-center"
            />

            <img
              src="./src/assets/images/girl2.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />

            <img
              src="./src/assets/images/girl2.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex pt-6 justify-between">
            <p className="font-Poppins font-medium">People</p>
            <p className="font-Poppins flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              144
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white p-6">
          <div>
            <img
              src="./src/assets/images/girl1.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <img
              src="./src/assets/images/girl1.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />

            <img
              src="./src/assets/images/girl1.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />

            <img
              src="./src/assets/images/girl1.jpg"
              className="aspect-video w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex pt-6 justify-between">
            <p className="font-Poppins font-medium">People</p>
            <p className="font-Poppins flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              144
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Collections