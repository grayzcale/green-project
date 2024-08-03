import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:mx-4 my-8 w-screen flex flex-col items-center space-y-4">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <h3>For all enquireies, please email us using the form below.</h3>
      <form className="flex flex-col w-96">
        <label>
          Name:
          <input
            className="border-solid border-2 ml-2 "
            type="text"
            name="name"
          />
        </label>
        <label>
          Email:
          <input
            className="border-solid border-2 ml-2 w-48"
            type="text"
            name="email"
          />
        </label>
        <label>How can we help you?</label>
        <input
          className="border-solid border-2 ml-2 h-96"
          type="text"
          name="inquiry"
        />
      </form>
      <button
        className="border-solid border-2 w-40 justify-self-center"
        onClick={() => navigate("/email_sent")}
      >
        Submit
      </button>
    </div>
  );
};

export default Contact;
