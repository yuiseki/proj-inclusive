import { Line } from "@progfay/scrapbox-parser";
import Head from "next/head";
import Link from "next/link";
import { Lines } from "../scrapbox/Lines";

export const ScrapboxPageView: React.FC<{
  rawTitle: string;
  displayTitle: string;
  lines: Line[];
}> = ({ rawTitle, displayTitle, lines }) => {
  return (
    <>
      <h2>{displayTitle}</h2>
      <div className="page">
        <Lines lines={lines} />
      </div>
      <footer>
        <div>
          Scrapboxで編集 :{" "}
          <Link
            href={
              "https://scrapbox.io/" +
              process.env.scrapboxProject +
              "/" +
              rawTitle
            }
          >
            <a target="_blank" rel="noreferrer">
              {process.env.scrapboxProject}/{rawTitle}
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};
