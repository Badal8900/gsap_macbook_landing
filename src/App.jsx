import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import ProductViewer from "./components/ProductViewer"
import {gsap} from "gsap"
import {ScrollSmoother } from "gsap/all"
gsap.registerPlugin(ScrollSmoother)
const App = () => {
return(
<main>
<NavBar />
<Hero />
<ProductViewer />
</main>
)
}
export default App