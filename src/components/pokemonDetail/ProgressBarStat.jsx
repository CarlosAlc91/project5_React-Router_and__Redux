const ProgressBarStat = ({ stat }) => {
  const getPercentageProgressBar = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percentage = (100 * statValue) / MAX_STAT_VALUE;
    return `${percentage}%`;
  };
  return (
    <article>
      {/* it separetes name and value */}
      <section className="flex justify-between px-1">
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className="h-6 bg-slate-300 rounded-md">
        {/* progress, h-full el alto del papá*/}
        <div
          style={{ width: getPercentageProgressBar(stat.value) }}
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
        ></div>
      </div>
    </article>
  );
};
export default ProgressBarStat;
