import { useSelector } from "react-redux";
import TaskCard from "../components/tasks/TaskCard";
import { useGetTasksQuery } from "../redux/service/tasks/taskApiSlice";

const Archive = () => {
    const {data,} = useGetTasksQuery(
        
      )
    const archive =data?.data?.filter(task=>task.status==='archive')
    return (
        <div className=" w-[95%] mx-auto py-10">
            <h1 className="text-3xl font-semibold">Archives</h1>
         <div className="grid grid-cols-4 gap-8 py-5">
         {
            archive?.map(task=>< TaskCard key={task.id} task={task} />)
          }
         </div>
        </div>
    );
};

export default Archive;