export default function Textarea({ name, placeholder, value, onChange }) {
  return (
    <div className="my-2">
      <textarea
        className=" w-full min-h-[100px] max-h-44 px-2 py-2 text-gray-950 placeholder:text-gray-900 rounded-md outline-none"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
