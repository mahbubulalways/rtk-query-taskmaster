import  { useState } from 'react';
import AddTaskModal from '../tasks/AddTaskModal';
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MenuDropdown from '../ui/MenuDropdown';
const Navbar = () => {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-3xl">Tasks</h1>
          </div>
          <div className="flex gap-5">
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10  grid place-content-center text-secondary hover:text-white transition-all">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <button className="border-2 border-secondary/20 hover:border-primary hover:bg-primary rounded-xl h-10 w-10 grid place-content-center text-secondary hover:text-white transition-all">
              <BellIcon className="h-6 w-6" />
            </button>
            <button   onClick={()=>setIsOpen(pre=>!pre)} className="btn btn-primary">Add Task</button>
            {
              isOpen && <AddTaskModal isOpen={isOpen} setIsOpen={ setIsOpen } title='Task management' />
            }
           <MenuDropdown>
           <div className="h-10 w-10 rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
                alt=""
                className="object-cover h-full w-full "
              />
            </div>
           </MenuDropdown>
            
          </div>
        </div>
        </div>
    );
};

export default Navbar;