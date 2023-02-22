export default async function getTasks(setTasks: any) {
  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/task`, {});
  const res = await req.json();

  setTasks(res);
}
