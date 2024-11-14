
interface CardProps {
  title: string
  content: string
  footer: string
}

export function Card(props: CardProps) {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">

      <div className="bg-gray-800 text-white p-4">
        <h2 className="text-lg font-semibold">{props.title}</h2>
      </div>


      <div className="p-4">
        <p>{props.content}</p>
      </div>

      <div className="bg-gray-100 p-4 text-right">
        <span className="text-sm text-gray-600">{props.footer}</span>
      </div>
    </div>
  );
}