import ErrorPage from "./pages/ErrorPage";
import App from "./pages/App"
import TaskList from "./pages/TaskList"
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
         
        ]
    },
    
    
];

export default routes;