import CanvasComponent from "../../components/canvas/canvasComponent";
import ChatboxComponent from "../../components/chatbox/chatboxComponent";

const page = () => {
  return (
    <div className="flex justify-center items-center h-full gap-4">
      <CanvasComponent />
      <ChatboxComponent />
    </div>
  );
};

export default page;
