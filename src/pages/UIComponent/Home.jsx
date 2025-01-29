import UsersList from "@components/UITemplate/Five/UsersList"
import ReviewForm from "@components/UITemplate/Four/ReviewForm"
import UserProfile from "@components/UITemplate/One/UserProfile"
import Collections from "@components/UITemplate/Three/Collections"
import JobList from "@components/UITemplate/Two/JobList"
import ParentMenu from "../ParentMenu/ParentMenu"

function Home() {

  return (
    <div className='flex flex-col items-center justify-center gap-5 bg-[#ab81db] py-9'>
      <UsersList />
      <ReviewForm />
      <Collections />
      <JobList />
      <UserProfile />

      <ParentMenu />
    </div>
  )
}

export default Home