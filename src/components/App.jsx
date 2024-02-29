import { Layout } from "../components/Layout/Layout";
import { AppBar } from "../components/AppBar/AppBar";
import { TaskList } from "../components/TaskList/TaskList";
import { TaskForm } from "../components/TaskForm/TaskForm";
import { fetchTasks } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const App = () => {
   
  const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);
   const error = useSelector(selectError);

   useEffect(() => {
     dispatch(fetchTasks());
   }, [dispatch]);


  return (
      <Layout>
         <AppBar />
         <TaskForm />
          {isLoading && !error && <b>Request in progress...</b>}
          <TaskList />
      </Layout>
  );
};
