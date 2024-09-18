// import { Token } from '@/types/data'

const TOKEN_KEY = 'TOKEN_KEY'
// 设置 token
export function setToken(data: string): void {
  // 对象转字符串
  localStorage.setItem(TOKEN_KEY, data)
}

// 获取 token
export function getToken() {
  // 字符串转对象
  return localStorage.getItem(TOKEN_KEY)
}



// 移除 token
export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY)
}

// 判断是否登录（授权）
export function hasToken(): boolean {
  return !!getToken()
}


// 设置 localStorage
export function setItem(key: string, value: string): void {
  // 对象转字符串
  localStorage.setItem(key, JSON.stringify(value))
}

// 获取 localStorage
export function getItem(key: string): any {
  // 对象转字符串
  try {
    const value = localStorage.getItem(key)
    if (value === null || value === undefined || value === "") return null
    return JSON.parse(value);
  } catch (error) {
    return null
  }
}

export function clearAllStorage() {
  return localStorage.clear();
}