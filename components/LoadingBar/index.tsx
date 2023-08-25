'use client'
import NextNProgress from 'nextjs-progressbar';
import NProgress from "nprogress";
import { useEffect } from 'react';

type PushStateInput = [
    data: any,
    unused: string,
    url?: string | URL | null | undefined
];  

export default function LoadingBar() {
    useEffect(() => {
        NProgress.configure({ showSpinner: false });

        const handleAnchorClick = (event: MouseEvent) => {
            const targetUrl = new URL((event.currentTarget as HTMLAnchorElement).href);
            const targetPage = (event.currentTarget as HTMLAnchorElement).target
            const currentUrl = new URL(location.href);
            if (targetUrl !== currentUrl && targetUrl.hostname === currentUrl.hostname && targetUrl.pathname !== currentUrl.pathname && targetPage !== 'blank') {
              NProgress.start();
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
      
          window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target, thisArg, argArray: PushStateInput) => {
              NProgress.done();
              return target.apply(thisArg, argArray);
            },
          });
    })
    return (
        <NextNProgress color='#31d1b9' />
    )
}