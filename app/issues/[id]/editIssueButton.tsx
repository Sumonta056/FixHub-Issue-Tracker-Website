import { Button } from "@radix-ui/themes";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button size="3" variant="soft">
      <HiPencilAlt size={22} />
      <Link href={`/issues/${issueId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
