export default function ProgressBar({ lable, progress }) {
  return (
    <div className="w-full my-5 relative -z-50">
      <h2 className="mb-2">{lable}</h2>

      <div className=" w-full h-[10px] rounded-full bg-gray-300 ">
        <div
          style={{ width: progress + "%" }}
          className={` h-full relative rounded-full bg-[#39418d]`}
        >
          <span className={` absolute -top-8 right-0`}>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
