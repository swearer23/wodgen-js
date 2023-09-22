import WhiteBoard from "./components/whiteboard"
import UserInput from "./components/UserInput"

export default async function Home() {
  return (
    <div className="w-full text-left">
      <WhiteBoard />
      <UserInput />
    </div>
  )
}
