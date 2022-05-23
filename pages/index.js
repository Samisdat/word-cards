import Head from "next/head";
import RecipeReviewCard from "../src/components/Card";
import * as React from 'react';

export default function Home() {
  return (
      <React.Fragment>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

            <RecipeReviewCard />
      </React.Fragment>
  );
}
