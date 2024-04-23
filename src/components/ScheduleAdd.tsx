import React, { useEffect, useRef, useState } from "react";
import {ScheduleProps} from '../pages/Main'
import scheduleIsValid from "../utils/schedule_validator";

export interface Schedule {
	startTime: string
	endTime: string
}

const ScheduleAdd: React.FC<ScheduleProps> = (props) => {
	const {member, members, setMember, setMembers, modal, setModal, index} = props
	const [schedules, setSchedules] = useState<Schedule[]>(member.scheduleList)
	const [schedule, setSchedule] = useState({startTime: '', endTime: ''})
	const scheduleBound = {startBound: member.startBound, endBound: member.endBound}
	const formRef = useRef<HTMLFormElement>(null)

	const closeModal = () => setModal({...modal, open: false, action: ''})

	const addSchedule = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if(!scheduleIsValid(scheduleBound, schedule, schedules)){
			return false
		}

		const temp = [...schedules]
		temp.push(schedule)
		temp.sort((slot1, slot2) => {return slot1.startTime.localeCompare(slot2.startTime)})
		setSchedules(temp)
		formRef.current?.reset()
	}

	useEffect(() => {
		setMember(prevMember => ({...prevMember, scheduleList: schedules}))
	}, [schedules])

	useEffect(() => {
		const tempMembers = [...members]
		tempMembers[index] = member
		setMembers(tempMembers)
	}, [member])

	const removeSchedule = (idx: number) => {
		const temp = [...schedules]
		temp.splice(idx, 1)
		setSchedules(temp)
	}

	return (
		<div className="sm:flex z-10 absolute sm:fixed inset-0 items-center justify-center">
			<div className="fixed inset-0 bg-opacity-80 bg-black" onClick={closeModal}/>
			<div className="sm:flex gap-3">
				<div className="sm:w-[500px] bg-gray-50 sm:rounded-lg shadow-xl relative sm:h-[32rem]">
					<div className="flex justify-end absolute right-0 top-0 pt-4 pr-4">
						<div className='bg-gray-300 rounded-full w-[25px] h-[26px] cursor-pointer hover:bg-gray-300/75 text-gray-600
							text-center' onClick={closeModal}>&times;</div>
					</div>
					<div className="px-5 py-4 text-left text-gray-500 tracking-wide">
						<h2 className="sm:text-xl mb-3 text-gray-700">Add Busy Schedule</h2>
						<div className="border-t border-gray-400 w-full my-2"/>
						<form ref={formRef} className="text-sm sm:text-[16px] text-gray-700" onSubmit={addSchedule}>
							<div className="flex flex-col py-2">
								<label>Start Bound</label>
								<input type="text" className="rounded-lg w-full mt-2 bg-slate-200 p-3 pb-[13px] cursor-not-allowed
									focus:outline-none" value={member.startBound} disabled />
							</div>
							<div className="flex flex-col py-2">
								<label>End Bound</label>
								<input type="text" className="rounded-lg w-full mt-2 bg-slate-200 p-3 pb-[13px] cursor-not-allowed
									focus:outline-none" value={member.endBound} disabled />
							</div>
							<div className="flex flex-col py-2">
								<label>Start Time</label>
								<input type="text" className="rounded-lg w-full mt-2 bg-slate-200 p-3 pb-[13px] focus:outline-none"
									placeholder="e.g. 13:00" pattern="^(?:[01]\d|2[0-3]):(?:00|30)$" required minLength={5} maxLength={5}
									onChange={(e) => setSchedule({...schedule, startTime: e.target.value})}/>
							</div>
							<div className="flex flex-col">
								<label>End Time</label>
								<input type="text" className="rounded-lg w-full mt-2 bg-slate-200 p-3 pb-[13px] focus:outline-none"
									placeholder="e.g. 14:00" pattern="^(?:[01]\d|2[0-3]):(?:00|30)$" required minLength={5} maxLength={5}
									onChange={e => setSchedule({...schedule, endTime: e.target.value})}/>
							</div>
							<button className='w-full mt-5 mb-2 py-3 bg-blue-700 hover:bg-blue-600 shadow-lg rounded-lg text-white
								tracking-wider'>Add Period</button>
						</form>
					</div>
					<div className="pb-2 border-t border-gray-500 w-full sm:border-none"/>
				</div>
				<div className="sm:w-[500px] bg-gray-50 sm:rounded-lg shadow-xl relative sm:h-[30rem] p-3">	
					<div className="bg-zinc-200 p-3 sm:rounded-md sm:overflow-y-auto sm:max-h-[28.5rem]">
						{
							schedules.map((schedule, idx) =>
								<div className="flex justify-between py-2 sm:p-3 sm:mx-1 hover:bg-zinc-100 rounded-md" key={idx}>
									<p className="flex">{idx + 1}. {schedule.startTime} - {schedule.endTime}</p>
									<div className="flex gap-4">
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
											className="w-6 h-6 cursor-pointer" onClick={() => removeSchedule(idx)}>
											<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
										</svg>
									</div>
								</div>
							)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default ScheduleAdd