import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
  return (
    <>
    <Link to='/'>Fast Pizza & Co.</Link>
    <SearchOrder />
    </>
  )
}

export default Header