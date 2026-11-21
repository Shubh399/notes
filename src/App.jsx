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
    <div className="flex h-screen bg-black text-white flex-col min-full">
      <div className="flex h-1/2 bg-black text-white flex-row min-full">
        <form action="" onSubmit={(e) => {
          e.preventDefault()
          notes(e)
        }} className="w-full flex items-start flex-col gap-4 p-10">

          {/* This input for Notes title */}
          <input
            value={title}
            onChange={(el) => {
              settitle(el.target.value)
            }}
            type="text"
            placeholder="Enter Task Name "
            className="w-1/2 px-5 p-2 m-2 border-2 rounded"
          />

          {/* This input for Notes description */}
          <textarea
            value={description}
            onChange={(el) => {
              setdescription(el.target.value)
            }}
            type="text"
            className="w-1/2 min-h-30 px-5 p-2 m-2 border-2 rounded flex align-text-top outline-0"
            placeholder="Enter Task description "
          />
          <button type="submit" className="w-1/2 px-5 p-2 m-2 border-2 rounded bg-white text-black text-2xl cursor-pointer hover:scale-95">Add note</button>
        </form>
        <div className="w-1/3 flex items-start flex-col gap-4 p-10">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjFDsHZuOhUHU37B8RFNsJ-4ErDAPtsF4pCFqdx-lYEg&s=10" alt="note_image" className=" rounded-2xl" />
        </div>
      </div>

      <h1 className=" text-4xl p-2 mx-2 font-semibold ">Recent Notes</h1>

      {/* These are notes */}
      <div className="flex w-full h-full">
        <div className="flex min-[45%] h-full overflow-x-scroll scrollbar-none">
          {task.map(function (elm,idx) {
            
            return <div key={idx}  className=" bg-gray-400 text-black min-w-100 max-h-80  scroll-m-0  p-2 m-2 rounded-2xl text-2xl">
              <h1 className=" text-3xl font-bold font-serif">{elm.title}</h1>
              <p>{elm.description}</p>
            </div>
            
          })}
        </div>
      </div>
    </div>

  );
};

export default App;