export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div
      className={
        'max-w-lg mx-auto h-[calc(100dvh-8rem)] flex items-center justify-center animate-pulse text-lg font-semibold'
      }>
      Loading...
    </div>
  );
}
