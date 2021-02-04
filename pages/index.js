import Head from "next/head";
import styles from "../styles/Home.module.css";

import RaceCar from "../components/RaceCar";

export default function Home() {
  // To set two dates to two variables
  var date1 = new Date("10/25/2020");
  var date2 = new Date();

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

  return (
    <div className={styles.container}>
      <Head>
        <title>HAM BOT VER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <RaceCar primaryColor="#90959A" secondaryColor="#0D9793" />
          <RaceCar primaryColor="#90959A" secondaryColor="#0D9793" />
          <RaceCar primaryColor="#2D323E" secondaryColor="#FE1933" />
        </div>
        <h1 className={styles.title}>
          Days Since
          <br />
          HAM BOT VER
        </h1>

        <p className={styles.description}>{Difference_In_Days} Days</p>
      </main>

      <footer className={styles.footer}>HAMBOTVER</footer>
    </div>
  );
}
