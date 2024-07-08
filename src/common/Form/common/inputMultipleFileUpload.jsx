/* eslint-disable @next/next/no-img-element */
import React from "react";

export const InputMultipleFileUpload = ({
    onChange,
    onBlur,
    value,
    label,
    accept,
    name
}) => {

  return (
    <>
      <label>{label}</label>
      <div className="mb-2">
        <input
          accept={accept}
          onChange={onChange}
          type="file"
          name={name}
          className="form-control"
          placeholder="Image"
          onBlur={onBlur}
          value={value}
        />
      </div>
    </>
  );
};
