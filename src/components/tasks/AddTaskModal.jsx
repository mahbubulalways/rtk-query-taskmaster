import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";
import toast from "react-hot-toast";
import { usePostTasksMutation } from "../../redux/service/tasks/taskApiSlice";
const AddTaskModal = ({ isOpen, setIsOpen, title }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const [setPost, { data, isLoading }] = usePostTasksMutation();

  const onSubmit = (task) => {
   dispatch( setPost(task))
 
    // const result = dispatch(addTask(data));
    // console.log(result);
    
  };
console.log(data);
if (data?.success=== true) {
  toast.success(" Task added successfully !");
  setIsOpen(false);
}
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="mt-3">Title</h1>
          <input
            className="w-full mt-1 rounded-md"
            type="text"
            placeholder="Title"
            {...register("title", { required: true, maxLength: 80 })}
          />
          <h1 className="mt-3">Description</h1>
          <textarea
            className="w-full mt-1 rounded-md"
            type="text"
            placeholder="Description"
            {...register("description", { required: true, maxLength: 100 })}
          />
          <h1 className="mt-1">Deadline</h1>
          <input
            className="w-full mt-1 rounded-md"
            type="date"
            placeholder="Deadline"
            {...register("deadline", { required: true })}
          />
          <h1 className="mt-3">Assign to</h1>
          <select
            className="w-full mt-1 rounded-md"
            placeholder="Assign to"
            {...register("assign", { required: true })}
          >
            <option className="" value="Sabbir">
              Sabbir
            </option>
            <option className="" value="Shahin">
              Shahin
            </option>
            <option className="" value="Mahbubul Hasan">
              Mahbubul Hasan
            </option>
            <option className="" value="Hasan">
              Hasan
            </option>
            <option className="" value="Mezba">
              Mezba
            </option>
            <option className="" value="Mir Hussain">
              Mir Hussain
            </option>
          </select>
          <h1 className="mt-3">Priority</h1>
          <select
            className="w-full mt-1 rounded-md"
            placeholder=""
            {...register("priority", { required: true })}
          >
            <option className="" value="High">
              High
            </option>
            <option className="" value="Medium">
              Medium
            </option>
            <option className="" value="Low">
              Low
            </option>
          </select>

          <div className="flex justify-end gap-3 items-center mt-4">
            <button
              onClick={() => setIsOpen((pre) => !pre)}
              className="bg-red-600 px-5 py-1 hover:bg-red-700 rounded-md  text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 px-5 py-1 hover:bg-blue-700 rounded-md  text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
