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
      path: "../static/fonts/SpoqaHanSansNeoBold.woff2",
      weight: "700",
    },
    {
      path: "../static/fonts/SpoqaHanSansNeoMedium.woff2",
      weight: "500",
    },
    {
      path: "../static/fonts/SpoqaHanSansNeoRegular.woff2",
      weight: "400",
    },
    {
      path: "../static/fonts/SpoqaHanSansNeoLight.woff2",
      weight: "300",
    },
    {
      path: "../static/fonts/SpoqaHanSansNeoThin.woff2",
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
