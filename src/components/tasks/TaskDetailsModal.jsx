
import Modal from "../ui/Modal";
import {  useSelector } from "react-redux";


const TaskDetailsModal = ({ isOpen, setIsOpen, taskId,title }) => {
 const {usersTasks}=useSelector(state=>state.tasks)
 const specificTask = usersTasks?.find(task=>task.id === taskId)
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
      <h1 className="text-xl py-2 font-semibold text-center">{title}</h1>
       <div className="space-y-2">
       <h1 className="text-2xl font-semibold">{specificTask.title}</h1>
        <h1>{specificTask.description}</h1>
        <p className="text-red-600 py-2">Deadline: {specificTask?.deadline}</p>
       </div>
        <div className="flex justify-end">
        <button
          onClick={() => setIsOpen((pre) => !pre)}
          className="bg-red-600 px-5 py-1 hover:bg-red-700 rounded-md  text-white"
        >
          Cancel
        </button>
        </div>
      </Modal>
    </div>
  );
};

export default TaskDetailsModal;
