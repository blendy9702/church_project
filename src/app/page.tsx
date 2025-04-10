"use client";

import Head from "next/head";
import {
  MainBarLabel,
  MainCharts,
  MainCounts,
  MainInteractiveChart,
  MainShadcnChart,
} from "@/components/main_page/main_components";

export default function Page() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
      </Head>
      <div className="m-auto max-w-[1320px]">
        <div className="bg-gray-100/15 m-auto px-5">
          <div className="grid grid-cols-1 gap-5">
            <MainCounts />
            <MainCharts />
            <MainBarLabel />
            <MainShadcnChart />
            <MainInteractiveChart />
          </div>
        </div>
      </div>
    </>
  );
}
