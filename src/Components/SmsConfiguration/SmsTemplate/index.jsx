import { BaseTable } from "@/common/BaseTable";
import { Breadcrumb } from "@/common/Breadcrumb";
import { Loader } from "@/common/Loader";
import { PageHeader } from "@/common/PageHeader";
import { smsTemplateTableHeading } from "@/constant/tableHeading";
import { SmsConfigAPI } from "@/service/SmsConfiguration/SmsConfigAPI";
import { useQuery } from "react-query";

export const SmsTemplate = () => {
  const { smsTemplate } = new SmsConfigAPI();
  const { data, isLoading, refetch } = useQuery(["SmsConfig"], smsTemplate);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeader title="Sms Template" />
      <Breadcrumb currentPage={"Sms Template"} serachEnable />
      <BaseTable
        tableHeadings={smsTemplateTableHeading}
        onSmsConfigData={data}
        length={data?.templates?.length === 0}
      />
    </>
  );
};
