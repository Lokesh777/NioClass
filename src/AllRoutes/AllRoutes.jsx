import {Routes,Route} from "react-router-dom"
import Home from "../Home/Home"
import Questions from "../Questions/Question"
import Solution from "../solution/AllSolutions"
export default function AllRoutes(){


    return (
        <div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/questions" element={<Questions />} />
                <Route path="/solution" element={<Solution />} />

            </Routes>
               
        </div>
    )
}