
import axiosClient from './axiosClient'

const fileApi = {
	// --- User ---
	search: (params) => {
		// params: { keyword: '', subjectCodes: ['CSE481'], page: 1, pageSize: 10 }
		return axiosClient.get('/Files/search', { params })
	},

	getById: (id) => {
		return axiosClient.get(`/Files/${id}`)
	},

	download: (id) => {
		// Trả về Blob (file nhị phân) để tải xuống máy
		return axiosClient.get(`/Files/${id}/download`, {
			responseType: 'blob'
		})
	},

	// --- ADMIN ---
	upload: (formData) => {
		// FormData: 'File', 'Title', 'SubjectCode', 'Permission', 'FileType'
		return axiosClient.post('/Files', formData, {
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	},

	replace: (id, formData) => {
		return axiosClient.put(`/Files/${id}/replace`, formData, {
			headers: { 'Content-Type': 'multipart/form-data' }
		})
	},

	updateMetadata: (id, data) => {
		// data: { title, subjectCode, permission, filetype }
		return axiosClient.put(`/Files/${id}/metadata`, data)
	},

	delete: (id) => {
		return axiosClient.delete(`/Files/${id}`)
	},

	getPendingList: () => {
		return axiosClient.get('/Files/pending')
	},

	approve: (id, data) => {
		// data: { isApproved: true/false, reason: '...' }
		return axiosClient.put(`/Files/request/${id}/approve`, data)
	},

	// --- THỐNG KÊ (DASHBOARD) ---
	getStatsByType: () => axiosClient.get('/Files/stats/type'),
	getStatsBySubject: () => axiosClient.get('/Files/stats/subject'),
	getStatsByTraffic: () => axiosClient.get('/Files/stats/traffic')
}

export default fileApi
