/* eslint-disable @next/next/no-img-element */
import { Button } from "@/common/Button";
import { useState } from "react";

export const ExisitngBanner = ({
  sidebarBanner,
  img,
  alt,
  loading,
  onLoading,
  onSave,
}) => {
  const [base64Image, setBase64Image] = useState(img || "");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await convertToBase64(file);
      setBase64Image(base64);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleUpload = () => {
    if (base64Image) {
      onSave({ image: base64Image });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card p-5 mb-4 flex align-item-center justify-content-c">
            <p>Existing Banner</p>
            {loading || !img ? (
              <img
                style={{ width: "250px", borderRadius: "10px" }}
                src={"/assets/img/placeholder.jpg"}
                alt={alt}
              />
            ) : (
              <img
                style={{ width: "250px" }}
                src={img || "/assets/img/placeholder.jpg"}
                alt={alt}
              />
            )}
            <p>{sidebarBanner}</p>

            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex ms-1">
              <Button
                name="Upload Side Banner"
                color="#fff"
                bg="#23d24f"
                type="button"
                w="200px"
                icon="fa fa-plus"
                onClick={handleUpload}
                isSubmitting={onLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
