import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto flex justify-center sm:justify-start p-2'>
			{!loading ? (
				<BiLogOut
					className='w-8 h-8 text-white cursor-pointer transition-transform transform hover:scale-110'
					onClick={logout}
					title="Logout"
				/>
			) : (
				<span className='loading loading-spinner w-6 h-6'></span>
			)}
		</div>
	);
};

export default LogoutButton;
