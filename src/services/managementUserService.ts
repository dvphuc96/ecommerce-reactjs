import { apiInstance } from "constant"
import { LoginSchemaType } from "schema"

const api = apiInstance({
    baseURL: import.meta.env.VITE_MANAGEMENT_USER_API,
    timeout: 3000,
})
export const managementUserService = {
    login: (data: LoginSchemaType) => api.post<ApiResponse<unknown>>("/login", data),
}