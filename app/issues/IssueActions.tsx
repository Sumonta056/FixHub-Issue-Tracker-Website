import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaBookmark } from "react-icons/fa";

const IssueActions = () => {
  return (
    <div className="">
      <Link href="/issues/new">
        <Button color="indigo">
          <FaBookmark /> New Issue
        </Button>
      </Link>
    </div>
  );
};

export default IssueActions;
