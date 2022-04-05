//import {request} from './request.js'

const templateIDs = {
    "notifyRegister": "MZoblD0UfUeSnEvPWnxidxd64F2GSnQ2Q_O7l8bxvfw",
    "notifyRegSucceeded": "OMNeJ1nSrzozPAQdBL39k4gelLBZpve66MERDN1Jm8c"
}

export const getAccessToken = () => {
    request('/mobile/wx/getAccessToken').then (res => {
      return res.data.data
    })
}

export const notifyRegister = (name, mobileNumber, openId) => {
}

export const notifyRegSucceeded = (name, mobileNumber) => {
}
