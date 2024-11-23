
const ButtonContainer = ({ children, className }) => {
  return (
    <>
      <button type="button" className={`flex items-center ${className}`}>
        {children}
      </button>
    </>
  )
}

export default ButtonContainer