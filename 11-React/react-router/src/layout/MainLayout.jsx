import { Outlet } from 'react-router-dom'
import { CustomNavbar } from '../components/CustomNavbar'
import { UserProvider } from '../context/UserProvider'
import { Toaster } from 'sonner'

export const MainLayout = () => {
  return (
    <UserProvider>
        <CustomNavbar />

        <main className="container mx-auto px-4 max-w-screen-xl">
            <Outlet />
        </main>

        <Toaster />
    </UserProvider>
  )
}
