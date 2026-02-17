type childrenProp = {
    children:React.ReactNode
}
function Box({children}:childrenProp) {
  return (
    <div className="p-3 border italic">{children}</div>
  )
}

export default Box