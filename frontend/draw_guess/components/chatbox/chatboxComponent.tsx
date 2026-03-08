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
  {
    id: 5,
    message:
      "Banaaaaaaajfklajf;lajfajsfljasd;fljalk;fjasljfsaldkjfaaaaaaaaaananana",
    sender: "user2",
    timestamp: new Date(),
  },
  {
    id: 6,
    message: "Orange. dd fjf ajanafj fjf ff f f f f f f f f f f f ",
    sender: "user4",
    timestamp: new Date(),
  },
  {
    id: 7,
    message: "Apple",
    sender: "user1",
    timestamp: new Date(),
  },
  {
    id: 8,
    message: "Grapes",
    sender: "user3",
    timestamp: new Date(),
  },
  {
    id: 9,
    message:
      "Banaaaaaaajfklajf;lajfajsfljasd;fljalk;fjasljfsaldkjfaaaaaaaaaananana",
    sender: "user2",
    timestamp: new Date(),
  },
  {
    id: 10,
    message: "Orange. dd fjf ajanafj fjf ff f f f f f f f f f f f ",
    sender: "user4",
    timestamp: new Date(),
  },
  {
    id: 11,
    message: "Apple",
    sender: "user1",
    timestamp: new Date(),
  },
  {
    id: 12,
    message: "Grapes",
    sender: "user3",
    timestamp: new Date(),
  },
  {
    id: 13,
    message:
      "Banaaaaaaajfklajf;lajfajsfljasd;fljalk;fjasljfsaldkjfaaaaaaaaaananana",
    sender: "user2",
    timestamp: new Date(),
  },
  {
    id: 14,
    message: "Orange. dd fjf ajanafj fjf ff f f f f f f f f f f f ",
    sender: "user4",
    timestamp: new Date(),
  },
  {
    id: 15,
    message: "Apple",
    sender: "user1",
    timestamp: new Date(),
  },
  {
    id: 16,
    message: "Grapes",
    sender: "user3",
    timestamp: new Date(),
  },
  {
    id: 17,
    message:
      "Banaaaaaaajfklajf;lajfajsfljasd;fljalk;fjasljfsaldkjfaaaaaaaaaananana",
    sender: "user2",
    timestamp: new Date(),
  },
  {
    id: 18,
    message: "Orange. dd fjf ajanafj fjf ff f f f f f f f f f f f ",
    sender: "user4",
    timestamp: new Date(),
  },
  {
    id: 19,
    message: "Apple",
    sender: "user1",
    timestamp: new Date(),
  },
  {
    id: 20,
    message: "Grapes",
    sender: "user3",
    timestamp: new Date(),
  },
];

const chatboxComponent = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full max-w-[300px] border border-gray-300 rounded-lg p-4 ">
      <div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scroll-smooth pr-4">
        {mockChatData.map((chat) => (
          <div key={chat.id} className="flex flex-row gap-4 mb-2">
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
