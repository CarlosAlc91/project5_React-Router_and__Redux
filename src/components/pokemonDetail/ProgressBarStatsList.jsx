import ProgressBarStat from "./ProgressBarStat";

const ProgressBarStatsList = ({ stats }) => {
  return (
    <section>
      <h2>Stats</h2>
      <section>
        {stats?.map((stat) => (
          <ProgressBarStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};
export default ProgressBarStatsList;
