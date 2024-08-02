import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Code, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import ReactMarkdown from "react-markdown";
import delay from "delay";

interface Props {
  params: { id: string };
}

const IssueDetailsPage = async ({ params }: Props) => {
  await delay(3000);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();
  return (
    <div className="mx-auto flex flex-col max-w-4xl" >
      <Heading color="cyan" size="8" weight="medium" className="pb-2">{issue.title}</Heading>
      <div className="flex gap-3 my-3">
        <IssueStatusBadge status={issue.status} />
        <Code size="2">{issue.createdAt.toDateString()}</Code>
      </div>
      <Card className="prose mt-4 max-w-3xl" variant="surface">
        <ReactMarkdown className="">{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailsPage;
