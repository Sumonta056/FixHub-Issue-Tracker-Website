import prisma from "@/prisma/client";
import { Code, Table } from "@radix-ui/themes";
import delay from "delay";
import { IssueStatusBadge } from "@/app/components";
import IssueActions from "./IssueActions";
import { Issue, Status } from "@prisma/client";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
interface Props {
  searchParams: { status: Status; orderBy: keyof Issue };
}

const IssuesPage = async ({ searchParams }: Props) => {
  const columns: {
    label: string;
    value: keyof Issue;
    className?: string;
  }[] = [
      { label: "Issue", value: "title" },
      { label: "Status", value: "status", className: "hidden md:table-cell" },
      { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
    ];

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = searchParams.orderBy
    ? { [searchParams.orderBy]: 'asc' }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy
  });
  await delay(3000);
  return (
    <div className="mx-auto flex flex-col gap-3 max-w-5xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  p-7">
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}
              >
                <Link
                  href={{
                    query: {
                      ...searchParams,
                      orderBy: column.value,
                    },
                  }}
                >
                  {column.label}
                </Link>
                {column.value === searchParams.orderBy && <FaArrowUp className="inline ml-2 items-center" />}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">{issue.status}</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Code size="2">{issue.createdAt.toDateString()}</Code>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export const revalidate = 60;
export default IssuesPage;
