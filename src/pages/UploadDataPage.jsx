import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadDataPage() {
  const [fileDetails, setFileDetails] = useState(null);
  const [isUploading, setIsUploading] = useState(false); // State for handling upload and loading
  const navigate = useNavigate();

  const handleFileUpload = (file) => {
    if (file) {
      const fileType = file.type || ""; // Use file.type if available, otherwise an empty string
      const fileName = file.name;
      const extension = fileName.split(".").pop().toLowerCase(); // Extract the file extension
      let formatType = "Unknown";
      let detailedFileType = "Unknown";

      // Check based on MIME type or file extension
      if (
        ["text/csv", "text/tab-separated-values", "application/json", "application/xml"].includes(
          fileType
        ) ||
        ["csv", "tsv", "json", "xml"].includes(extension)
      ) {
        formatType = "Text";
        if (fileType === "text/csv" || extension === "csv") detailedFileType = "CSV";
        if (fileType === "text/tab-separated-values" || extension === "tsv")
          detailedFileType = "TSV";
        if (fileType === "application/json" || extension === "json") detailedFileType = "JSON";
        if (fileType === "application/xml" || extension === "xml") detailedFileType = "XML";
      } else if (
        [
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(fileType) ||
        ["xls", "xlsx", "pdf", "doc", "docx"].includes(extension)
      ) {
        formatType = "Binary";
        if (
          fileType === "application/vnd.ms-excel" ||
          fileType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
          ["xls", "xlsx"].includes(extension)
        )
          detailedFileType = "Excel";
        if (fileType === "application/pdf" || extension === "pdf") detailedFileType = "PDF";
        if (
          fileType === "application/msword" ||
          fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
          ["doc", "docx"].includes(extension)
        )
          detailedFileType = "Word";
      }

      const details = {
        formatType,
        fileType: detailedFileType,
        fileName,
      };

      setFileDetails(details);
      console.log(details);
    }
  };

  const simulateApiCall = () => {
    setIsUploading(true); // Set loading state
    setTimeout(() => {
      setIsUploading(false); // Reset loading state
      navigate("/result");
    }, 3000);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (fileDetails) {
      simulateApiCall();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">Upload Your Data</h1>
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center ${
            isUploading
              ? "bg-gray-200 border-gray-400"
              : "bg-gray-50 border-gray-300 hover:bg-gray-100"
          }`}
          onDrop={isUploading ? undefined : handleDrop}
          onDragOver={(e) => e.preventDefault()}>
          <p className="text-gray-600 mb-4">Drag and drop your file here</p>
          <p className="text-sm text-gray-500">
            Supported formats: CSV, TSV, JSON, XML, Excel, PDF, Word
          </p>
        </div>
        <div className="mt-4 text-center">
          <label
            htmlFor="file-upload"
            className={`cursor-pointer ${
              isUploading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded-lg transition-colors`}>
            {isUploading ? "Uploading..." : "Choose a File"}
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept=".csv,.tsv,.json,.xml,.xls,.xlsx,.pdf,.doc,.docx"
            onChange={handleFileChange}
            disabled={isUploading}
          />
        </div>
        {fileDetails && (
          <>
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <div className="mt-2 text-gray-600">
                <p>
                  <strong>Format Type:</strong> {fileDetails.formatType}
                </p>
                <p>
                  <strong>File Type:</strong> {fileDetails.fileType}
                </p>
                <p>
                  <strong>File Name:</strong> {fileDetails.fileName}
                </p>
              </div>
            </div>
            <button
              onClick={handleUpload}
              disabled={isUploading || !fileDetails}
              className={`mt-6 w-full ${
                isUploading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
              } text-white py-2 rounded-lg text-center transition-colors`}>
              {isUploading ? "Uploading..." : "Upload"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
