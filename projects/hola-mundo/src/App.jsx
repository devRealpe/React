import "./App.css";
import "./index.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard
        userName="Johan"
        name="Johan Ordoñez"
        isFollowing={true}
      />

      <TwitterFollowCard
        userName="midudev"
        name="Miguel Ánguel Durán"
        isFollowing={false}
      />
    </section>
  );
}
