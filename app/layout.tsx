import "./globals.css";

import localFont from "next/font/local";

export const metadata = {
  title: "Hola!",
  description: "스터디, 사이드 프로젝트 팀원을 구하는 가장 쉬운 방법",
};

const spoqaHansSans = localFont({
  display: "swap",
  src: [
    {
      path: "../public/fonts/SpoqaHanSansNeoBold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/SpoqaHanSansNeoMedium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/SpoqaHanSansNeoRegular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/SpoqaHanSansNeoLight.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/SpoqaHanSansNeoThin.woff2",
      weight: "100",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spoqaHansSans.className}>{children}</body>
    </html>
  );
}
