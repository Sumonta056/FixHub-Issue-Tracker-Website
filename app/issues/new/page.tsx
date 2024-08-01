"use client";
import React from "react";
import { TextField, Button } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { MdCancel } from "react-icons/md";
import { IoIosCloudDone } from "react-icons/io";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-2xl space-y-4"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", data);
          alert("Issue created successfully!");
          router.push("/issues");
        } catch (error) {
          console.error("Error creating issue:", error);
          alert("Failed to create issue.");
        }
      })}
    >
      <TextField.Root placeholder="Title" {...register("title")}>
        <TextField.Slot />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Write a Issue ...." {...field} />
        )}
      />
      <div className="flex gap-3 pb-5">
        <Button>
          <IoIosCloudDone /> Submit New Issue
        </Button>
        <Button color="red">
          <MdCancel /> Cancel Issue
        </Button>
      </div>
    </form>
  );
};

export default NewIssuePage;
