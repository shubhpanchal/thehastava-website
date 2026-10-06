import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#061326]/80 backdrop-blur-md">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl">
          <Image
            src="/brand/hastava-mark-transparent.png"
            alt="HASTAVA"
            width={456}
            height={546}
            priority
            className="h-10 w-auto animate-pulse object-contain"
          />
        </div>
      </div>
    </div>
  );
}
