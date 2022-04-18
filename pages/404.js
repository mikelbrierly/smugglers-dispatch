import Link from "next/link";
import styleUtils from "../styles/utils.module.scss";

export default function pageNotFound() {
  return (
    <main className={styleUtils.flexCenter}>
      <h1>Poodoo!</h1>
      <br />
      <p>*obi wan pointing to where the planet should be*</p>
      <br />
      <Link href="/">Better get home quick!</Link>
    </main>
  );
}
