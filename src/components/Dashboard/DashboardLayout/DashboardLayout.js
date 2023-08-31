import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import useAuth from '../../../hooks/useAuth'
import { menus } from '../../../assets/constants/data'
import { setSidedraw } from '../../../app/slice/sidedrawSlice'
import { selectCurrentSidedraw } from '../../../app/slice/sidedrawSlice'
import Sidedraw from '../../UIs/Navigations/Navigation/Sidedraw/Sidedraw'
import DashboardHeader from '../DashboardHeader/DashboardHeader'

const DashboardLayout = () => {
    const { email, status } = useAuth(),
        user = {
            email,
            role: status === 'Officer' ? 'Exams Officer' : status
        },
        dispatch = useDispatch(),
        open = useSelector(selectCurrentSidedraw)

    let menu = [...menus?.student]
    if(status === 'Admin'){
        menu = [...menus?.admin]
    }else if (status === 'Officer'){
        menu = [...menus?.officer]
    }else if(status === 'Lectuere'){
        menu = [...menus?.lecturer]
    }

    return (
        <>
            <div className='flex gap-6 bg-gray-100 text-gray-800'>
                <Sidedraw menus={menu} open={open} onOpen={() =>dispatch(setSidedraw({ open: !open }))} />
                <main className='m-3 text-gray-900 flex-grow'>
                    <div className='flex flex-col w-full min-h-screen'>
                        <DashboardHeader user={user} />
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}

export default DashboardLayout