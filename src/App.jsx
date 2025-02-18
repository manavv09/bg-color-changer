import { useState } from "react"

function App() {
  const [color, setColor] = useState("white")
  const [headingColor, setHeadingColor] = useState("black")

  const handleColorChange = (newColor) => {
    setColor(newColor)
    if (newColor === "black") {
      setHeadingColor("white")
    } else {
      setHeadingColor("black")
    }
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 style={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 50,
          color: headingColor
        }}>
          Backgronder Color Changer
        </h1>
        <div
          className="fixed flex justify-center items-center bottom-12 left-0 right-0 px-2"
        >
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl">
            <button
              onClick={() => handleColorChange("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => handleColorChange("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black", color: "white" }}
              onClick={() => handleColorChange("black")}
            >
              Black
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
              onClick={() => handleColorChange("olive")}
            >
              Olive
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
              onClick={() => handleColorChange("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "lavender" }}
              onClick={() => handleColorChange("lavender")}
            >
              Lavender
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
              onClick={() => handleColorChange("orange")}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => handleColorChange("yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => handleColorChange("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App