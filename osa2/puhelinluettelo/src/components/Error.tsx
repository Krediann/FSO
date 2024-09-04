interface ErrorMessage {
  errorMessage: string
}

export const Error = (props: ErrorMessage) => {
  if (!props.errorMessage) {
    return
  }

  return <div className="error">{props.errorMessage}</div>
}
