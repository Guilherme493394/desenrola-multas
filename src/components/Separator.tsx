interface SeparatorProps {
  id: string;
}
function Separator({ id }: SeparatorProps) {
  return (
    <div className="flex w-full items-center rounded-full my-5" id={id}>
      <div className="flex-1 border-b border-gray-300"></div>
    </div>
  );
}

export default Separator;
