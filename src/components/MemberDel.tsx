import { MemberProps } from "../pages/Main"


const MemberDelete: React.FC<MemberProps> = (props) => {
    const {members, index, modal, setMembers, setModal} = props

    const closeModal = () => setModal({...modal, open: false, action: ''})

    const removeMember = () => {
        const temp = [...members]
        temp.splice(index, 1)
        setMembers(temp)
        setModal({...modal, open: false, action: ''})
    }

    return (
        <div className="flex z-10 fixed inset-0 items-center justify-center h-[35rem]">
            <div className="fixed inset-0 bg-opacity-80 bg-black" onClick={closeModal}/>
            <div className="w-[520px] mx-2 bg-gray-50 rounded-lg shadow-xl relative top-[-30px]">
                <div className="flex justify-end absolute right-0 top-0 pt-4 pr-4">
                    <div className='bg-gray-300 rounded-full w-[25px] h-[26px] text-center cursor-pointer hover:bg-gray-300/75 text-gray-600' 
                        onClick={closeModal}>&times;</div>
                </div>
                <div className="px-5 py-4 text-left text-gray-500 tracking-wide">
                    <h2 className="sm:text-xl font-semibold mb-3 text-gray-700">Remove Member</h2>
                    <div className="border-t border-gray-400 w-full mt-1"/>
                    <form className="text-[16px] text-gray-200">                        
                        <div className="text-gray-700 flex justify-center text-sm sm:text-[17px] pt-5 pb-2">
                            Are you sure to remove this person?
                        </div>
                        <div className="pt-1 flex gap-3 text-sm sm:text-[16px]">
                            <button className='w-full mt-5 mb-2 py-3 bg-blue-600 hover:bg-blue-500 shadow-lg rounded-lg
                                tracking-wider' type="button" onClick={closeModal}>Cancel</button>
                            <button className='w-full mt-5 mb-2 py-3 bg-red-600 hover:bg-red-500 shadow-lg rounded-lg
                                tracking-wider' type="button" onClick={removeMember}>Confirm</button>
                        </div>                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MemberDelete