"use client";
import { Spinner } from "@/app/components";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button size="3" variant="soft" color="red" disabled-={deleteLoading}>
            {deleteLoading ? <Spinner /> : <MdDelete />}
            Delete Issue
          </Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>
          <AlertDialog.Description>
            Are you sure you want to delete this issue?
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Cancel>
              <Button color="gray" variant="soft">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                color="red"
                variant="soft"
                onClick={async () => {
                  try {
                    // throw new Error("Not implemented");
                    setDeleteLoading(true);
                    await axios.delete(`/api/issues/${issueId}`);
                    router.push("/issues/list");
                    router.refresh();
                  } catch (err) {
                    setDeleteLoading(false);
                    setError(true);
                  }
                }}
              >
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
      <AlertDialog.Root open={error}>
        <AlertDialog.Content>
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description>
            An error occurred while deleting the issue.
          </AlertDialog.Description>
          <Flex mt="4" gap="3">
            <AlertDialog.Action>
              <Button
                color="red"
                variant="soft"
                onClick={() => setError(false)}
              >
                Close
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
