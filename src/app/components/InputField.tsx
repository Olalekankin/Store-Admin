interface InputFieldProp {
  label: string
  type?: string 
  value?: string 
  name: string
  style?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

export default function InputField({
  label,
  type = 'text', 
  value = '',
  name,
  style,
  onChange,
}: InputFieldProp) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className='text-sm font-medium text-[#9CA3AF] mb-1 block w-full'
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        className={`py-2 px-4 rounded-lg bg-[#374151] border border-[#4B5563] text-[#E5E7EB] text-base w-full focus:outline-none focus:border-[#9CA3AF] ${style}`}
      />
    </div>
  )
}
