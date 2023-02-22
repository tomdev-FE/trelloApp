type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};

export const editBoardReq = async (requestOptions: Options, id: string) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/board/${id}`,
    requestOptions
  );
  const res = await req.json();
  return res;
};
