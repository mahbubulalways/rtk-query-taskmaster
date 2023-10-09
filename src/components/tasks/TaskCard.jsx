import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { removeTask, updateStatus } from '../../redux/features/tasks/taskSlice';
import { useUpdateTaskStatusMutation } from '../../redux/service/tasks/taskApiSlice';


const TaskCard = ({task}) => {
    
  let updatedStatus;
  if(task.status==='pending'){
    updatedStatus='running';
  }
 else if (task.status==='running'){
    updatedStatus='done';
  }
 else{
  updatedStatus='archive';
 }


const [updateTask, {data}] =useUpdateTaskStatusMutation()

 const handleUpdateTask =(id)=>{

  updateTask({id,  data:{status:updatedStatus}})
 }
console.log(data);
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === 'High' ? 'text-red-500' : ''
        } ${task.priority === 'Medium' ? 'text-yellow-500' : ''} ${
          task.priority === 'Low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assign}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>
        <div className="flex gap-3">
          <button  title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button
            onClick={()=>handleUpdateTask(task._id)}
            title="update status"
          >
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
