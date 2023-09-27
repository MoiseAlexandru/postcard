import './App.css';

const skills = [
    {
        skill: "Algorithms",
        level: "advanced",
        color: "yellow"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "orange"
    },
    {
        skill: "React",
        level: "intermediate",
        color: "lightblue"
    },
    {
        skill: "ASP.NET",
        level: "beginner",
        color: "lightgreen"
    },
    {
        skill: "NestJS",
        level: "beginner",
        color: "gray"
    }
]

function Avatar() {
    return (
        
        <img src = "./avatar.jpg" className = "avatar" alt = "avatar"/>
    );
}

function Intro() {
    return (
        <div>
            <h1>Moise Alexandru</h1>
            <p>3rd year student at University of Bucharest, I am passionate about computer science, app development in particular. In my spare time, I like to play computer games and watch tv shows.</p>
        </div>
    );
}

function Skill({currentSkill}) {
    const {skill, color, level} = currentSkill;
    console.log(skill);
    return (
        <div className = "skill" style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>
                {level === "advanced" && '😄'}
                {level === "intermediate" && '🙂'}
                {level === "beginner" && '🙃'}
            </span>
        </div>
    )
}

function SkillList() {
    return (
        <div className = "skill-list">
            {skills.map((currentSkill) => (
                <Skill currentSkill = {currentSkill} key = {currentSkill.skill}/>
            ))}
            {/*
            <Skill name = "Algorithms" backgroundColor = {"yellow"} emoji = "😄" />
            <Skill name = "JavaScript" backgroundCColor = {"orange"} emoji = "🙃"/>
            <Skill name = "React" backgroundColor = {"lightblue"} emoji = "😄" />
            <Skill name = "ASP.NET" backgroundColor = {"lightgreen"} emoji = "❤️" />
            <Skill name = "NestJS" backgroundColor = {"gray"} emoji = "😉" />*/}
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
