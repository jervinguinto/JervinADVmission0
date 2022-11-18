import styles from "./Body.module.css";
export default function Body() {
  return (
    <div>
      <div className={styles.Body}>
        <div className={styles.imgMe}>
          <img className={styles.meBackImg1} src="meback.jpg"></img>
          <img className={styles.meBackImg2} src="meback.jpg"></img>
          <img className={styles.meBackImg3} src="meback.jpg"></img>
        </div>
        <h1 className={styles.life}>Life is too short to eat bad food</h1>
        <div className={styles.searchBar}>
          <input type="text" placeholder="Are you hungry?..😋"></input>
          <span>
            <btn>Search</btn>
          </span>
        </div>
      </div>
    </div>
  );
}
