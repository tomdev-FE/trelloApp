type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};

export const createTaskReq = async (requestOptions: Options) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/task`,
    requestOptions
  );
  const res = await req.json();

  return res;
};
