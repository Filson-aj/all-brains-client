
const ConfirmatoryBox = props => {
    const { open, message, title, close, confirm } = props;
  
    return (
        <div>
            {open && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed inset-0 bg-gray-800 opacity-90"></div>
                <div className="relative bg-white w-full max-w-md rounded-lg shadow-lg z-10">
                    <div className="absolute top-0 right-0">
                        <button onClick={close} className="text-gray-400 hover:text-gray-600 p-2">
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    className="heroicon-ui"
                                    d="M6.7 5.3a1 1 0 0 1 1.4 0L12 10.6l3.9-5.3a1 1 0 1 1 1.4 1.4l-5 6.7a1 
                                        1 0 0 1-1.4 0l-5-6.7a1 1 0 0 1 0-1.4zm0 12.4a1 1 0 0 0 1.4 0L12 13.4l3.9 
                                        5.3a1 1 0 0 0 1.4-1.4l-5-6.7a1 1 0 0 0-1.4 0l-5 6.7a1 1 0 0 0 0 1.4z"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="text-center pt-4">
                        <h2 className="text-xl font-bold mb-4 border-b pb-2 text-gray-800">{title}</h2>
                        <p className="text-gray-700 mb-4">{message}</p>
                        <div className="flex justify-center p-2">
                            <button
                                onClick={confirm}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 
                                    rounded-lg mr-2" >
                                Confirm
                            </button>
                            <button
                                onClick={close}
                                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 
                                rounded-lg">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default ConfirmatoryBox;
