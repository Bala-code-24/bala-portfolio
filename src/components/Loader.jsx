import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",  // Ensures it takes up the full height of the screen
      }}
    >
      {/* Add a simple spinner or loader animation */}
      <div className="spinner"></div>
      
      {/* Progress percentage */}
      <p
        style={{
          fontSize: 16,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        {progress.toFixed(2)}%
      </p>

      <style jsx>{`
        .spinner {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #3498db;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Html>
  );
};

export default CanvasLoader;
