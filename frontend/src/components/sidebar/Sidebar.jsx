import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<div
			className={`fixed top-0 left-0 transform ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			} transition-transform duration-300 ease-in-out h-full w-64 bg-gray-800 border-r border-slate-500 sm:static sm:translate-x-0 sm:h-auto`}
		>
			{/* Close Button for Mobile View */}
			<div className='flex justify-between items-center p-4 sm:hidden'>
				<h2 className='text-white text-lg'>Chat</h2>
				<button onClick={toggleSidebar} className='text-white'>
					&times;
				</button>
			</div>
			{/* Search Input */}
			<SearchInput />
			<div className='divider px-3'></div>
			{/* Conversations List */}
			<Conversations />
			{/* Logout Button */}
			<LogoutButton />
		</div>
	);
};

export default Sidebar;


// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
