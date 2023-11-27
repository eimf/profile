import Image from "next/image";

export default function TopSideBar() {
  return (
    <div className="mb-2 h-40 grid grid-flow-row-dense grid-cols-2 grid-rows-2 rounded-md bg-blue-600 p-4 text-lg">
      <h2 className="m-auto">EZEQUIEL LOPEZ</h2>
      <Image
          className="square-full m-auto mb-auto rounded-full"
          src="/photo.jpeg"
          alt="Ezequiel Lopez"
          width={100}
          height={100}
        />
        <span className="sm:col-span-2 mt-auto">Professional Software Engineer</span>
    </div>
  );
}
