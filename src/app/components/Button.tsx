interface ButtonProps {
  handleClick?: () => void 
  btnText: string
  style?: string 
}

export default function Button({ handleClick, btnText, style = 'bg-[#A4CD3A]' }: ButtonProps) {
  return (
    <button
      role='button'
      tabIndex={0}
      onClick={handleClick}
      className={`py-2 px-4 rounded-lg text-white ${style}`}
    >
      {btnText}
    </button>
  )
}
