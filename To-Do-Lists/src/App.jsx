import { useState } from "react";

function App() {
   const [text, setText] = useState("");
   const [lists, setLists] = useState([]);
   const [isEdit, setIsEdit] = useState(null);
   const [editText, setEditText] = useState("");

   const addLists = () => {
      if (text.trim() !== "") {
         setLists((prev) => [...prev, text]);
         setText("");
      }
   };

   const removeList = (id) => {
      setLists((prev) => prev.filter((_, index) => index !== id));
   };

   const editList = (id) => {
      setIsEdit(id);
      setEditText(lists[id]);
   };

   const saveList = (id) => {
      if (editText.trim() !== "") {
         setLists((prev) =>
            prev.map((item, index) => (index === id ? editText : item))
         );
      }
      setIsEdit(null);
      setEditText("");
   };

   return (
      <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold text-center mb-4">TO-DO LISTS</h1>
         <div className="flex justify-center mb-4">
            <div className="flex gap-10 border border-gray-300 rounded py-2 px-4">
               <input
                  type="text"
                  className="focus:outline-none"
                  placeholder="Enter your activity here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
               />
               <button
                  className="ml-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  onClick={addLists}
               >
                  Add
               </button>
            </div>
         </div>
         <div className="space-y-2">
            {lists.map((list, index) => (
               <div
                  key={index}
                  className="flex items-center gap-4 border-b pb-2"
               >
                  {isEdit === index ? (
                     <>
                        <input
                           type="text"
                           className="border border-gray-300 rounded px-4 py-2 flex-1"
                           value={editText || ""}
                           onChange={(e) => setEditText(e.target.value)}
                        />
                        <button
                           className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                           onClick={() => saveList(index)}
                        >
                           Save
                        </button>
                     </>
                  ) : (
                     <>
                        <input
                           value={list}
                           disabled
                           className="border border-gray-300 rounded px-4 py-2 flex-1 bg-gray-100"
                        />
                        <button
                           className="btn bg-red-500"
                           onClick={() => removeList(index)}
                        >
                           Delete
                        </button>
                        <button
                           className="btn bg-blue-500"
                           onClick={() => editList(index)}
                        >
                           Edit
                        </button>
                     </>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
}

export default App;
