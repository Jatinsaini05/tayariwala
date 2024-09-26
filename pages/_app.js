import { NextUIProvider } from "@nextui-org/system";
import "@/styles/globals.css";
import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
 const Snackbar = dynamic(() => import('@/components/utils/Snackbar'), { ssr: false });

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <NextUIProvider navigate={router.push}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <Snackbar/>
    </NextUIProvider>
  );
}