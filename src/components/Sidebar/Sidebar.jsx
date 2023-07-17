import Search from "./Search/Search"
import Hamburger from "./Hamburger/Hamburger"
import Menu from "./Menu/Menu"

function Sidebar() {
  return (
    <div>
      <Hamburger />
      <Search />
      <Menu />
    </div>
  )
}
export default Sidebar