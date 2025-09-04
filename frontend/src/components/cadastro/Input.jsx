const Input = ({ label, type, name, value, onChange, ...rest }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-lg font-black w-fit">
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        {...rest}
        className="border-2 rounded-sm border-[transparent] border-b-[rgba(0,0,0,0.25)] px-1.5 pt-2.5 pb-1 text-lg font-bold outline-0 focus:border-2 focus:border-[#6EAA38] transition-all duration-150"
      />
    </div>
  );
};

export default Input;
