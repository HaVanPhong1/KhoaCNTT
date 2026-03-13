
import axiosClient from './axiosClient'

const lecturerApi = {
    getAll: () => {
        return axiosClient.get("/Lecturer/")
    },

    getById: (id) => {
        return axiosClient.get(`/Lecturer/${id}`)
    },

	create: (data) => {
		return axiosClient.post('/Lecturer', data)
	},

	update: (id, data) => {
		return axiosClient.put(`/Lecturer/${id}`, data)
	},

    delete: (id) => {
        return axiosClient.delete(`/Lecturer/${id}`)
    }
}

export default lecturerApi
