import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { images, urls } from '../../../assets/constants/data'
import { useLogoutMutation } from '../../../features/Auth/Login/authApiSlice'
import DropdownMenu from '../../UIs/Navigations/Navigation/DropdownMenu/DropdownMenu'
import ConfirmatoryBox from '../../UIs/ConfirmatoryBox/ConfirmatoryBox'

const DashboardHeader = ({ user }) => {
  const [onLogout, setOnLogout] = useState(false),
    [logout] = useLogoutMutation(),
    navigate = useNavigate()

  const handleConfirm = () =>{
    setOnLogout(false)
    logout()
    navigate(urls.root)
  }
  return (
    <>
      {onLogout && <ConfirmatoryBox open message={`Do really want to signout?`}
        title={`Confirm Signout`} close={() => setOnLogout(false)} confirm={handleConfirm} />}
      <header className='flex bg-white border shadow-lg pt-4 pl-4 mb-2'>
        <div className='w-3/4 mb-4'>
            <div className="flex items-center">
                <img src={images.logo} alt="NACEST Logo" className="w-16 h-16 mr-2 rounded-full border
                    border-2 border-gray-200 bg-gray-200 shadow-lg" />
                <span className="text-gray-800 hover:text-gray-400 text-xl font-semibold">
                    NACEST Makurdi </span>
            </div>
        </div>
        <div className='flex px-4 py-2 justify-end w-1/4'>
            <DropdownMenu user={user} logout={() => setOnLogout(true)} />
        </div>
      </header>
    </>
  )
}

export default DashboardHeader