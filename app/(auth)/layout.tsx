export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen flex items-start justify-center">
      {children}
    </div>
  );
}
