import { useState } from "react";

interface RoomSettings {
  playersCount: number;
  drawTime: number;
  roundsCount: number;
  customWords: string[];
  joinedPlayers: string[];
  inviteLink: string;
}

export default function CreateRoom() {
  const [roomSettings, setRoomSettings] = useState<RoomSettings>({
    playersCount: 2,
    drawTime: 60,
    roundsCount: 3,
    customWords: [],
    joinedPlayers: [],
    inviteLink: "",
  });

  const generateInviteLink = () => {
    const link = `https://your-game-url.com/join?roomId=12345`;
    setRoomSettings((prevState) => ({
      ...prevState,
      inviteLink: link,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setRoomSettings((prevState) => ({
      ...prevState,
      [name]:
        name === "customWords" ? value.split(",") : parseInt(value) || value,
    }));
  };

  const handleStartGame = () => {
    alert("The game is starting!");
  };

  const handleInvitePlayers = () => {
    generateInviteLink();
    alert("Invitation link generated! Share the link with players.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
      <h1 className="text-3xl mb-6">Create Your Game Room</h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        <div className="space-y-4 w-full md:w-2/3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <label htmlFor="playersCount" className="mr-2">
                No. of Players
              </label>
              <select
                id="playersCount"
                name="playersCount"
                value={roomSettings.playersCount}
                onChange={handleChange}
                className="bg-gray-700 text-white p-2 rounded w-1/2"
              >
                {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="drawTime" className="mr-2">
                Draw Time (seconds)
              </label>

              <select
                id="drawTime"
                name="drawTime"
                value={roomSettings.drawTime}
                onChange={handleChange}
                className="bg-gray-700 text-white p-2 rounded w-1/2"
              >
                {[30, 40, 50, 60, 70, 80, 90].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-between">
              <label htmlFor="roundsCount" className="mr-2">
                No. of Rounds
              </label>
              <select
                id="roundsCount"
                name="roundsCount"
                value={roomSettings.roundsCount}
                onChange={handleChange}
                className="bg-gray-700 text-white p-2 rounded w-1/2"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label htmlFor="customWords" className="mr-2 text-nowrap">
              Custom Words
            </label>
            <textarea
              id="customWords"
              name="customWords"
              value={roomSettings.customWords.join(",")}
              onChange={handleChange}
              placeholder="Enter custom words, separated by commas"
              className="bg-gray-700 text-white p-2 rounded w-[70%] min-h-24 max-h-40"
            />
          </div>
        </div>

        <div className="space-y-4 flex-1">
          <h3 className="text-xl">Joined Players</h3>
          {roomSettings.joinedPlayers.length === 0 ? (
            <p>No players have joined yet.</p>
          ) : (
            <ul className="space-y-2">
              {roomSettings.joinedPlayers.map((player, index) => (
                <li key={index} className="bg-gray-700 p-2 rounded">
                  {player}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={handleStartGame}
          className="bg-blue-600 hover:bg-blue-700 p-2 rounded w-32 cursor-pointer"
        >
          Start Game
        </button>
        <button
          onClick={handleInvitePlayers}
          className="bg-green-600 hover:bg-green-700 p-2 rounded w-32 cursor-pointer"
        >
          Invite Link
        </button>
      </div>
      <div className="mt-6">
        {roomSettings.inviteLink ? (
          <p className="text-blue-400">{roomSettings.inviteLink}</p>
        ) : (
          <p>Generate the invite link to share with players.</p>
        )}
      </div>
    </div>
  );
}
