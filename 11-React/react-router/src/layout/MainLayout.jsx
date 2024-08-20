import { Outlet } from 'react-router-dom'
import { CustomNavbar } from '../components/CustomNavbar'
import { UserProvider } from '../context/UserProvider'

export const MainLayout = () => {
  return (
    <UserProvider>
        <CustomNavbar />

        <main className="container mx-auto px-4 max-w-screen-xl">
            <Outlet />
        </main>
    </UserProvider>
  )
}
