import { navLinks } from "../constants"

const NavBar = () => {
return(
<header>
 <nav>
    <img src="logo.svg " alt="Logo" />
        <ul>
            {navLinks.map((link)=>(<li key={link.label}><a href="#{link.label}">{link.label}</a></li>) )
}
        
        </ul>
        <div className="flex-center gap-3" >
<button>
    <img src="/search.svg" alt="search" />
</button>
<butto >
    <img src="/cart.svg" alt="Cart" />
</butto>
        </div>
 </nav>

</header>
)
}
export default NavBar