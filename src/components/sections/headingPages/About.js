export default function About() {
  return (
      <article className="about-us">
          <section className="hero-text">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p className="about-subtext">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
          </section>

          <section className="double-image">
              <img className="about-1" src={require('../../../assets/food/marioAdrien.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
              
          </section>
  </article>
  );
}