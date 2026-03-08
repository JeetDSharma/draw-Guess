import CanvasComponent from "../../components/canvas/canvasComponent";
import ChatboxComponent from "../../components/chatbox/chatboxComponent";

const page = () => {
  return (
    <div className="flex gap-4 h-full max-h-[600px] mx-auto items-start">
      <CanvasComponent />
      <ChatboxComponent />
    </div>
  );
};

export default page;
