import prisma from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import delay from "delay";
import IssueActions from "./IssueActions";
import Pagination from "@/app/components/Pagination";
import IssueTable from "./IssueTable";
interface Props {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
    page: string;
  };
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const where = { status };
  const orderBy = searchParams.orderBy
    ? { [searchParams.orderBy]: "asc" }
    : undefined;
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({ where });
  await delay(2000);

  return (
    <div className="mx-auto flex flex-col gap-2 max-w-5xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-5 px-5">
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        itemCount={issueCount}
        pageSize={pageSize}
        currentPage={page}
      />
    </div>
  );
};
export const revalidate = 60;
export default IssuesPage;
