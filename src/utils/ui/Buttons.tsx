export const ConnectButton = ({ onClick, disabled }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
  >
    Connect
  </button>
);

export const InstallFlaskButton = ({ onClick, disabled }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
  >
    Install Flask
  </button>
);

export const ReconnectButton = ({ onClick, disabled }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
  >
    Reconnect
  </button>
);

export const SendHelloButton = ({ onClick, disabled }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
  >
    Send Hello
  </button>
);
