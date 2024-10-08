const Tips = (props) => {
  return (
    <div className="flex justify-center space-x-5 py-2  px-5 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-60 h-30"
        viewBox="0 0 32 32"
      >
        <path
          fill="#31CFFF"
          d="M29 23.5c0 .28-.22.5-.5.5H28v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V24h-.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v.5h.5c.28 0 .5.22.5.5z"
        />
        <path
          fill="#5FFFBA"
          d="M8 24.5c0 .28-.22.5-.5.5H6v1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V25H3.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H5v-1.5c0-.28.22-.5.5-.5s.5.22.5.5V24h1.5c.28 0 .5.22.5.5zM30 5.5c0 .28-.22.5-.5.5H28v1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V6h-1.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H27V3.5c0-.28.22-.5.5-.5s.5.22.5.5V5h1.5c.28 0 .5.22.5.5z"
        />
        <path
          fill="#31CFFF"
          d="M7 5.5c0 .28-.22.5-.5.5H6v.5c0 .28-.22.5-.5.5S5 6.78 5 6.5V6h-.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H5v-.5c0-.28.22-.5.5-.5s.5.22.5.5V5h.5c.28 0 .5.22.5.5z"
        />
        <path
          fill="#FFD561"
          d="M22.96 10.73c-.02-.24-.06-.48-.11-.71V10a7.487 7.487 0 0 0-3.58-5c-.14-.09-.289-.16-.439-.23a7.038 7.038 0 0 0-1.72-.61c-.2-.05-.4-.08-.601-.11h-.01a7.5 7.5 0 0 0-6.5 7.43c0 1.37.36 2.65 1 3.75.65 1.13 1.91 3.01 3 4.6v-5.92c-.16.05-.32.09-.5.09-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5V21h1v-8.5c0-.83.67-1.5 1.5-1.5.68 0 1.25.45 1.43 1.07.62.18 1.07.75 1.07 1.43 0 .83-.67 1.5-1.5 1.5-.18 0-.34-.03-.5-.09V21h.19c.76-1.09 1.75-2.54 2.59-3.82.1-.14.189-.28.27-.42.38-.58.71-1.11.95-1.53.64-1.1 1-2.38 1-3.75 0-.26-.01-.5-.04-.75z"
        />
        <path
          fill="#2D2220"
          d="M22.03 6H20.6a7.25 7.25 0 0 1 1.971 3h1.069a8.38 8.38 0 0 0-1.61-3z"
        />
        <path
          fill="#BCBCBC"
          d="M18 22v1h-3v-1h3zM15 24h3v1h-3zM15 26h3v.95c0 .71-.76 1.39-1.5 1.76-.74-.37-1.5-1.05-1.5-1.76V26z"
        />
        <path
          fill="#2D2220"
          d="M28 22.5c0 .28-.22.5-.5.5H27v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V23h-.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h.5v-.5c0-.28.22-.5.5-.5s.5.22.5.5v.5h.5c.28 0 .5.22.5.5zM7 23.5c0 .28-.22.5-.5.5H5v1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V24H2.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H4v-1.5c0-.28.22-.5.5-.5s.5.22.5.5V23h1.5c.28 0 .5.22.5.5zM29 4.5c0 .28-.22.5-.5.5H27v1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V5h-1.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H26V2.5c0-.28.22-.5.5-.5s.5.22.5.5V4h1.5c.28 0 .5.22.5.5zM6 4.5c0 .28-.22.5-.5.5H5v.5c0 .28-.22.5-.5.5S4 5.78 4 5.5V5h-.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H4v-.5c0-.28.22-.5.5-.5s.5.22.5.5V4h.5c.28 0 .5.22.5.5zM22.87 15.68c.72-1.25 1.13-2.7 1.13-4.24 0-.49-.04-.97-.12-1.44h-1.03c.1.48.15.97.15 1.48 0 1.37-.36 2.65-1 3.75-.82 1.42-2.61 4.04-3.81 5.77H17v-7.09c.16.05.32.09.5.09.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5V21h-1v-8.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5c.18 0 .34-.04.5-.09V21h-1.19c-1.2-1.73-2.99-4.35-3.81-5.77-.64-1.1-1-2.38-1-3.75 0-4.14 3.36-7.5 7.5-7.5 1.37 0 2.65.37 3.75 1.02h1.79a8.436 8.436 0 0 0-5.54-2.06c-4.69 0-8.5 3.81-8.5 8.5 0 1.54.41 2.99 1.13 4.24.84 1.44 2.54 4.02 3.87 5.99V23h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h.5v1h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h.5v.95C12 28.5 14.29 30 15.5 30s3.5-1.5 3.5-3.05V26h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H19v-1h.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5H19v-1.33c1.33-1.97 3.03-4.55 3.87-5.99zm-5.37-3.69a.5.5 0 0 1 .49.5c0 .28-.221.5-.49.5s-.49-.22-.49-.5c0-.27.22-.5.49-.5zm-4 1.01a.5.5 0 0 1-.49-.5c0-.28.22-.5.49-.5s.49.22.49.5a.5.5 0 0 1-.49.5zM18 26.95c0 .71-.76 1.39-1.5 1.76-.36.18-.72.29-1 .29-.83 0-2.5-1-2.5-2.05V26h5v.95zM18 25h-5v-1h5v1zm0-2h-5v-1h5v1z"
        />
      </svg>
      <p className="flex justify-center items-center">{props.tips}</p>
    </div>
  );
};

export default Tips;
