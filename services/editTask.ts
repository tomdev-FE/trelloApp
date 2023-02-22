type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};

export const editTaskReq = async (requestOptions: Options, id: string) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/task/${id}`,
    requestOptions
  );
  const res = await req.json();

  return res;
};
