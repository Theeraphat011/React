import { Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <h1>Dash borad</h1>
      <Link to={'/dashboard/task'}>Go To task</Link>
    </div>
  )
}
export default Dashboard