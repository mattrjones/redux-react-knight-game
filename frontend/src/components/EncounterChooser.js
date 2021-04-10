import CombatEncounter from "./CombatEncounter";
import SocialEncounter from "./SocialEncounter";

export default function EncounterChooser(props) {

    switch(props.id){
        case 1: 
            return <CombatEncounter />
        case 2:
            return <SocialEncounter />
        default:
            break;
    }
}