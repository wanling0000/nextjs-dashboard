import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*通过将 Inter 添加到 <body> 元素，字体将应用于整个应用程序。在这里，你还添加了 Tailwind antialiased 使字体更平滑的类。这个类不是必须使用的，但它可以增加一种美感。*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
