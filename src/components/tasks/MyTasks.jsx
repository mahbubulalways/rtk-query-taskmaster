import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, userTasks } from "../../redux/features/tasks/taskSlice";
import TaskDetailsModal from "./TaskDetailsModal";

const MyTasks = () => {
  const { tasks,usersTasks } = useSelector((state) => state.tasks);
  const { users } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [taskId,setTaskId] = useState(0)

  useEffect(() => {
    dispatch(userTasks(users?.name));
  }, [dispatch, users?.name,tasks]);
  

  const handleModal = (id) =>{
    setTaskId(id)
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {usersTasks?.map((task) => (
          <div
            key={task.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{task.title}</h1>
            <div className="flex gap-3">
              <button onClick={()=>handleModal(task.id) } className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: task.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done"
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
             
            </div>
          </div>
        ))}
      </div>
      {isOpen && 
                <TaskDetailsModal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  taskId={taskId}
                  title="Task Details"
                />
              }
    </div>
  );
};

export default MyTasks;
