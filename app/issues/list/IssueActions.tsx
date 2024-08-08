import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  return (
    <Flex mb="2" justify="between">
      <IssueStatusFilter />
      <Button color="indigo" size="3">
        <Link href="/issues/new">
          <div className="flex gap-2 items-center">
            <FaBookmark /> New Issue
          </div>
        </Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
