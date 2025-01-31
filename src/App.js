import { getImageUrl } from "./utils.js";

function ObjTodoList() {
  const person = {
    name: "sinnake",
    theme: {
      backgroundColor: "black",
      color: "pink",
    },
  };

  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}

function StyleTodoList() {
  return (
    <ul
      style={{
        backgroundColor: "black",
        color: "pink",
      }}
    >
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

function TodoList() {
  const toDay = new Date();
  const name = "Sinnake";

  const formatDate = function (date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  };

  return (
    <>
      <h1>
        {name}'s Todos [{formatDate(toDay)}]
      </h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      ></img>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

function Bio() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures</i>
        </b>{" "}
        of scientists!
      </p>
    </>
  );
}

function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";

  return (
    <>
      <img className="avatar" src={avatar} alt={description}></img>
    </>
  );
}

function PropsAvatar({ person, size = 100 }) {
  return (
    <img
      className="propsAvatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    ></img>
  );
}

function PropsProfile() {
  return (
    <>
      <PropsAvatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <PropsAvatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <PropsAvatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Item({ name, isPacked }) {
  return (
    <>
      <li className="item">
        {name} {isPacked && "✅"}
      </li>
      <li className="item">{isPacked ? <del>{name} ✅ </del> : name}</li>
    </>
  );
}

function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

function ArrayList() {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];

  let renderList = people.map((p) => {
    return <li>{p}</li>;
  });

  return <ul>{renderList}</ul>;
}

function ObjArrayList() {
  const people = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "MK3eW3A",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "mynHUSa",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "bE7W1ji",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "IOjWm71",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "lrWQx8l",
    },
  ];

  const chemists = people.filter((person) => person.profession === "chemist");

  const renderList = chemists.map((p) => (
    <li key={p.id}>
      <img src={getImageUrl(p)} alt={p.name} />
      <p>
        <b>{p.name}:</b>
        {" " + p.profession + " "}
        known for {p.accomplishment}
      </p>
    </li>
  ));

  return <ul>{renderList}</ul>;
}

function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>
        Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.
      </li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

function RecipeApp() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

function Button() {
  function handleClick() {
    alert("You clkicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}

function PropButton({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert("Playing ${movieName}!");
  }

  return <PropButton onClick={handlePlayClick}>play "{movieName}"</PropButton>;
}

function UploadButton() {
  return (
    <PropButton onClick={() => alert("Uploading!")}>Upload Image</PropButton>
  );
}

function PropToolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}

export default function App() {
  return (
    <>
      <PropToolbar />
      <Toolbar />
      <Button />
      <RecipeApp />
      <ObjArrayList />
      <ArrayList />
      <PackingList />
      <TodoList />
      <Bio />
      <Avatar />
      <StyleTodoList />
      <ObjTodoList />
      <PropsProfile />
      <Card>
        <PropsAvatar
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            imageId: "YfeOqp2",
          }}
        />
      </Card>
    </>
  );
}
