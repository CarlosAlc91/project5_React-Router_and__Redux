import ProgressBarStat from "./ProgressBarStat";

const ProgressBarStatsList = ({ stats }) => {
  return (
    <section className="pt-32 px-5 border-[2px] border-green-400">
      <section className="flex items-center">
        <h2 className="text-3xl font-roboto font-medium pr-5">Stats</h2>
        <div className="w-full h-[1px] bg-h-line"></div>
        <img className="h-16" src="/images/white-poke-ball.png" alt="" />
      </section>
      <section className="">
        {stats?.map((stat) => (
          <ProgressBarStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};
export default ProgressBarStatsList;
