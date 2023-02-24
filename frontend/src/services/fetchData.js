export async function fetchdata() {
  try {
    const res = await fetch("http://localhost:8000/questionAnswer");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("you got error", error);
  }
}
//if we get async we will get a primice  so we can either get the data by using then or by using async await

// async function sum(){
//     return 10;
// }

// sum().then((res)=> console.log(res))

// fetch("http://localhost:8000/questionAnswer")
// .then((res) => res.json())
// .then((data) => setQuestionAnswers(data));


// its in json format so we will use json method to convert it into js object
// and hten json is procvising the promise so we will use then again to get the data