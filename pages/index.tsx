import styles from "@/styles/Home.module.css"
import Head from "next/head"
import useOneSignal from "./hooks/onesignal"

export default function Home() {
  useOneSignal()

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>OneSignal Hook with Next.js 13</p>
        </div>
      </main>
    </>
  )
}
