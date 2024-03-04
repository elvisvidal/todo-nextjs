import Link from "next/link";

const EditLink: React.FC<{ todoId: number | string }> = ({ todoId }) => {
  return (
    <Link
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      href={`/todo/${todoId}/edit`}
      passHref
    >
      Edit
    </Link>
  );
};

export default EditLink;
