import EditIssueButton from "@/app/issues/[id]/editIssueButton";
import prisma from "@/prisma/client";
import { Box, Grid } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import IssueDetails from "./IssueDetails";

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
    <div className="mx-auto w-3/4">
      <Grid columns="4fr 2fr" width="auto" className="w-full gap-4">
        <Box>
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <EditIssueButton issueId={issue.id} />
        </Box>
      </Grid>
    </div>
  );
};

export default IssueDetailsPage;
