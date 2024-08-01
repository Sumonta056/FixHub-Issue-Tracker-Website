import React from "react";
import { Button } from "@radix-ui/themes";
import { FaBookmark } from "react-icons/fa";
import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <div className="flex gap-3">
        <Link href="/issues/new">
          <Button color="indigo">
            <FaBookmark /> New Issue
          </Button>
        </Link>
      
      </div>
    </div>
  );
};

export default IssuesPage;
