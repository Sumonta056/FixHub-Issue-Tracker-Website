"use client";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import { issueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Issue } from "@prisma/client";
import { Button, Callout, TextField } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoIosCloudDone } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { z } from "zod";

import SimpleMDE from "react-simplemde-editor";
// const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
//   ssr: false,
// });

// interface + validation check
type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
  }); // handle form input and validation
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      if (issue) {
        await axios.patch(`/api/issues/${issue.id}`, data);
      } else {
        await axios.post("/api/issues", data);
      }
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError("Error creating issue. Please try again.");
    }
  });

  return (
    <div className="mx-auto max-w-5xl flex flex-col">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <MdCancel />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-4" onSubmit={onSubmit}>
        <TextField.Root
          defaultValue={issue?.title}
          placeholder="Title"
          {...register("title")}
        >
          <TextField.Slot />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          defaultValue={issue?.description}
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Write a Issue ...." {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <div className="flex gap-3 pb-5">
          <Button disabled={isSubmitting}>
            {isSubmitting && <Spinner />}
            {!isSubmitting && <IoIosCloudDone />}
            {issue ? "Update Issue" : "Submit New Issue"}
          </Button>
          <Button color="red">
            <MdCancel /> Cancel Issue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
