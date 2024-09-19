import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";

const Home = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen((prev) => !prev);
	};

	return (
		<div className='flex flex-col sm:flex-row h-screen rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			{/* Toggle button for mobile view */}
			<button
				className='sm:hidden p-2 bg-sky-500 text-white'
				onClick={toggleSidebar}
			>
				Toggle Sidebar
			</button>

			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} transition-transform duration-300 ease-in-out h-full w-64 bg-gray-800 border-r border-slate-500 sm:static sm:translate-x-0 sm:h-auto`}
			>
				<Sidebar />
			</div>

			{/* Main Content */}
			<div className='flex-1 h-full overflow-auto'>
				<MessageContainer />
			</div>
		</div>
	);
};

export default Home;
