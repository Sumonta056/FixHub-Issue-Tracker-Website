import prisma from "@/prisma/client";
import IssueSummary from "./dashboard/IssueSummary";
import LatestIssue from "./dashboard/LatestIssue";
import IssueChart from "./dashboard/IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({
    where: {
      status: "OPEN",
    },
  });
  const closed = await prisma.issue.count({
    where: {
      status: "DONE",
    },
  });
  const inProgress = await prisma.issue.count({
    where: {
      status: "IN_PROGRESS",
    },
  });
  return (
    <div className="">
      <IssueSummary open={open} closed={closed} inProgress={inProgress} />
      <IssueChart open={open} closed={closed} inProgress={inProgress} />
      <LatestIssue />
    </div>
  );
}
