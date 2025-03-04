import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "@/styles/globals.css";
import { getWebsiteData } from "../service/apiFetch";
import MetaTags from "../components/Head/MetaTags";
import Favicon from "../components/Head/Faviconscript";

const Snackbar = dynamic(() => import("@/components/utils/Snackbar"), {
  ssr: false,
});

function App({ Component, pageProps }) {
  const router = useRouter();
  const { title, data, websiteData, type, metaTags, url, ...restProps } =
    pageProps;

  return (
    <>
      <Favicon
        favicon={websiteData?.website?.favicon}
        scripts={websiteData?.website?.script}
      />
      {(metaTags ||
        data?.pageData?.metaTags ||
        websiteData?.website?.metaTags) && (
        <MetaTags
          title={title || websiteData?.website?.title}
          keywords={
            metaTags?.keywords || websiteData?.website?.metaTags?.keywords
          }
          description={
            metaTags?.ogDescription ||
            websiteData?.website?.metaTags?.ogDescription
          }
          image={metaTags?.ogImage || websiteData?.website?.metaTags?.ogImage}
          url={url}
        ></MetaTags>
      )}
      <DefaultLayout websiteData={websiteData}>
        <Component
          {...{
            websiteData: websiteData,
            data: data,
            type: type,
            ...restProps,
          }}
        />
      </DefaultLayout>
      <Snackbar />
    </>
  );
}

export default App;
