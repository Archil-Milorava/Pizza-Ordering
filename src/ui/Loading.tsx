function Loading() {
  return (
    <div className="flex h-screen  w-full items-center justify-center space-x-2  bg-slate-100/50 absolute">
      <div className="h-8 w-8 animate-bounce rounded-full bg-stone-700 [animation-delay:-0.3s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-stone-700 [animation-delay:-0.15s]"></div>
      <div className="h-8 w-8 animate-bounce rounded-full bg-stone-700"></div>
    </div>
  );
}

export default Loading;
