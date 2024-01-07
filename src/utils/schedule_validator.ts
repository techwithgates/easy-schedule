import { Schedule } from "../components/ScheduleAdd"

interface ScheduleBound {
	startBound: string
	endBound: string
}

const scheduleIsValid = (bound: ScheduleBound, input: Schedule, schedules: Schedule[]) => {
    if(input.startTime > bound.endBound || input.startTime < bound.startBound){
        alert('Start time must in the range of start and end bound!')
        return false
    }

    if(input.endTime > bound.endBound){
        alert('End time must in the range of start and end bound!')
        return false
    }

    if(input.startTime >= input.endTime){
        alert('End time must be greater than start time!')
        return false
    }
    
    if(schedules.length + 1 > 7){
        alert('Busy schedules can be only up to 7!')
        return false
    }

    for(const schedule of schedules){
        if(input.startTime === schedule.startTime){
            alert('Start time is already present in one of the buzy schedule slots!')
            return false
        }
        if(input.endTime === schedule.endTime){
            alert('End time is already present in one of the buzy schedule slots!')
            return false
        }
        if(input.startTime > schedule.startTime && input.startTime < schedule.endTime){
            alert('Start time must not be between the existing start and end time of the buzy schedule slot!')
            return false
        }
        if(input.endTime > schedule.startTime && input.endTime < schedule.endTime){
            alert('End time must not be between the existing start and end time of the buzy schedule slot!')
            return false
        }
    }

    return true
}

export default scheduleIsValid