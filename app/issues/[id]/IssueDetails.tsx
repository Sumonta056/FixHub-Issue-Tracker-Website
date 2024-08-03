import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Code, Heading } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading color="cyan" size="8" weight="medium" className="pb-2">
        {issue.title}
      </Heading>
      <div className="flex gap-3 my-3">
        <IssueStatusBadge status={issue.status} />
        <Code size="2">{issue.createdAt.toDateString()}</Code>
      </div>
      <Card className="prose mt-4 max-w-3xl" variant="surface">
        <ReactMarkdown className="">{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
