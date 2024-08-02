import { Heading, Card, Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetails = () => {
  return (
    <Box className="mx-auto flex flex-col max-w-4xl">
      <Heading>
        <Skeleton width="10rem" />
      </Heading>
      <div className="flex gap-3 my-3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </div>
      <Card className="prose mt-4 max-w-3xl">
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetails;
