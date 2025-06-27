import { useTypeStore } from "../store/store";

const Endgame = () => {
  const {score} = useTypeStore(state => state)
  return (
    <div>
      <h1>{score} WPM</h1>
    </div>
  );
};

export default Endgame;