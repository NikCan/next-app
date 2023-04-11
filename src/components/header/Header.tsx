import {FC} from "react"
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/icons8-travel.png'
import s from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={s.header}>
      <Image
        height={100}
        width={100}
        src={logo}
        alt={'logo'}
        placeholder={'blur'}
      />
      <nav>
        <ul>
          <li><Link href={'/'}>Главная</Link></li>
          <li><Link href={'/tours'}>Туры</Link></li>
          <li><Link href={'/services'}>Услуги</Link></li>
          <li><Link href={'/contacts'}>Контакты</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

