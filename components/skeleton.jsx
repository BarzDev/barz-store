export default function Skeleton() {
  return (
    <div style={{ height: "89vh", width: "100%" }}>
      <div className="h-full border-2 flex flex-col items-center justify-center">
        <div>
          <span className="loading loading-ball loading-xs text-info"></span>
          <span className="loading loading-ball loading-sm text-info"></span>
          <span className="loading loading-ball loading-md text-info"></span>
          <span className="loading loading-ball loading-lg text-info"></span>
        </div>
        <p className="text-info font-bold">Loading...</p>
      </div>
    </div>
  );
}
