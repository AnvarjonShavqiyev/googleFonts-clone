import "./Utils.scss"

const Container = ({children}:any) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

export { Container }