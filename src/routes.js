// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import CollegeProfile from "./pages/CollegeProfile";
import App from "./pages/App"
import TaskList from "./pages/TaskList"
import MyColleges from "./pages/MyColleges"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:"/colleges/:id",
                element: <CollegeProfile />
            }
        ]
    },
    {
        path: "/tasks",
        element: <TaskList />,
        errorElement: <ErrorPage />
    },
    {
        path: "/my-colleges",
        element: <MyColleges />,
        errorElement: <ErrorPage />
    },
    {
        path: "/colleges/:id",
        element: <CollegeProfile />,
        errorElement: <ErrorPage />
    }
    
];

export default routes;