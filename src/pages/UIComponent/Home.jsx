import UsersList from "@components/UITemplate/Five/UsersList"
import ReviewForm from "@components/UITemplate/Four/ReviewForm"
import UserProfile from "@components/UITemplate/One/UserProfile"
import Collections from "@components/UITemplate/Three/Collections"
import JobList from "@components/UITemplate/Two/JobList"
import ParentMenu from "../ParentMenu/ParentMenu"

function Home() {
  window.scrollTo(0, 0);
  
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-[url('./src/assets/images/uibg1.jpg')] bg-fixed bg-cover py-9">
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