import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hasib.png"
          alt="An image showing Chips"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Chips</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        or Angular.
      </p>
    </section>
  );
}

export default Hero;
