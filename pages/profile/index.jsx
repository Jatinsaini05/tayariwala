import React, { useEffect } from "react";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import { useRouter } from "next/router";
import { useStoreLogin } from "../../store/login";
import { getInitialData } from "../../service/apiFetch";

export const getStaticProps = async () => {
  const initialData = await getInitialData("profile", {
    contentBlock: "Object",
  });
  return {
    props: {
      websiteData: initialData?.websiteData || null,
      pageData: initialData?.data || null,
      title: initialData?.title || null,
      metaTags: initialData?.metaTags || null,
      url: initialData?.url || "",
    },
  };
};

const index = () => {
  const router = useRouter();
  const user = useStoreLogin((state) => state.user);
  const authToken = useStoreLogin((state) => state.authToken);

  useEffect(() => {
    if (!user || !authToken) {
      router.push("/login");
    }
  }, [user, authToken, router]);
  return (
    <div>
      <ProfileDetails />
    </div>
  );
};

export default index;
