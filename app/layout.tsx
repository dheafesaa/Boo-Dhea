import "./globals.css";

export const metadata = {
  title: "My App",
  description: "Demo app router + services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
