// props = {
//   name: "Mishkatul Islam",
//   phone: "+182158726",
//   email: "mishkatulovi@gmail.com",
//   github: "mishkat01",  
//   skills: ["JavaScript", "PHP", "Node.js"],
//   interests: ["Chess", "Football analysis"],
//   socialLinks: [{
//     facebook: "mishkat",  
//     linkedIn: "Mishkatul Islam"}]

// }



const BioData = (props) => {
  return (
    <div className="bio-data">
      <h2>{props.name}</h2>
      <p>
        <strong>phone :</strong> {props.phone}
      </p>
      <p>
        <strong>email :</strong> {props.email}
      </p>
      <p>
        <strong>Github :</strong> {props.github}
      </p>

      <div className="skill">
        <h1>Skills</h1>
        <ul>
              {props?.skills?.map(skill=>(
                <li key={skill}>{skill}</li>
              ))}
        </ul>
      </div>

      <div className="interest">
        <h1>interest</h1>
        <ul>
                {props?.interest?.map(int=>(
                  <li key={int}>{int}</li>
                ))}
        </ul>
      </div>

      <div className="social-links">
        <h1>My social Medias</h1>
        <ul>
                {props?.sociallink?.map(sociallink=>(
                    <li><strong>{sociallink.platform}</strong> {sociallink.info}</li>
                ))}
        </ul>
      </div>
    </div>
  );
};
export default BioData;
