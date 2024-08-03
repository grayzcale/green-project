import Conversation from "../components/Conversation";
import { conversations } from "../assets/conversations";
import SearchBar from "../components/SearchBar";
const Forum = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-5">
        <SearchBar info={conversations} />
      </div>
      <button className="fixed bottom-28 right-5 p-4 bg-[#9FDEEB] rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          aria-hidden="true"
          className="w-6 h-6"
          data-slot="icon"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      {conversations.map((conv, ind) => (
          <Conversation
            id={ind}
            key={ind}
            title={conv.title}
            body={conv.body}
            up={conv.up}
            down={conv.down}
            comment={conv.comment}
          />
      ))}
    </div>
  );
};

export default Forum;
