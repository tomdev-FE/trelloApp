type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
};

export default async function deleteTaskReq(id: string, options: Options) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/task/${id}`,
    options
  );
  const res = await req.json();
  return res;
}
