import './Logiciels.scss';

export default function Logiciels(props) {

  
    return (
        <li className="Logiciels">
            <div className="image">
                <img src={'images-logiciels/' + props.id + '.png'} alt={props.titre}/>
            </div>
            <div className="info">
                <h3>{props.titre}</h3>
                <h4>Modifié: {props.dateModification}</h4>
            </div>
        </li>
    );
}