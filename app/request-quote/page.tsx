import RequestQuotePage from "@/components/requestform/Quote";
import ProductsPage from "@/components//requestform/rq";
import { Metadata } from "next";

export const metadata = {
  title: 'Request a Quote ',
  description: 'Get a personalized quote from Cloves Inc. for autoclave liners, industrial packaging, or commercial textiles. Fill out our form or contact us directly for fast assistance.',
};

export default function Request() {
  return (
    <>
        <ProductsPage />
        {/* <RequestQuotePage /> */}
       
    </>
  );
}