import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <article>
          <h1>Article Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus suscipit ipsam ullam maxime. Delectus inventore sunt
            quidem alias rem quisquam!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex fugiat
            quas necessitatibus sequi possimus amet earum vitae voluptas quidem.
            Quaerat repudiandae necessitatibus fugiat dolore cumque delectus
            cupiditate deserunt, reiciendis quo esse quam totam molestiae,
            harum, corporis aliquid laudantium aliquam praesentium. Ipsum
            distinctio facere nostrum. Dignissimos deleniti eius exercitationem
            culpa unde!
          </p>
        </article>
      </main>
    </div>
  );
}

export default App;
