import { useId, useRef, useState } from "react";
import { Button, Card, CardBody, CardHeader, Spinner } from "@heroui/react";
import { queryModel } from "@/lib/hugginFace";
import { CiSaveUp2, CiTrash } from "react-icons/ci";
import Image from "next/image";

const PredictPage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState(null);
  const [loadingClear, setLoadingClear] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);

  const handleFile = (file) => {
    const reader = new FileReader();
    setFile(file);
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
    // console.log(file);
  };
  const handleInputChange = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handlePredict = async () => {
    if (!file) return alert("File belum dipilih");
    setLoadingUpload(true);
    try {
      setResultImage(preview);
      const output = await queryModel(file);
      setResult(output);
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoadingUpload(false);
    }
  };

  //Drag and Drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFile(files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleClear = () => {
    setLoadingClear(true);
    setTimeout(() => {
      setFile(null);
      setPreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
        setLoadingClear(false);
      }
    }, 800);
  };

  return (
    <section className="max-w-6xl mx-auto py-8">
      <div className="mb-8">
        <h2 className="text-3xl text-center font-bold text-gray-700 dark:text-gray-200">
          Prediksi Penyakit Jambu
        </h2>
        <h2 className="text-md text-center mt-2 text-gray-600 dark:text-gray-300">
          Silahkan unggah foto buah anda agar dapat mendapatkan hasil prediksi
          penyakit yang sedang menyerang buah anda
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card isBlurred className="rounded-xl p-4 dark:bg-gray-700">
          <CardHeader className="flex justify-center">
            <p className="text-lg font-medium text-danger">Unggah File</p>
          </CardHeader>
          <CardBody className="text-center">
            <div
              onClick={handleClick}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="mb-4 rounded-xl w-full cursor-pointer flex min-h-32 items-center justify-center bg-gray-100 border border-dashed border-gray-400 dark:bg-gray-400 hover:bg-gray-200 transition-all"
            >
              {!preview ? (
                <div className="flex flex-col items-center justify-center p-5">
                  <CiSaveUp2 className="mb-2 h-10 w-10 text-gray-400 dark:text-gray-300" />
                  <p className="text-semibold text-center text-sm text-gray-500 dark:text-gray-300">
                    Click or Drop file here to Upload a File
                  </p>
                </div>
              ) : (
                <div className="p-3  flex items-center justify-center">
                  <div className="w-1/2">
                    <Image
                      src={preview}
                      alt="preview"
                      className=""
                      width={150}
                      height={150}
                    />
                  </div>
                  <Button
                    isIconOnly
                    onPress={handleClear}
                    className="absolute top-6 right-6 h-8 w-8 bg-danger-100 dark:bg-gray-800"
                  >
                    {loadingClear ? (
                      <Spinner size="sm" color="danger" />
                    ) : (
                      <CiTrash className="h-5 w-5 text-danger-500" />
                    )}
                  </Button>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleInputChange}
              />
            </div>
            <Button
              color="danger"
              isDisabled={!preview}
              onPress={handlePredict}
              isLoading={loadingUpload}
            >
              {loadingUpload ? (
                <Spinner size="sm" color="danger" />
              ) : (
                "Analisis"
              )}
            </Button>
          </CardBody>
        </Card>
        <div>
          {result && (
            <Card className="rounded-xl p-4">
              <CardHeader className="flex justify-center">
                <p className="text-lg font-medium text-success">Hasil</p>
              </CardHeader>
              <CardBody className="text-lg font-medium text-gray-600">
                {resultImage && (
                  <div className="flex justify-center items-center">
                    <Image
                      src={resultImage}
                      width={100}
                      height={100}
                      className="border border-gray-300 rounded-lg"
                      alt="hasil"
                    />
                  </div>
                )}
                <div className="mt-3">
                  <p className="dark:text-gray-400">
                    Jenis Penyakit:{" "}
                    <span className="text-danger">
                      {" "}
                      {result.prediction_label}
                    </span>
                  </p>
                  <p className="dark:text-gray-400">
                    Presentase:{" "}
                    <span
                      className={
                        result.confidence < 0.5 ? "text-danger" : "text-success"
                      }
                    >
                      {(result.confidence * 100).toFixed(2)}%
                    </span>
                  </p>
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default PredictPage;
