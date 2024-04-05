type LoaderProps = {
  fullPage: boolean
  message?: string
}

const Loader = ({ fullPage, message }: LoaderProps) => {
  if (fullPage) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h2>Loading {message}...</h2>
      </div>
    )
  }

  return (
    <div className="loader"></div>
  )
}

export default Loader;