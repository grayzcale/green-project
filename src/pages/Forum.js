import Conversation from "../components/Conversation";
import { conversations } from "../assets/conversations";
const Forum = () => {
  return (
    <div>
      <div className="ml-6">
        <button className="flex">
          New post
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
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
      </div>

      {conversations.map((conv, ind) => (
        <div id={ind} key={ind} className="flex flex-col space-x-5 border-2 rounded-lg m-5 p-5">
          <Conversation
            id={ind}
            title={conv.title}
            body={conv.body}
            up={conv.up}
            down={conv.down}
            comment={conv.comment}
          />
        </div>
      ))}
    </div>
  );
};

export default Forum;
