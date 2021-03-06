// 1.手动切换不同的环境
// 开发环境使用这个
// const BASE_URL = "http://coderwhy.org/dev"
// const BASE_NAME = "coderwhy"

// 生产环境使用这个
// const BASE_URL = "http://coderwhy.org/prod"
// const BASE_NAME = "kobe"

// 测试环境使用这个
// const BASE_URL = "http://coderwhy.org/test"
// const BASE_NAME = "james"

// 2.根据process.env.NODE_ENV
// 开发环境: development
// 生产环境: production
// 测试环境: test

let BASE_URL = ""
const TIME_OUT = 10000

if (process.env.NODE_ENV == "development") {
  // http://123.207.32.32:8000
  BASE_URL = "/api"
} else if (process.env.NODE_ENV == "development") {
  // BASE_URL = "http://coderwhy.org/prod"
  BASE_URL = "http://152.136.185.210:5000"
} else {
  // BASE_URL = "http://coderwhy.org/test"
  BASE_URL = "http://152.136.185.210:5000"
}

export { BASE_URL, TIME_OUT }
