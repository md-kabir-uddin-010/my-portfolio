export default function Input({ type = "text", name, placeholder, ...rest }) {
  return (
    <div className="my-2 md:my-5">
      <input
        className=" w-full px-2 py-2 text-gray-950 placeholder:text-gray-900 rounded-md outline-none"
        type={type}
        name={name}
        id={name}
        {...rest}
        placeholder={placeholder}
      />
    </div>
  );
}
