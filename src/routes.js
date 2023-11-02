import ErrorPage from "./pages/ErrorPage";
//import CollegeProfile from "./pages/CollegeProfile";
import App from "./pages/App"
import TaskList from "./pages/TaskList"
//import MyColleges from "./pages/MyColleges"
import Home from "./pages/Home"
import Quotes from "./pages/Quotes"


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
                
            },
            {
                path: "/tasks",
                element: <TaskList />
                
            },
            {
                path: "/inspo",
                element: <Quotes />
            },
            // {
            //     path: "/colleges/:id",
            //     element: <CollegeProfile />
            // }
        ]
    },
    
    
];

export default routes;