type Options = {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body: string;
};

export const createBoardReq = async (requestOptions: Options) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/board`,
    requestOptions
  );
  const res = await req.json();

  return res;
};
