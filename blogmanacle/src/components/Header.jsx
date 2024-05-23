import { Button, Navbar,TextInput } from "flowbite-react"
import { Link,useLocation} from "react-router-dom"
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'

const Header = () => {

  const path =useLocation.pathname;

  return (
    <Navbar className="border-b-2" >

    <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
    <span className="px-2 py-1  text-white">
      <img className="h-10 w-auto" src="Images/mSELL_Logo.png" alt="msell-logo" />
    </span>
    </Link>

    <form>
      <TextInput
       type="text"
       placeholder="Search..."
       rightIcon={AiOutlineSearch}
       className="hidden lg:inline"
      />
    </form>

    <Button className="w-12 h-10 lg:hidden" color="gray" pill>
      <AiOutlineSearch/>
    </Button>
    
    <div className="flex gap-2 md:order-2">

      <Button className="w-12 h-10 hidden sm:inline" 
      color="gray" 
      pill>
      <FaMoon/>
      </Button>

      <Link to="/sign-in">
          <Button color="gray" outline>
          SignIn
          </Button>
      </Link>
      <Navbar.Toggle/>

      </div>

      <Navbar.Collapse  >

       <Navbar.Link active={path === "/"} as={"div"} >
        <Link to='/' style={{ fontWeight: 'bold' }} >Home</Link>
        </Navbar.Link>

        <Navbar.Link  active={path ==="/about"} as={"div"}>
          <Link to='/about' style={{ fontWeight: 'bold' }}>About</Link>
        </Navbar.Link>

        <Navbar.Link  active={path ==="/project"} as={"div"}>
          <Link to='/' style={{ fontWeight: 'bold' }}>Project</Link>
        </Navbar.Link>

        </Navbar.Collapse>
  </Navbar>
     )
}

export default Header