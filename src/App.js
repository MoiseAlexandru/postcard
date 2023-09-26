import './App.css';

function Avatar() {
    return (
        
        <img src = "./avatar.jpg" className = "avatar" alt = "avatar"/>
    );
}

function Intro() {
    return (
        <div>
            <h1>Moise Alexandru</h1>
            <p>3rd year student at University of Bucharest, I am passionate about computer science, especially app development. In my spare time, I like to play computer games and watch tv shows.</p>
        </div>
    );
}

function Skill(props) {
    return (
        <div className = "skill" style={{backgroundColor: props.backgroundcolor}}>
            <span>{props.name}</span>
            <span>{props.emoji}</span>
        </div>
    )
}

function SkillList() {
    return (
        <div className = "skill-list">
            <Skill name = "Algorithms" backgroundcolor = {"yellow"} emoji = "😄" />
            <Skill name = "JavaScript" backgroundcolor = {"orange"} emoji = "🙃"/>
            <Skill name = "React" backgroundcolor = {"lightblue"} emoji = "😄" />
            <Skill name = "ASP.NET" backgroundcolor = {"lightgreen"} emoji = "❤️" />
            <Skill name = "NestJS" backgroundcolor = {"gray"} emoji = "😉" />
        </div>
    );
}

function App() {
  return (
    <div className = "card">
        <Avatar />
        <div className = "data">
            <Intro />
            <SkillList />
        </div>
    </div>
  );
}

export default App;
