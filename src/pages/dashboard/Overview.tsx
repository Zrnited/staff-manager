import { LuAward, LuBuilding, LuUsers } from "react-icons/lu";
import OverviewCard from "../../components/ui/OverviewCard";
import { FiUserCheck } from "react-icons/fi";
import EmptySet from "../../components/ui/EmptySet";
import SectionHeader from "../../components/ui/SectionHeader";
import { getStats } from "../../api/employees";
import { useEffect, useState } from "react";
import type { Stats } from "../../types";
import ErrorWrapper from "../../components/ui/error-wrapper";
import OverviewGraph from "../../components/ui/overview-graph";
import type { ApiError } from "../../lib/api";
import {
  getChartMetrics,
  type ChartMetrics,
} from "../../api/grade-levels/get-chart-metrics";
import LoadingWrapper from "../../components/ui/loading-wrapper";

interface MetricsHandler {
  data: ChartMetrics[] | null;
  isError: string | null;
  isLoading: boolean;
}

export default function Overview() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [metrics, setMetrics] = useState<MetricsHandler>({
    data: null,
    isError: null,
    isLoading: true,
  });
  const [isFetchingStats, setIsFetchingStats] = useState<boolean>(true);
  const [getStatsErr, setGetStatsErr] = useState<boolean>(false);

  const fetchStats = async () => {
    await getStats()
      .then((res) => setStats(res.data))
      .catch(() => setGetStatsErr(true))
      .finally(() => setIsFetchingStats(false));
  };

  const fetchChartMetrics = async () => {
    if (!metrics.isLoading)
      setMetrics((prev) => ({ ...prev, isLoading: true }));
    await getChartMetrics()
      .then((res) => {
        setMetrics((prev) => ({ ...prev, data: res.data }));
      })
      .catch((error: ApiError) =>
        setMetrics((prev) => ({ ...prev, isError: error.message })),
      )
      .finally(() => setMetrics((prev) => ({ ...prev, isLoading: false })));
  };

  useEffect(() => {
    fetchStats();
    fetchChartMetrics();
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
            count={isFetchingStats ? "-" : (stats?.numOfEmployees ?? "-")}
            IconName={LuUsers}
            path="/d/employees"
          />
          {/* grade levels */}
          <OverviewCard
            cardTitle="grade levels"
            cardColor="#F1BE0E"
            count={isFetchingStats ? "-" : (stats?.numOfGradeLevels ?? "N/A")}
            IconName={LuAward}
            path="/d/grade-levels"
          />
          {/* departments */}
          <OverviewCard
            cardTitle="departments"
            cardColor="#2A9290"
            count={isFetchingStats ? "-" : (stats?.deptCount ?? "-")}
            IconName={LuBuilding}
          />
          {/* grade levels */}
          <OverviewCard
            cardTitle="graded employees"
            cardColor="#2A9290"
            count={isFetchingStats ? "-" : (stats?.assignedEmployees ?? "-")}
            IconName={FiUserCheck}
          />
        </div>
      </div>

      {/* graph */}
      {metrics.isLoading ? (
        <LoadingWrapper text="loading metrics" />
      ) : metrics.isError ? (
        <ErrorWrapper text="failed to get metrics" />
      ) : (
        <OverviewGraph data={metrics.data ?? []} />
      )}

      {/* notification */}
      {stats?.numOfEmployees === 0 && (
        <EmptySet text="No employees added yet. Head to the Employees page to add your first." />
      )}
      {getStatsErr && <ErrorWrapper text="Failed to get stats." />}
    </section>
  );
}
