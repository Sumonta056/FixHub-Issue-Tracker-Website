import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const IsssueFormSkeleton = () => {
  return (
    <Box className="mx-auto max-w-5xl flex flex-col">
      <Skeleton height="4rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IsssueFormSkeleton;
