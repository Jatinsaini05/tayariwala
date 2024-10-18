import { NextUIProvider } from "@nextui-org/system";
import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
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