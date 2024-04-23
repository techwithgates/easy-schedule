import React, { useRef, useState } from "react"
import ScheduleAdd from "../components/ScheduleAdd"
import MemberDelete from "../components/MemberDel"
import memberIsValid from "../utils/member_validator"
import Solution from "../components/Solution"

interface Modal {
	action: string
	open: boolean
}

interface Member {
	id: number
	name: string
	startBound: string
	endBound: string
	scheduleList: {startTime: string, endTime: string}[]
}

export interface ScheduleProps {
	member: Member
	members: Member[]
	modal: Modal
	index: number
	setMember: React.Dispatch<React.SetStateAction<Member>>
	setMembers: React.Dispatch<React.SetStateAction<Member[]>>
	setModal: React.Dispatch<React.SetStateAction<Modal>>
}

export interface MemberProps {
	members: Member[]
	index: number
	modal: Modal
	setMembers: React.Dispatch<React.SetStateAction<Member[]>>
	setModal: React.Dispatch<React.SetStateAction<Modal>>
}

export interface SolutionProps {
	members: Member[]
	modal: Modal
	setModal: React.Dispatch<React.SetStateAction<Modal>>
}

export default function Main() {
	const [memberInput, setMemberInput] = useState({name: '', startBound: '', endBound: ''})
	const [member, setMember] = useState<Member>({id: 0, name: '', startBound: '', endBound: '', scheduleList: []})
	const [members, setMembers] = useState<Member[]>([])
	const [index, setIndex] = useState<number>(0)
	const [modal, setModal] = useState<Modal>({open: false, action: ''})
	const formRef = useRef<HTMLFormElement>(null)

	const addMember = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if(!memberIsValid(memberInput, members.length)){
			return
		}

		const newMember: Member = {
			id: members.length + 1,
			name: memberInput.name,
			startBound: memberInput.startBound,
			endBound: memberInput.endBound,
			scheduleList: []
		}

		setMembers((prevMembers) => [...prevMembers, newMember])
		formRef.current?.reset()
	}

	const openModal = (action: string, member: Member | null, index: number | null) => {
		setModal({...modal, open: true, action: action})
		index !== null && setIndex(index)
		action === 'edit' && member !== null && setMember(member)
	}

	return (
		<div className="">
			{ modal.open && modal.action === 'edit' && <ScheduleAdd member={member} members={members} setMembers={setMembers}
				setMember={setMember} modal={modal} setModal={setModal} index={index}/> }
			{ modal.open && modal.action === 'del' && <MemberDelete members={members} setMembers={setMembers} modal={modal}
				setModal={setModal} index={index}/> }
			{ modal.open && modal.action === 'solution' && <Solution members={members} modal={modal} setModal={setModal}/> }
			<div className="sm:flex gap-5 sm:px-8 sm:py-5">
				<div className="w-full sm:py-5 sm:px-10 sm:bg-zinc-200 rounded-xl">
					<div className="pt-3">
						<h3 className="text-center sm:text-[16px] sm:text-left">Input Member Names</h3>			
						<div className="pt-2 gap-5">
							<div className="sm:border-t border-gray-400 w-full mb-3"/>
							<div className="bg-white rounded-lg">
								<form className="px-5 py-2 pb-4" onSubmit={addMember} ref={formRef}>
									<div>
										<label className="text-sm flex pt-1 pb-2">Member Name</label>
										<input className="w-full flex justify-start rounded-lg bg-zinc-200 py-3 pl-3
											focus:outline-none text-gray-700" type="text" placeholder="Member Name" required
											onChange={(e) => setMemberInput({...memberInput, name: e.target.value})}/>
									</div>
									<div className="py-3 text-sm sm:text-[16px]">
										<label className="flex pb-2">Start Boundary</label>
										<input className="w-full flex justify-start rounded-lg bg-zinc-200 py-3 pl-3
											focus:outline-none text-gray-700 " type="text" placeholder="e.g. 09:00"
											pattern="^(?:[01]\d|2[0-3]):(?:00|30)$" minLength={5} maxLength={5} required
											onChange={(e) => setMemberInput({...memberInput, startBound: e.target.value})} />
									</div>
									<div className="pb-3 text-sm sm:text-[16px]">
										<label className="flex pb-2">End Boundary</label>
										<input className="w-full flex justify-start rounded-lg bg-zinc-200 py-3 pl-3
											focus:outline-none text-gray-700 " type="text" placeholder="e.g. 18:00"
											pattern="^(?:[01]\d|2[0-3]):(?:00|30)$" minLength={5} maxLength={5} required
											onChange={(e) => setMemberInput({...memberInput, endBound: e.target.value})} />
									</div>
									<div className="pt-1 text-sm sm:text-[16px]">
										<button className="px-6 py-3 rounded-lg text-white bg-blue-700 w-full hover:bg-blue-600">
											Add Member
										</button>
									</div>									
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="px-5 sm:py-5 sm:px-10 w-full sm:bg-zinc-200 rounded-xl">		
					<div className="">
						<div className="border-t border-gray-500 w-full my-3 sm:border-none"/>
						<h3 className="text-center sm:text-[16px] sm:text-left">Member List</h3>
						<div className="pt-2 gap-5">
							<div className="sm:border-t border-gray-400 w-full mb-3"/>
							<div className="bg-white rounded-lg sm:overflow-y-auto sm:h-full sm:max-h-[27rem]">
								<div className="pb-3">
									{
										members.map((member, idx) =>
											<div className="flex justify-between sm:px-3 py-3 sm:m-3 hover:bg-zinc-100 rounded-md" key={idx}>
												<p className="flex">{idx + 1}. {member.name}</p>
												<div className="flex gap-4">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
														className="w-6 h-6 cursor-pointer" onClick={() => openModal('edit', member, idx)}>
														<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
													</svg>
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
														className="w-6 h-6 cursor-pointer" onClick={() => openModal('del', null, idx)}>
														<path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
													</svg>
												</div>
											</div>
										)
									}
								</div>
								<div className="sm:px-5 sm:pb-2">
									{
										members.length >= 2 &&
										<button className='w-full px-6 py-3 mb-2 bg-green-600 hover:bg-green-500 shadow-lg 
											rounded-lg text-white tracking-wider text-sm sm:text-[16px]'
											onClick={() => openModal('solution', null, null)}>Find Solution
										</button>
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}