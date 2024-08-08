import { Heading } from "@radix-ui/themes";
import Pagination from "@/app/components/Pagination";

export default function Home({ searchParams }: { searchParams: { page: string } }) {
  return (
    <div className="mx-auto max-w-4xl flex flex-col space-y-3">
      <Heading color="indigo">Issue Dashboard</Heading>

      <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />
    </div>
  );
}
