
import axiosClient from './axiosClient'

const newsApi = {
	search: (params) => {
		return axiosClient.get('/news/search', { params })
	},

	getById: (id) => {
		return axiosClient.get(`/news/${id}`)
	},

	create: (data) => {
		return axiosClient.post('/news', data)
	},

	update: (id, data) => {
		return axiosClient.put(`/news/${id}`, data)
	},

	delete: (id) => {
		return axiosClient.delete(`/news/${id}`)
	},

	// --- DUYỆT BÀI ---
	getPendingList: () => {
		return axiosClient.get('/news/pending')
	},

	approve: (id, data) => {
		return axiosClient.put(`/news/request/${id}/approve`, data)
	},

	// --- BÌNH LUẬN ---
	getComments: (newsId) => {
		return axiosClient.get(`/news/${newsId}/comments`)
	},

	postComment: (newsId, data) => {
		// data: { msv, studentName, content }
		return axiosClient.post(`/news/${newsId}/comments`, data)
	},

	deleteComment: (commentId) => {
		return axiosClient.delete(`/comments/${commentId}`)
	}
}

export default newsApi
