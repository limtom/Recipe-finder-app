function Btn({ children, bgColor, textColor }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      className="py-3 px-6 rounded-full text-sm cursor-pointer font-bold font-sans hover:bg-secondary"
    >
      {children}
    </button>
  );
}

export default Btn;
