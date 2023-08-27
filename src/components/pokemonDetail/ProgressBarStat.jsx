const ProgressBarStat = ({ stat }) => {
  return (
    <article>
      <section>
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
    </article>
  );
};
export default ProgressBarStat;
