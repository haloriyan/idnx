import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import FAQ from "./FAQ";
import News from "./News";
import Contact from "./Contact";
import Services from "./Services";
import Privacy from "./Privacy";
import Terms from "./Terms";
import ReturnPolicy from "./Return";

const PageRouter = () => {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/services" Component={Services} />
            <Route path="/about" Component={About} />
            <Route path="/privacy" Component={Privacy} />
            <Route path="/terms" Component={Terms} />
            <Route path="/return-policy" Component={ReturnPolicy} />
            <Route path="/faq" Component={FAQ} />
            <Route path="/news" Component={News} />
            <Route path="/contact" Component={Contact} />
        </Routes>
    )
}

export default PageRouter;