const LoadingScreen = ({ visible }) => {
  if (!visible) return null

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center z-[10000] transition-opacity duration-500 ${!visible ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
      <div className="text-center">
        <div className="text-4xl font-bold text-cream mb-md animate-[fadeIn_1s_ease]">
          ستور عكاظ
        </div>
        <div className="w-[50px] h-[50px] border-4 border-cream/20 border-t-gold rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  )
}

export default LoadingScreen
