import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className='mt-auto flex justify-center sm:justify-start'>
			{!loading ? (
				<BiLogOut
					className='w-8 h-8 sm:w-6 sm:h-6 text-white cursor-pointer'
					onClick={logout}
				/>
			) : (
				<span className='loading loading-spinner w-6 h-6'></span>
			)}
		</div>
	);
};
export default LogoutButton;
