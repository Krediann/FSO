interface Message {
  message: string
}

export const Notification = (props: Message) => {
  return <div className="info">{props.message}</div>
}
