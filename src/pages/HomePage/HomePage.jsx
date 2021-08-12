import { BrowserRouter as Route } from "react-router-dom"
import UploadCard from "../../components/UploadCard/UploadCard"

export default function HomePage( {upload} ) {
    
    return (
        <main>
            <nav><i className="fas fa-video">Live</i></nav>
            <nav>Following</nav>
            <nav>For You</nav>
            {/* <Route>
                <UploadCard />
            </Route> */}
        </main>
    )
}


// const [colors, setColors] = useState(
//     style={format: colors,
//         --background-color: 'rgb(0,0,0)'}
// )