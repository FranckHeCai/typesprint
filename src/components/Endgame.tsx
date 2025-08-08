import { useTypeStore } from "../store/store";

const Endgame = () => {
  const {score} = useTypeStore(state => state)
  return (
    <div className="text-3xl font-medium">
      <p>{score} WPM</p>
    </div>
  );
};

export default Endgame;