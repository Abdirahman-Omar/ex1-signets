import "./ListeLogiciels.scss";
import Logiciels from "./Logiciels";
import tabLogiciels from "./data/Logiciels.json";

function ListeLogiciels(props) {
  
  return (
    <div className="ListeLogiciels">
      <ul>
        {tabLogiciels.map((log) => (
          <Logiciels
            key={log.id}
            id={log.id}
            titre={log.titre}
            couleur={log.couleur}
            dateModification={log.dateModification}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListeLogiciels;