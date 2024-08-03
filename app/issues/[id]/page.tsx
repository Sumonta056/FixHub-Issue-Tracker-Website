import EditIssueButton from "@/app/issues/[id]/editIssueButton";
import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";

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
    <div className="mx-auto max-w-5xl">
      <Grid columns="3fr 1fr" width="auto" gap="4">
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <Flex direction="column" gap="2">
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetailsPage;
