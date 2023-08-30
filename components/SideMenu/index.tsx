'use client';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './styles.module.scss'
import Image from 'next/image';

function SideMenu({openState, setOpenState}: {openState: boolean, setOpenState: Dispatch<SetStateAction<boolean>>}) {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const targetUrl = new URL((event.currentTarget as HTMLAnchorElement).href);
      const targetPage = (event.currentTarget as HTMLAnchorElement).target
      const currentUrl = new URL(location.href);
      if (targetUrl !== currentUrl && targetUrl.hostname === currentUrl.hostname && targetUrl.pathname !== currentUrl.pathname && targetPage !== 'blank') {
        setOpenState(false);
      }
    };
    const handleMutation: MutationCallback = () => {
      const anchorElements = document.querySelectorAll("a");
      anchorElements.forEach((anchor) =>
        anchor.addEventListener("click", handleAnchorClick)
      );
    };

    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document, { childList: true, subtree: true });
  })
  return (
    <Menu isOpen={openState} width='60%'>
      <div className={styles.sideMenu}>
        <span>
          <Image src='/logo.svg' alt='FB' width={42} height={42} />
        </span>
        <Link href='/blog'>Blog</Link>
        <Link href='/portfolio'>Portfolio</Link>
      </div>
    </Menu>
  )
}

export default SideMenu