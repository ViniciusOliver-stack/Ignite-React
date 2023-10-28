import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div className="max-w-[1184px] h-screen mx-auto my-20 px-10 py-10 bg-gray_color-700 rounded-lg flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}
