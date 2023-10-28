import { Scroll, Timer } from '@phosphor-icons/react'
import LogoIgnite from '../../assets/logo-ignite.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <img
        src={LogoIgnite}
        alt="Dois triângulos virados para cima com a cor verde"
      />
      <nav className="flex gap-8 items-center">
        <NavLink
          to="/"
          title="Timer"
          className="border-b-[3px] pb-2 pt-2 border-transparent hover:border-b-green_color-500 aria-[current=page]:text-green-500"
        >
          <Timer size={28} />
        </NavLink>
        <NavLink
          to="/history"
          title="History"
          className="border-b-[3px] pb-2 pt-2 border-transparent hover:border-b-green_color-500 aria-[current=page]:text-green-500"
        >
          <Scroll size={28} />
        </NavLink>
      </nav>
    </header>
  )
}
