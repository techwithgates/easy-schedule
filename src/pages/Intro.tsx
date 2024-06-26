import { Link } from 'react-router-dom';

export default function Intro() {
    return (
        <div className="">
            <div className="p-5 bg-zinc-800 flex gap-5 absolute left-0 top-0 w-full">
                <svg className="w-8 h-8 mt-2 fill-current text-white" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 506.49"><path fillRule="nonzero" d="M294.24 17.11c0-9.42 9.3-17.11 20.86-17.11 11.57 0 20.87 7.65 20.87 17.11v74.85c0 9.42-9.3 17.11-20.87 17.11-11.56 0-20.86-7.65-20.86-17.11V17.11zm50.29 337.87a6.98 6.98 0 0 1 4.7-6.37c-.32-5.51-.99-13.79.5-19.09a23.29 23.29 0 0 1 10.42-13.23c1.77-1.09 3.69-2.01 5.65-2.71 3.61-1.29 1.82-7.33 5.75-7.41 9.17-.24 24.24 8.16 30.12 14.53 3.76 4.14 5.89 9.49 6.01 15.08l-.37 13.45c1.76.36 3.21 1.61 3.85 3.29 1.96 7.91-17.32 26.59-17.32 28.6.05.69.31 1.34.77 1.87 13.37 18.39 52.7 8.11 52.7 44.69H308.33c0-36.59 39.33-26.29 52.71-44.67.65-.97.96-1.5.95-1.92 0-1.79-17.46-19.65-17.46-26.11zm33.29-116.87c36.98 0 70.56 15.04 94.84 39.35 24.3 24.24 39.34 57.79 39.34 94.85 0 37.02-15.02 70.61-39.3 94.88l-.68.64c-24.23 23.88-57.5 38.66-94.2 38.66-36.99 0-70.56-15.04-94.84-39.3-24.3-24.32-39.34-57.89-39.34-94.88 0-37.06 15.04-70.61 39.31-94.88l.69-.64c24.24-23.9 57.53-38.68 94.18-38.68zm78.74 55.41c-20.09-20.11-47.96-32.58-78.74-32.58-30.5 0-58.14 12.25-78.19 32.03l-.55.59c-20.14 20.14-32.62 48-32.62 78.75 0 30.76 12.48 58.65 32.59 78.77 20.12 20.11 48 32.59 78.77 32.59 30.49 0 58.12-12.26 78.21-32.03l.54-.58c20.15-20.15 32.61-48 32.61-78.75s-12.47-58.61-32.62-78.79zM56.81 242.28c-1.18 0-2.24-5.2-2.24-11.56 0-6.39.94-11.54 2.24-11.54h56.94c1.19 0 2.25 5.2 2.25 11.54 0 6.38-.94 11.56-2.25 11.56H56.81zm90.78 0c-1.19 0-2.24-5.2-2.24-11.56 0-6.39.93-11.54 2.24-11.54h56.94c1.18 0 2.24 5.2 2.24 11.54 0 6.38-.94 11.56-2.24 11.56h-56.94zm90.77 0c-1.18 0-2.24-5.2-2.24-11.56 0-6.39.93-11.54 2.24-11.54h56.94c1.18 0 2.24 5.15 2.24 11.49a175.09 175.09 0 0 0-16.44 11.61h-42.74zM56.94 308.52c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.24 5.2 2.24 11.58 0 6.37-.93 11.57-2.24 11.57H56.94zm90.77 0c-1.18 0-2.24-5.2-2.24-11.57 0-6.38.93-11.58 2.24-11.58h56.94c1.18 0 2.24 5.2 2.24 11.58 0 6.37-.93 11.57-2.24 11.57h-56.94zM57.06 374.8c-1.18 0-2.24-5.2-2.24-11.58 0-6.37.94-11.57 2.24-11.57H114c1.19 0 2.25 5.2 2.25 11.57 0 6.38-.94 11.58-2.25 11.58H57.06zm90.78 0c-1.19 0-2.25-5.2-2.25-11.58 0-6.37.94-11.57 2.25-11.57h56.94c1.18 0 2.24 5.2 2.24 11.57 0 6.38-.94 11.58-2.24 11.58h-56.94zM106.83 17.11c0-9.42 9.29-17.11 20.86-17.11s20.86 7.65 20.86 17.11v74.85c0 9.42-9.32 17.11-20.86 17.11-11.57 0-20.86-7.65-20.86-17.11V17.11zM22.98 163.64h397.39V77.46c0-2.94-1.18-5.53-3.08-7.43-1.9-1.9-4.61-3.08-7.44-3.08h-38.1c-6.39 0-11.57-5.2-11.57-11.57 0-6.38 5.18-11.58 11.57-11.58h38.1c9.34 0 17.7 3.77 23.82 9.89 6.13 6.13 9.89 14.49 9.89 23.82v136.81c-7.6-2.62-15.42-4.73-23.45-6.29v-21.38h.26H22.98v223.17c0 2.94 1.19 5.52 3.08 7.42 1.9 1.9 4.61 3.09 7.43 3.09h188.87c2.14 8.01 4.85 15.83 8.11 23.35H33.71c-9.3 0-17.7-3.75-23.82-9.89C3.75 427.72 0 419.36 0 410.02V77.55c0-9.29 3.75-17.7 9.89-23.82 6.12-6.13 14.48-9.88 23.82-9.88h40.67c6.38 0 11.58 5.2 11.58 11.56 0 6.39-5.2 11.59-11.58 11.59H33.71c-2.96 0-5.54 1.18-7.44 3.08-1.9 1.9-3.09 4.59-3.09 7.43v86.16h-.2v-.03zm158.94-96.69c-6.37 0-11.57-5.2-11.57-11.57 0-6.38 5.2-11.58 11.57-11.58h77.55c6.39 0 11.59 5.2 11.59 11.58 0 6.37-5.2 11.57-11.59 11.57h-77.55z"/></svg>
                <h1 className="text-gray-100 font-semibold text-left sm:text-[30px]">Easy Schedule</h1>
                <Link to={'/solution'}>
                    <div className='p-2 bg-blue-600 w-30 text-white rounded-lg hover:bg-blue-500 cursor-pointer tracking-wider
                        text-[12px] text-center sm:p-4 sm:text-[14px]'>Getting Started
                    </div>
                </Link>
            </div>
            <div className="px-10 mt-28 pb-5 absolute left-0 text-[17px] text-left text-gray-700">
                <div>
                    <h1 className='font-bold pb-1 sm:text-[22px]'>Introduction</h1>
                    <div className='text-[14px] sm:text-[16px]'>
                        Easy Schedule is a simple software tool that can help you find the common available times among your team members.
                    </div>    
                </div>
                <div className='pt-3'>
                    <h2 className='font-semibold pb-1 sm:text-[20px]'>How to use this tool?</h2>
                    <div className='text-[14px] sm:text-[16px]'>
                        <div>
                            1. Input the member name and the start and end bound for each member. The start and end bound refers
                            the time range of work.
                        </div>
                        <div className='py-1'>
                            2. After that, you can input the start and end time slots for each member. The start and end time refers
                            the busy time slots.
                        </div>
                        <div>
                            3. When there are two or more members, the solution button be displayed and you can just click on it to see the 
                            available time slots.
                        </div>
                    </div>
                </div>
                <div className='pt-3'>
                    <h1 className='font-semibold pb-1 sm:text-[20px]'>Rules & Constraints</h1>
                    <div className='text-[14px] sm:text-[16px]'>
                        <div>
                            1. Easy Schedule accepts either an exact full hour or an hour and thrity mintues. For e.g. inputs may look like
                            10:00, 10:30, 14:00, 14:30 etc. 
                        </div>
                        <div className='py-1'>
                            2. Easy Schedule accepts up to 10 members and each member can have up to 7 different busy time slots
                        </div>
                        <div className='py-1'>
                            3. Easy Schedule does not save anything that were created and data will be gone if the page is refreshed
                            or reloaded
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}