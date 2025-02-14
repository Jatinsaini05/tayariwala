import React, { useEffect, useState } from 'react';
import { getProductData, getInitialData, getProductBatches } from '../../service/apiFetch';
import { useRouter } from 'next/router';
import PageTitle from '../../components/Checkout/PageTitle';
import ProductDetail from '../../components/Checkout/ProductDetail';

export const getStaticProps = async () => {
    const initialData = await getInitialData("checkout", { contentBlock: "Object" });
    return {
        props: {
            websiteData: initialData?.websiteData || null ,
            pageData: initialData?.data,
            title: initialData?.title,
            metaTags: initialData?.metaTags,
        },
    };
};

const index = ({ pageData }) => {
    const router = useRouter();
    const [productData, setProduct] = useState(null);
    const [batches, setBatches] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProduct = async () => {
        setLoading(true); // Start loading
        try {
            const productId = router.query.product;
            if (!productId) return ;

            // Fetch product and batch data
            const [response, response2] = await Promise.all([
                getProductData({ id: productId }),
                getProductBatches({ product: productId }),
            ]);

            // Handle errors
            if (response.error || response2.error) {
                setError(response.error || response2.error);
            } else {
                setProduct(response);
                setBatches(response2);
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching product data:', error);
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        if (router.query.product) {
            fetchProduct();
        }
    }, [router.query.product]);

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message
    }
    return (
        <div>
            <div>
                <PageTitle pageData={pageData} />
            </div>
            <div>
                {/* {JSON.stringify(batches)} */}
                <ProductDetail productData={productData} batches={batches} />
            </div>
        </div>
    )
}

export default index