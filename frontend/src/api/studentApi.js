
import axiosClient from './axiosClient'

const studentApi = {
	loginAdmin: (credentials) => {
		return axiosClient.post('/Auth/login/admin', credentials)
	},

	loginStudent: (credentials) => {
		return axiosClient.post('/Auth/login/student', credentials)
	},

    getGrades: () => {
        return axiosClient.get("/Students/grades")
    },

    getSchedule: (id) => {
        return axiosClient.get(`/Students/schedule/${id}`)
    },

    getSubjects: () => {
        return axiosClient.get("/Subjects")
    },

    getSemesters: () => {
        // return axiosClient.get("/Students/semesters")
        // semesterid from 1-14
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    }

}

export default studentApi
