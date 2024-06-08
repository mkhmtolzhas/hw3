import PostList from "./components/PostList/PostList"
import Welcome from "./components/Welcome/Welcome";

export default function Home() {
  return (
    <main className="font-mono">
      <Welcome />
      <PostList />
    </main>
  );
}
