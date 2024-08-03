import prisma from "@/prisma/client";
import { Code, Table } from "@radix-ui/themes";
import delay from "delay";
import { IssueStatusBadge, Link } from "@/app/components";
import IssueActions from "./IssueActions";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(3000);
  return (
    <div className="mx-auto flex flex-col gap-3 max-w-4xl">
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
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
