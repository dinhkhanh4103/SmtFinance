// function removeAscent(str: any) {
//   if (str === null || str === undefined) {
//     return str
//   }
//   str = str.toLowerCase()
//   str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
//   str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
//   str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
//   str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
//   str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
//   str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
//   str = str.replace(/đ/g, 'd')
//   return str
// }
// export const validateEmail = (name: string) => {
//   const regName =
//     /^(?:((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-])){0,}(['’,\-\.]){0,1}){2,}(([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-. ]))*(([ ]+){0,1}(((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){1,})(['’\-,\.]){0,1}){2,}((([^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]'’,\-\.\s])){2,})?)*)$/
//   return regName.test(removeAscent(name))
// }

export const isValidEmail = (inputEmail: string) =>
  inputEmail.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  )

export const isValidateEmail = (input: string): boolean => {
  // Biểu thức chính quy kiểm tra địa chỉ email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(input)
}

export const validateUrl = (input: string): boolean => {
  // Biểu thức chính quy kiểm tra định dạng của URL
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return urlRegex.test(input)
}

export const validatePassword = (input: string): boolean => {
  // Biểu thức chính quy kiểm tra định dạng của password
  const passRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/
  return passRegex.test(input)
}

export const validatePhone = (input: string): boolean => {
  // Biểu thức chính quy kiểm tra định dạng của password
  const phoneRegex = /^0[0-9]{9}$/
  return phoneRegex.test(input)
}
export const validateSpecificAddress = (input: string): boolean => {
  // Biểu thức chính quy kiểm tra định dạng của password
  const adđetailRegex = /^[a-zA-Z0-9_\/]+$/
  return adđetailRegex.test(input)
}

export function validName(name: string) {
  // Biểu thức chính quy
  const regexPattern = /^[a-zA-Záàảãạăắằẳẵặâấầẩẫậéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵ\s]{3,}$/

  // Kiểm tra chuỗi với biểu thức chính quy
  const result = regexPattern.test(name)

  // Trả về true nếu chuỗi hợp lệ, ngược lại trả về false
  return result
}
