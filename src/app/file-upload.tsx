"use client";
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
const FileUpload = () => {
  const [file, setFile] = React.useState(null);
  const [uploadedFile, setUploadedFile] = React.useState(null);
  const [isUploading, setIsUploading] = React.useState(false);

  let cloudPost = async (file: any) => {
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dhwyngp5r/image/upload",
      {
        method: "POST",
        body: file,
      }
    ).then((res) => res.json());
    setUploadedFile(data.secure_url);
    setIsUploading(false);
  };
  function download(url: string, filename: string) {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      })
      .catch(console.error);
  }
  return (
    <div className="w-full h-full p-0 m-0">
      <div className="h-20 bg-slate-300 w-full flex items-center justify-center">
        <h1 className=" font-semibold text-lg">
          {
            "Select File from Local >> Upload on Cloudinary >> Open Cldinary Link in New Tab/ Download Link"
          }
        </h1>
      </div>{" "}
      <input
        type="file"
        className="border border-gray-300 mx-auto w-full p-10"
        onChange={(e) => {
          let file = e?.target?.files?.[0] as any;
          console.log("file", file);
          setFile(file);
        }}
      />
      <br />
      {!!file && !uploadedFile && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-8 px-4 mx-10 rounded "
          style={{ marginTop: 10 }}
          onClick={() => {
            setIsUploading(true);
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "my-uploads");
            cloudPost(formData);
          }}
        >
          Upload to Cloudinary
        </button>
      )}
      {isUploading && <h1 className="m-10">Uploading...</h1>}
      {!!uploadedFile && (
        <a
          className="text-blue-500 hover:text-blue-800 mt-16 ml-10"
          href={uploadedFile}
          target="_blank"
          download="img.png"
          title="Click to open in new tab"
          style={{ marginTop: 10 }}
        >
          Uploaded Image URL
        </a>
      )}
      {!!uploadedFile && (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mx-10"
          onClick={() => {
            download(uploadedFile, "img.png");
          }}
        >
          Download Image
        </button>
      )}
    </div>
  );
};

export default FileUpload;
