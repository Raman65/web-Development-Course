import Image from "next/image";

export default function Home() {
  return (
    <div className="container size-80 my-5 bg-red-600 relative">
      <Image className="mx-auto object-cover" fill={true} 
      src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo9L_zjW5fvK6lxTLBo42akOhD-BqkwWzBfTB3kusFZ8IhSxptKfGWn9aIrKDL97oFB6-ccjC881sxxzAH1kMS1tgUj_h0hZLU6z0JY4335OXEfr2tgBJwOKUlB_S9IJLdHMQp4I310RHKo2yp0n_aLGCfj8-7fIK60qZFJ6Z_WaOgyv5ZVZsw4255/s1280/1.jpg" alt="" />
    </div>
  );
}
