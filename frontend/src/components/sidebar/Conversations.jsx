import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	return (
		<div className='py-2 flex flex-col overflow-auto max-h-screen sm:max-h-[500px]'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={getRandomEmoji()}
					lastIdx={idx === conversations.length - 1}
				/>
			))}

			{loading && (
				<div className='flex justify-center items-center py-4'>
					<span className='loading loading-spinner mx-auto'></span>
				</div>
			)}
		</div>
	);
};
export default Conversations;
