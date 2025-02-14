import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex bg-[#FAF7F0] text-[#4A4947] flex-col h-[100vh] gap-8 justify-center items-center">
      <h1 className="font-bold text-2xl">Oops. Something Went Wrong</h1>
      <Link className="text-xl underline" to="/">
        Back to homepage
      </Link>
    </div>
  );
}
