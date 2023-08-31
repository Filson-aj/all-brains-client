import useAuth from '../../hooks/useAuth'
import Overview from './Overview/Overview'

const Dashboard = () => {
    const { email, status } = useAuth(),
        user = {
            email,
            role: status === 'Officer' ? 'Exams Officer' : status
        }
    return(
        <Overview user={user} />
    )
}

export default Dashboard