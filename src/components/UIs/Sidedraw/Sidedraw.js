import Auxs from "../../../hocs/Auxs/Auxs";
import Navigation from "../Navigation/Navigation";

const Sidedraw = ({ open, close, user }) =>{
    // Calculate the top position for the Sidedraw
    const topPosition = open ? '82px' : '-100%';

    return(
        <Auxs>
            {open && <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex 
                justify-center items-center inset-0" onClick={close}></div>}
            <div className={`text-indigo-100 w-screen h-screen max-w-xs bg-gray-900 flex flex-col content-between
                fixed left-0 transform transition-transform duration-2000 ease-in shadow-lg`} 
                style={{ top: topPosition }}>
                <h1 className="py-2 pl-2 border-b hover:text-lg">{user.email} || Role: {user.role}</h1>
                <nav className="pt-0 px-0">
                    <Navigation
                        user={user}
                        base={user.role === 'Super' ? '/dashboard/super' : user.role === 'Admin' ? 
                            '/dashboard/admin' : user.role === 'User' ? '/dashboard/user' : 
                            '/dashboard/student'} close={close} />
                </nav>
            </div>
        </Auxs>
    );
};

export default Sidedraw;