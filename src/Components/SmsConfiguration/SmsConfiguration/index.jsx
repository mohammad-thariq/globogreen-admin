import { Breadcrumb } from "@/common/Breadcrumb";
import { BizTechConfigForm } from "@/common/Form/SmsConfigForm/biztechConfigForm";
import { TwilioConfigForm } from "@/common/Form/SmsConfigForm/twilioConfigForm";
import { Loader } from "@/common/Loader";
import { PageHeader } from "@/common/PageHeader";
import { ToastifyFailed, ToastifySuccess } from "@/common/Toastify";
import { SmsConfigAPI } from "@/service/SmsConfiguration/SmsConfigAPI";
import { useMutation, useQuery } from "react-query";

export const SmsConfiguration = () => {
  const { smsConfig, updateBiztechSmsConfig, updateTwilioSmsConfig } =
    new SmsConfigAPI();
  const { data, isLoading, refetch } = useQuery(["smsConfig"], smsConfig);

  const {
    mutate: updateTwilioSmsConfigMutate,
    isLoading: updateTwilioSmsConfigLoading,
  } = useMutation(updateTwilioSmsConfig, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  const {
    mutate: updateBiztechSmsConfigMutate,
    isLoading: updateBiztechSmsConfigLoading,
  } = useMutation(updateBiztechSmsConfig, {
    onSuccess: (data, variables, context) => {
      ToastifySuccess(data?.notification);
      refetch();
    },
    onError: (data, variables, context) => {
      ToastifyFailed(data?.notification);
    },
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <PageHeader title="Sms Configuration" />
      <Breadcrumb currentPage={"Sms Configuration"} serachEnable />
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <div className="card p-5 mb-4 justify-content-fs">
              <div className="bg-warning p-3 rounded text-light">
                <p style={{ color: "#000" }}>
                  Before this setup you have to phone number required feature
                  enable on the register page. Otherwise this feature
                  doesn&nbsp;t work. For enable required feature go to General
                  setting
                </p>
              </div>
              {data?.twilio && (
                <TwilioConfigForm
                  data={data?.twilio}
                  onUpdate={updateTwilioSmsConfigMutate}
                  loading={updateTwilioSmsConfigLoading}
                />
              )}
              {data?.biztech && (
                <BizTechConfigForm
                  data={data?.biztech}
                  onUpdate={updateBiztechSmsConfigMutate}
                  loading={updateBiztechSmsConfigLoading}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
