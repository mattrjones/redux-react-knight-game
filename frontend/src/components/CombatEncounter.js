export default function CombatEncounter() {

    const randomStat = () => {
        return Math.floor(Math.random() * 5) + 1
    }

    return(
        <div className="CombatEncounter">
            You see a monster! It has an attack of 5 and a defense of 5. To defeat it, you must answer this question!
        </div>
    )
}