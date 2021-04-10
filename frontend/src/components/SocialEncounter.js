
export default function SocialEncounter() {

    const name = () => {
        const name = "Jim"
        return name
    }

    const job = () => {
        const job = "blacksmith"
        return job
    }

    const quest = () => {
        return "finding his dog"
    }
    
    return(
        <div className="SocialEncounter">
            You meet a {job()} named {name()} who needs help {quest()}. To find it, you must answer this question!
        </div>
    )
}