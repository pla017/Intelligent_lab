import { http } from '../utils/axios'

interface LoginData {
  username: string
  password: string
}

interface UserInfo {
  id: number
  username: string
  email: string
}

export const userApi = {
  // 用户登录
  login(data: LoginData) {
    return http.post<{ token: string }>('/auth/login', data)
  },

  // 获取用户信息
  getUserInfo() {
    return http.get<UserInfo>('/user/info')
  },

  // 更新用户信息
  updateUserInfo(data: Partial<UserInfo>) {
    return http.put<UserInfo>('/user/info', data)
  },

  // 退出登录
  logout() {
    return http.post('/auth/logout')
  }
} 