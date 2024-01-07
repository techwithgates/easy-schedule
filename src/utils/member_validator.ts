
interface MemberInput {
    name: string
    startBound: string
    endBound: string
}

const memberIsValid = (input: MemberInput, members: number) => {
    const startTime = new Date()
    const endTime = new Date()

    startTime.setHours(parseInt(input.startBound.slice(0, 2)), parseInt(input.startBound.slice(3)), 0)
    endTime.setHours(parseInt(input.endBound.slice(0, 2)), parseInt(input.endBound.slice(3)), 0)

    if(startTime.getTime() >= endTime.getTime()){
        alert('Invalid time bound!')
        return false
    }
    
    if(members + 1 > 10){
        alert('Members can be only up to 10!')
        return false
    }

    return true
}

export default memberIsValid