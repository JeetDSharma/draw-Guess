const mockChatData = [
  {
    id: 1,
    message:
      "Banaaaaaaajfklajf;lajfajsfljasd;fljalk;fjasljfsaldkjfaaaaaaaaaananana",
    sender: "user2",
    timestamp: new Date(),
  },
  {
    id: 2,
    message: "Orange. dd fjf ajanafj fjf ff f f f f f f f f f f f ",
    sender: "user4",
    timestamp: new Date(),
  },
  {
    id: 3,
    message: "Apple",
    sender: "user1",
    timestamp: new Date(),
  },
  {
    id: 4,
    message: "Grapes",
    sender: "user3",
    timestamp: new Date(),
  },
];

const chatboxComponent = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full max-w-[300px] border border-gray-300 rounded-lg p-4">
      <div className="w-full">
        {mockChatData.map((chat) => (
          <div
            key={chat.id}
            className="flex flex-row gap-4 flex-wrap text-wrap"
          >
            <p className="font-bold text-sm">{chat.sender}</p>
            <p className="break-all text-sm">{chat.message}</p>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Type your guess"
          className="w-full border border-gray-300 rounded-lg p-2 "
        />
      </div>
    </div>
  );
};

export default chatboxComponent;
