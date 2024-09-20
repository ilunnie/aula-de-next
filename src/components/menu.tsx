import React from 'react'
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

type IMenu = {
    op1: string;
    op2: string;
}

const Menu = ({op1, op2}: IMenu) => {
  return (
    <nav>
        <Link href={ROUTES.home}>{op1}</Link>
        <Link href={ROUTES.hookPage}>{op2}</Link>
        
    </nav>
  )
}

export default Menu;