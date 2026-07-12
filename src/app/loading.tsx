import LoadingSkeleton from "@/components/ui/LoadingSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-4 px-6">
      <LoadingSkeleton className="h-10 w-2/3" />
      <LoadingSkeleton className="h-5 w-1/2" />
      <LoadingSkeleton className="mt-6 h-40 w-full" />
      <LoadingSkeleton className="h-40 w-full" />
    </main>
  );
}
