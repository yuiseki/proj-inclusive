import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useEffect, useState } from "react";
import pages from "../../public/data/pages.json";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [pinnedPages, setPinnedPages] = useState<string[]>([]);
  useEffect(() => {
    const title = pages.pages
      .filter((page: { pin: number }) => {
        return 0 < page.pin;
      })
      .map((page: { title: string }) => {
        return page.title;
      });
    setPinnedPages(title);
  }, []);
  console.log(router.route);
  console.log(router.query);
  return (
    <div className="root">
      <h1>{process.env.siteName}</h1>
      <nav>
        <ul className="nav nav-pills">
          {pinnedPages.map((page) => {
            switch (page) {
              case "index":
                return (
                  <li key={page} className="nav-item">
                    <Link href="/">
                      <a
                        role="button"
                        className={
                          router.pathname === "/"
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                );
              default:
                return (
                  <li key={page} className="nav-item">
                    <Link href={"/" + page}>
                      <a
                        role="button"
                        className={
                          router.query.title === page
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        {page}
                      </a>
                    </Link>
                  </li>
                );
            }
          })}
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
