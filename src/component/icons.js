const Home = ({ logoWidth }) => {
  return (
    <svg
      width={logoWidth}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="#FFFFFF">
        <g>
          <path
            d="M12,3l-9.5,9.5c-0.3,0.3-0.3,0.7,0,1l0,0c0.3,0.3,0.7,0.3,1,0L12,5c0,0,8.5,8.5,8.5,8.5c0.3,0.3,0.7,0.3,1,0v0
		c0.3-0.3,0.3-0.7,0-1L12,3z"
          ></path>
          <path d="M12,6l-7,7v8h5v-4c0-1.1,0.9-2,2-2s2,0.9,2,2v4h5v-8L12,6z"></path>
        </g>
      </g>
    </svg>
  );
};

const Setting = ({ logoWidth }) => {
  return (
    <svg
      width={logoWidth}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="#FFFFFF">
        <path d="M3 13h4v6c0 1.1-.9 2-2 2s-2-.9-2-2v-6zm4-8c0-1.1-.9-2-2-2s-2 .9-2 2v6h4V5zm7 0c0-1.1-.9-2-2-2s-2 .9-2 2v3h4V5zm-4 14c0 1.1.9 2 2 2s2-.9 2-2v-9h-4v9zM21 5c0-1.1-.9-2-2-2s-2 .9-2 2v9h4V5zm-4 14c0 1.1.9 2 2 2s2-.9 2-2v-3h-4v3zM2 11v2h1v-2H2zm5 2h1v-2H7v2zm2-5v2h1V8H9zm5 2h1V8h-1v2zm2 4v2h1v-2h-1zm5 0v2h1v-2h-1z"></path>
      </g>
    </svg>
  );
};

const Account = ({ logoWidth }) => {
  return (
    <svg
      width={logoWidth}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="#FFFFFF">
        <path d="M18.99 8H18V7c0-3.31-2.69-6-6-6S6 3.69 6 7v1h-.99C3.9 8 3 8.9 3 10.01v10.98C3 22.1 3.9 23 5.01 23h13.98c1.11 0 2.01-.9 2.01-2.01V10.01C21 8.9 20.1 8 18.99 8zM8 7c0-2.21 1.79-4 4-4s4 1.79 4 4v1H8V7zm6 12h-4v-4c0-1.1.9-2 2-2s2 .9 2 2v4z"></path>
      </g>
    </svg>
  );
};

const Category = ({ logoWidth }) => {
  return (
    <svg
      width={logoWidth}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g fill="#FFFFFF">
        <circle cx="7" cy="7" r="4"></circle>
        <circle cx="17" cy="7" r="4"></circle>
        <circle cx="7" cy="17" r="4"></circle>
        <circle cx="17" cy="17" r="4"></circle>
      </g>
    </svg>
  );
};

export { Home, Setting, Account, Category };
