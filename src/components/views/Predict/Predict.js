import { Button, Input } from "@heroui/react";
import { useState } from "react";

const PredictPage = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePredict = async () => {
    if (!file) return alert("File belum dipilih");

    try {
      const output = await queryModel(file);
      setResult(output);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };
  return (
    <div>
      <h1>Prediksi Penyakit Jambu</h1>
      <Input type="file" accept="image/*" onChange={handleFile} />
      <Button color="danger" onPress={handlePredict}>
        Test
      </Button>
      {result && (
        <div>
          <p>
            <strong>Label:</strong> {result.prediction_label}
          </p>
          <p>
            <strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default PredictPage;
