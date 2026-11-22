import { useState } from "react";
const App = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [task, settask] = useState([])

  const copyTask = [...task]

  let notes = () => {
    settask(copyTask)
    console.log(copyTask);

    copyTask.push({ title, description })
    setdescription(" ")
    settitle(" ")
  }
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] overflow-y-hidden m-1 p-2">

    <div className="flex h-screen text-white flex-col min-full ">
      <div className="flex h-1/2 text-white flex-row min-full">
        <form action=""  onSubmit={(e) => {
          e.preventDefault()
          notes(e)
        }} className="w-full flex items-start flex-col gap-4 p-10 text-black">

          {/* This input for Notes title */}
          <input
            value={title}
            onChange={(el) => {
              settitle(el.target.value)
            }}
            type="text"
            placeholder="Enter Task Title "
            className="w-1/2 px-5 p-2 m-2 border-2 rounded text-black"
          />

          {/* This input for Notes description */}
          <textarea
            value={description}
            onChange={(el) => {
              setdescription(el.target.value)
            }}
            type="text"
            className=" w-1/2 min-h-30 px-5 p-2 m-2 border-2 rounded flex align-text-top outline-0 text-black"
            placeholder="Enter Task description "
          />
          <button type="submit" className="w-1/2 px-5 p-2 m-2 border-2 rounded  text-black text-2xl cursor-pointer hover:scale-95">Add note</button>
        </form>
        <div className="w-1/3 flex items-center flex-col gap-4 p-10 justify-center ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t-A2obo9wzxPiEZ-a81qsSXb48nJXoGbEkSQ6VafmQ&s=10" alt="note_image" className=" rounded-2xl " />
        </div>
      </div>

      <h1 className=" text-4xl p-2 mx-2 font-semibold text-black">Recent Notes</h1>

      {/* These are notes */}
      <div className="flex w-full h-full">
        <div className="flex w-[99%] h-[95%] overflow-x-scroll scrollbar-none">
          {task.map(function (elm,idx) {
            
            return <div key={idx}  className=" bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprLtbfR7pNrP2llW86CO0bQzI8hcYame5ipuIVdOp_Q&s=10')] bg-top bg-cover bg-no-repeat min-w-70 max-h-80 m-2 p-2 rounded-2xl text-2xl text-black scrollbar-thin scrollbar-thumb-slate-400 overflow-y-scroll">
              <h1 className=" text-3xl font-bold font-serif">{elm.title}</h1>
              <p className="">{elm.description}</p>
            </div>
            
          })}
        </div>
      </div>
    </div>

    </div>
  );
};

export default App;