// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import CollegeProfile from "./pages/CollegeProfile";
import App from "./pages/App"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    // {
    //     path: "/about",
    //     element: <About />,
    //     errorElement: <ErrorPage />
    // },
    // {
    //     path: "/login",
    //     element: <Login />,
    //     errorElement: <ErrorPage />
    // },
    {
        path: "/colleges/:id",
        element: <CollegeProfile />,
        errorElement: <ErrorPage />
    }
    
];

export default routes;