import dynamic from "next/dynamic";
import IsssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IsssueFormSkeleton />,
}); //dynamic import of IssueForm component

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
