import UsersList from "@components/Five/UsersList"
import ReviewForm from "@components/Four/ReviewForm"
import UserProfile from "@components/One/UserProfile"
import Collections from "@components/Three/Collections"
import JobList from "@components/Two/JobList"
import { Link } from "react-router-dom"

function Home() {

  return (
    <div className='flex flex-col items-center justify-center gap-5 bg-[#ab81db] py-9'>
      <div className="flex gap-5 bg-white p-10 rounded-md">
        <Link className="bg-purple-400 px-5 py-1 rounded-md" to="/coffeeStyle">Coffee style</Link>
        <Link className="bg-purple-400 px-5 py-1 rounded-md" to="/eCommerse">E-Commerse</Link>
      </div>

      <UsersList />
      <ReviewForm />
      <Collections />
      <JobList />
      <UserProfile />
    </div>
  )
}

export default Home