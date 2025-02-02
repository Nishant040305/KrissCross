import { motion } from "framer-motion";
import bg from "../assets/home-bg.jpg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.h1
        className="text-5xl font-bold mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        KrissCross
      </motion.h1>
      <p className="text-lg mb-8">
        Guess the drawing and have fun with friends!
      </p>

      <motion.div
        className="flex flex-col items-center gap-4 bg-white p-6 rounded-2xl shadow-xl text-black w-96 bg-opacity-90"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded-lg"
        />

        <Link
          to={"/join-room"}
          className="w-full bg-blue-500 text-center hover:bg-blue-600 text-white py-2 rounded-lg cursor-pointer"
        >
          Join Game
        </Link>

        <p className="text-gray-600">OR</p>
        <Link
          to="/create-room"
          className="w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg cursor-pointer"
        >
          Play with friends
        </Link>
      </motion.div>
    </div>
  );
}
