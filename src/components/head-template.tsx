import Head from "next/head";

function generateTitle(template: string, title?: string) {
  if (title !== undefined) {
    return `${title} | ${template}`;
  }

  return template;
}

export function HeadTemplate({ title }: { title?: string }) {
  const template = "Create Next App";

  return (
    <Head>
      <title>{generateTitle(template, title)}</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
