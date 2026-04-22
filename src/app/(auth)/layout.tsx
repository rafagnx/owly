export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-background relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="w-full max-w-md relative z-10 px-4">
        {children}
      </div>
    </div>
  );
}
