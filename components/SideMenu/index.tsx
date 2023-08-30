'use client';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './styles.module.scss'

function SideMenu({openState, setOpenState}: {openState: boolean, setOpenState: Dispatch<SetStateAction<boolean>>}) {
  return (
    <Menu isOpen={openState}>
      <div className={styles.sideMenu}>
        <Link href='/blog'>Blog</Link>
        <Link href='/blog'>Portfolio</Link>
      </div>
    </Menu>
  )
}

export default SideMenu