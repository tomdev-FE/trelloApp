type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
};

export default async function deleteBoards(id: string, options: Options) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/board/${id}`,
    options
  );
  const res = await req.json();
  return res;
}
