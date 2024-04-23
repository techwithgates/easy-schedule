import dayjs from "dayjs"
import { SolutionProps } from "../pages/Main"
import { Schedule } from "./ScheduleAdd"
import { useEffect, useState } from "react"

const Solution: React.FC<SolutionProps> = (props) => {
    const {members, modal, setModal} = props
    const slotsPerMember: string[] = []
    const slots: string[][] = []
    const availableSlots: string[] = []
    const [solution, setSolution] = useState<string[]>([])

    const closeModal = () => setModal({...modal, open: false, action: ''})

    // get the available time slots between start bound and start time
    const getFirstSlots = (startBound: string, _startTime: string) => {
        const startTime = new Date()
        const endTime = new Date()
        const nextStartTime = new Date()

        startTime.setHours(parseInt(startBound.slice(0, 2)), parseInt(startBound.slice(3)), 0)
        nextStartTime.setHours(parseInt(startBound.slice(0, 2)), parseInt(startBound.slice(3)) + 30, 0)
        endTime.setHours(parseInt(_startTime.slice(0, 2)), parseInt(_startTime.slice(3)), 0)

        // iterate and get the available slots
        while(nextStartTime <= endTime){
            slotsPerMember.push(`${dayjs(startTime).format('HH:mm')} - ${dayjs(nextStartTime).format('HH:mm')}`)
            startTime.setMinutes(startTime.getMinutes() + 30)
            nextStartTime.setMinutes(nextStartTime.getMinutes() + 30)
        }
    }

    // get the available time slots between start time and end bound
    const getSlots = (index: number, schedule: Schedule, scheduleList: Schedule[], endBound: string) => {
        let nextSlot = new Date()
        const startTime = new Date()
        const nextStartTime = new Date()

        startTime.setHours(parseInt(schedule.endTime.slice(0, 2)), parseInt(schedule.endTime.slice(3)), 0)
        nextStartTime.setHours(parseInt(schedule.endTime.slice(0, 2)), parseInt(schedule.endTime.slice(3)) + 30, 0)
        
        // compare with the next slot
        if(index < scheduleList.length - 1){
            const hour = parseInt(scheduleList[index + 1].startTime.slice(0, 2))
            const minute = parseInt(scheduleList[index + 1].startTime.slice(3))
            nextSlot.setHours(hour, minute, 0)
        }else{
            const hour = parseInt(endBound.slice(0, 2))
            const minute = parseInt(endBound.slice(3))
            nextSlot.setHours(hour, minute, 0)
        }

        // iterate and get the available slots
        while(nextStartTime <= nextSlot){
            slotsPerMember.push(`${dayjs(startTime).format('HH:mm')} - ${dayjs(nextStartTime).format('HH:mm')}`)
            startTime.setMinutes(startTime.getMinutes() + 30)
            nextStartTime.setMinutes(nextStartTime.getMinutes() + 30)
        }
    }

    // get the time slots that don't have start or end time
    const getSlotsWithoutStartEndTime = (startBound: string, endBound: string) => {
        const startTime = new Date()
        const endTime = new Date()
        const nextStartTime = new Date()
        
        startTime.setHours(parseInt(startBound.slice(0, 2)), parseInt(startBound.slice(3)), 0)
        nextStartTime.setHours(parseInt(startBound.slice(0, 2)), parseInt(startBound.slice(3)) + 30, 0)
        endTime.setHours(parseInt(endBound.slice(0, 2)), parseInt(endBound.slice(3)), 0)

        // iterate and get the available slots
        while(nextStartTime <= endTime){
            slotsPerMember.push(`${dayjs(startTime).format('HH:mm')} - ${dayjs(nextStartTime).format('HH:mm')}`)
            startTime.setMinutes(startTime.getMinutes() + 30)
            nextStartTime.setMinutes(nextStartTime.getMinutes() + 30)
        }
    }

    // get the common available time slots across the members
    const getCommonAvailableSlots = () => {
        const firstMemSlots = slots[0] // available slots of a the first member
        let exists = false

        // iterate and get the common available time slots
        for(const slot of firstMemSlots){
            for(let i=1; i<slots.length; i++){
                if(slots[i].includes(slot)){
                    exists = true
                    continue
                }
                exists = false
                break
            }
            exists && availableSlots.push(slot)
            exists = false
        }
    }

    useEffect(() => {
        for(const member of members){
            if(member.scheduleList.length > 0){
                member.scheduleList.forEach((schedule, idx) => {
                    if(idx === 0 && schedule.startTime !== member.startBound){
                        getFirstSlots(member.startBound, schedule.startTime)
                    }
                    getSlots(idx, schedule, member.scheduleList, member.endBound)
                })
            }else{
                getSlotsWithoutStartEndTime(member.startBound, member.endBound)
            }
            slots.push([...slotsPerMember])
            slotsPerMember.length = 0
        }
        getCommonAvailableSlots()
        console.log(availableSlots)
        setSolution([...availableSlots])
    }, [])

    return (
        <div className="sm:flex z-10 absolute sm:fixed inset-0 items-center justify-center">
			<div className="fixed inset-0 bg-opacity-80 bg-black" onClick={closeModal}/>
            <div className="sm:w-[500px] bg-gray-50 sm:rounded-lg relative sm:h-[30rem] p-2">
                <div className="flex justify-end absolute right-0 top-0 pt-4 pr-4">
                    <div className='bg-gray-300 rounded-full w-[25px] h-[26px] cursor-pointer hover:bg-gray-300/75 text-gray-600
                        text-center' onClick={closeModal}>&times;</div>
                </div>
                <div className="px-5 py-4 text-left text-gray-500 tracking-wide">
                    <h2 className="sm:text-xl mb-3 text-gray-700">Common Available Slots</h2>
                    <div className="border-t border-gray-400 w-full mt-1 mb-3"/>
                    <div className="p-3 bg-slate-200 rounded-md sm:overflow-y-auto sm:max-h-[24rem] sm:h-[30rem]">
                        {
                            solution.map((sol, idx) => 
                                <div key={idx} className="p-2 text-gray-700 hover:bg-slate-100 rounded-md">
                                    {idx + 1}. {sol}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solution