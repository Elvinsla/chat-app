const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-3 items-center'>
				<div className='skeleton w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0'></div>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-32 sm:w-40'></div>
					<div className='skeleton h-4 w-24 sm:w-40'></div>
				</div>
			</div>
			<div className='flex gap-3 items-center justify-end'>
				<div className='flex flex-col gap-1'>
					<div className='skeleton h-4 w-32 sm:w-40'></div>
				</div>
				<div className='skeleton w-8 h-8 sm:w-10 sm:h-10 rounded-full shrink-0'></div>
			</div>
		</>
	);
};
export default MessageSkeleton;
