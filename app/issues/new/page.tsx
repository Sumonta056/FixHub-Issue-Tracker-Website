"use client";
import React from "react";
import { TextField, TextArea, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-4">
      <TextField.Root placeholder="Title">
        <TextField.Slot />
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
