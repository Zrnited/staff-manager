import { LuAward, LuBuilding, LuUsers } from "react-icons/lu";
import OverviewCard from "../../components/ui/OverviewCard";
import { FiUserCheck } from "react-icons/fi";
import EmptySet from "../../components/ui/EmptySet";
import SectionHeader from "../../components/ui/SectionHeader";

export default function Overview() {
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
            count={1}
            IconName={LuUsers}
            path="/d/employees"
          />
          {/* grade levels */}
          <OverviewCard
            cardTitle="grade levels"
            cardColor="#F1BE0E"
            count={0}
            IconName={LuAward}
            path="/d/grade-levels"
          />
          {/* departments */}
          <OverviewCard
            cardTitle="departments"
            cardColor="#2A9290"
            count={1}
            IconName={LuBuilding}
          />
          {/* grade levels */}
          <OverviewCard
            cardTitle="graded employees"
            cardColor="#2A9290"
            count={0}
            IconName={FiUserCheck}
          />
        </div>
      </div>
      {/* notification */}
      <EmptySet text="No employees added yet. Head to the Employees page to add your first." />
    </section>
  );
}
