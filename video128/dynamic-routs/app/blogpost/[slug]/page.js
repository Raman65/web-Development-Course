
export default function Page({ params }) {

    // console.log(params);
    
    // throw new Error("error hai")

    let languages = ["python", "javascript", "java", "cpp", "cs"]
    if(languages.includes(params.slug)){
        return <div>Post: {params.slug}</div>
    }
    else{
        return <div>post not found</div>
    }
  return <div>Post: {params.slug}</div>
}