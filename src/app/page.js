import Home from "@/components/Home/Home";

 const   page = async () => {
  const data = await fetch("http://localhost:5000/dua");
  const dataDua = await data.json();
  return (
    <div>
      <Home dataDua={dataDua}/>
    </div>
  );
}
export default page
