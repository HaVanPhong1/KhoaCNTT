
import axiosClient from './axiosClient'

const authApi = {
	loginAdmin: (credentials) => {
		// credentials: { username, password }
		return axiosClient.post('/Auth/login/admin', credentials)
	},

	loginStudent: (credentials) => {
		// credentials: { username, password }
		return axiosClient.post('/Auth/login/student', credentials)
	}
}

export default authApi
