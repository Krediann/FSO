interface Message {
  message: string
}

export const Notification = (props: Message) => {
  if (!props.message) {
    return
  }

  return <div className="info">{props.message}</div>
}
