import { View, Text } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderChatRoom from './components/HeaderChatRoom'

export default function ChatRoom() {
    const dataChatRoom =[
        {
            "id": "msg_001",
            "senderId": "employee123", // Giả định ID của nhân viên
            "senderName": "Nhân viên",
            "messageContent": "Mình gửi hình ảnh chuyển khoản",
            "timestamp": "2025-07-18T09:12:00Z", // Thời gian giả định
            "isRead": true,
            "attachments": [
            {
                "type": "image",
                "url": "url_to_your_transfer_screenshot.png", // Thay thế bằng URL ảnh thực tế
                "caption": "Bản sao kê chuyển khoản 20,000 VND từ VPBank" // Mô tả ảnh
            }
            ]
        }
    ]
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderChatRoom/>
        </AppBlock>
    </AppSafeAreaView>
  )
}