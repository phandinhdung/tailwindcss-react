import { Link } from 'react-router-dom'

export default function ParentMenu() {
  return (
      <div className="flex gap-5 bg-gray-500 py-5 w-full rounded-md justify-center items-center">
        <Link className="bg-blue-400 px-5 py-1 rounded-md" to="/">UI Template</Link>
        <Link className="bg-blue-400 px-5 py-1 rounded-md" to="/coffeeStyle">Coffee style</Link>
        <Link className="bg-blue-400 px-5 py-1 rounded-md" to="/eCommerse">E-Commerse</Link>
      </div>
  )
}
