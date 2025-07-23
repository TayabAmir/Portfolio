import './globals.css'

export const metadata = {
  title: 'Muhammad Tayyab | Portfolio',
  description: 'Full Stack Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-[#0f0f0f] dark:text-white">
        <main>{children}</main>
      </body>
    </html>
  );
}
