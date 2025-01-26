import Input from './Input'
import Review from './Review'

function ReviewForm() {
  return (
    <div className='w-[42rem] bg-white p-8 rounded-md space-y-5'>
      <h1 className='font-Poppins text-2xl font-black'> Overall rating</h1>

      <div>
        <Review/>
        <p className='text-sm font-normal'>Click to rate</p>
      </div>
      <Input
        title='Review title'
        placeholder='Example: Easy to use'
        type="text"
      />

      <p>Would you recommend this product to a friend?</p>
      <div className='flex gap-8'>
        <div>
          <input className='scale-150 mr-2' type="radio" id="yes" name='product' value='yes' />{" "}
          <label className='cursor-pointer' htmlFor="yes">Yes</label>
        </div>
        <div>
          <input className='scale-150 mr-2' type="radio" id="no" name='product' value='no' />{" "}
          <label className='cursor-pointer' htmlFor="no">No</label>
        </div>
      </div>
      <Input
        title='Product review'
        placeholder='Example: Since I bought this a month ago, it has been used a lot. What I like best/what is worst about this product is...'
        type="textarea"
      />

      <div className='flex gap-x-2'>
        <div className='grow'>
          <Input title="Nickname" placeholder="Example: bob27" type="text" />
        </div>
        <div className='grow'>
          <Input
            title="Email address (will not be published)"
            placeholder="Example: your@email.com"
            type="text"
          />
        </div>
      </div>
      <div>
        <input className='scale-150 mr-2' type="checkbox" id="accept" name='accept' value='accept' />{" "}
        <label className='cursor-pointer' htmlFor="accept">I accept the terms and conditions</label>
      </div>
      <p className=''>
        You will be able to receive emails in connection with this review . Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi voluptatem, molestiae omnis voluptas in, perferendis velit dolorum magni, voluptatibus eos! Delectus, exercitationem? Eaque ex molestiae nulla incidunt vero odio.
      </p>

      <button className='rounded-md bg-[#121633] p-4 text-white mt-5'>Submit product review</button>
    </div>
  )
}

export default ReviewForm