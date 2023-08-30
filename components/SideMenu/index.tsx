'use client';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react';

function SideMenu() {
  const [openState, setOpenState] = useState(true);
  return (
    <Menu right isOpen={openState}>
      <Link href='/blog'>Blog</Link>
    </Menu>
  )
}

export default SideMenu