"use client";
import React from "react";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { MdCancel } from "react-icons/md";
import { useForm, Controller, set } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitting(false);
      setError("Error creating issue. Please try again.");
    }
  });

  return (
    <div className="max-w-2xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Icon>
            <MdCancel />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form className=" space-y-4" onSubmit={onSubmit}>
        <TextField.Root placeholder="Title" {...register("title")}>
          <TextField.Slot />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Write a Issue ...." {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <div className="flex gap-3 pb-5">
          <Button disabled={isSubmitting}>
            {isSubmitting && <Spinner />}
            Submit New Issue
          </Button>
          <Button color="red">
            <MdCancel /> Cancel Issue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewIssuePage;
