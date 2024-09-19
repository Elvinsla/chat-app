const MessageSkeleton = () => {
	return (
		<>
			{/* Message from another user (left-aligned) */}
			<div className='flex gap-3 items-center mb-4'>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1 max-w-[70%] sm:max-w-[60%]'>
					<div className='skeleton h-4 w-full'></div>
					<div className='skeleton h-4 w-3/4'></div>
				</div>
			</div>

			{/* Message from the user (right-aligned) */}
			<div className='flex gap-3 items-center justify-end mb-4'>
				<div className='flex flex-col gap-1 max-w-[70%] sm:max-w-[60%] text-right'>
					<div className='skeleton h-4 w-full'></div>
				</div>
				<div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
			</div>
		</>
	);
};
export default MessageSkeleton;
