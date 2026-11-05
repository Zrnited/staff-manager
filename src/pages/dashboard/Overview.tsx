import { LuAward, LuBuilding, LuUsers } from "react-icons/lu";
import OverviewCard from "../../components/ui/OverviewCard";
import { FiUserCheck } from "react-icons/fi";
import EmptySet from "../../components/ui/EmptySet";
import SectionHeader from "../../components/ui/SectionHeader";
import { getStats } from "../../api/employees";
import { useEffect, useState } from "react";
import type { Stats } from "../../types";

export default function Overview() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isFetchingStats, setIsFetchingStats] = useState<boolean>(true);
  const [getStatsErr, setGetStatsErr] = useState<boolean>(false);

  const fetchStats = async () => {
    await getStats()
      .then((res) => (setStats(res.data), console.log("Stats: ", res)))
      .catch(() => setGetStatsErr(true))
      .finally(() => setIsFetchingStats(false));
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <section className="space-y-5 lg:space-y-7 lg:px-5 lg:py-4">
      <SectionHeader
        heading="dashboard"
        subHeading="Organization overview at a glance"
      />
      {/* cards */}
      <div className="flex items-center">
        <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-2 xl:grid-cols-4">
          {/* total employees */}
          <OverviewCard
            cardTitle="total employees"
            cardColor="#2A9290"
            count={stats?.numOfEmployees ?? "-"}
            IconName={LuUsers}
            path="/d/employees"
          />
          {/* grade levels */}
          <OverviewCard
            cardTitle="grade levels"
            cardColor="#F1BE0E"
            count={stats?.numOfGradeLevels ?? "-"}
            IconName={LuAward}
            path="/d/grade-levels"
          />
          {/* departments */}
          <OverviewCard
            cardTitle="departments"
            cardColor="#2A9290"
            count={stats?.deptCount ?? "-"}
            IconName={LuBuilding}
          />
          {/* grade levels */}
          <OverviewCard
            cardTitle="graded employees"
            cardColor="#2A9290"
            count={stats?.assignedEmployees ?? "-"}
            IconName={FiUserCheck}
          />
        </div>
      </div>
      {/* notification */}
      {stats?.numOfEmployees === 0 && (
        <EmptySet text="No employees added yet. Head to the Employees page to add your first." />
      )}
    </section>
  );
}
