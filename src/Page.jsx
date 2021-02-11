import './Page.scss';
import Entete from './Entete';
import ListeLogiciels from './ListeLogiciels';

export default function Page() {
  return (
    <div className="Page">
       <Entete></Entete>
       <ListeLogiciels/>
    </div>
  );
}
