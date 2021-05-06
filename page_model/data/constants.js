import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USER_NAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: 'invalid_user',
        PASSWORD: 'invalid_password'
    }
}

export const MAILING = {
    FIRST_NAME:'Jon',
    LAST_NAME:'Doe',
    ZIP_CODE: '5555'
}