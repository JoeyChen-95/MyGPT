import { Chat } from "@/types/chatd"

export function groupByDate(chatList: Chat[]) {
    const groupMap = new Map<string, Chat[]>()
    chatList.forEach((item) => {
        const now = new Date()
        const updateTime = new Date(item.updateTime)
        let key = "Unknown Time"
        const dayDiff = Math.floor(
            (now.getTime() - updateTime.getTime()) / (1000 * 60 * 60 * 24)
        )
        if (dayDiff === 0 && now.getDate() === updateTime.getDate()) {
            key = "Today"
        } else if (dayDiff <= 7) {
            key = "Previous 7 Days"
        } else if (dayDiff <= 30) {
            key = "Previous 30 Days"
        } else if (now.getFullYear() === updateTime.getFullYear()) {
            if (updateTime.getMonth() + 1 === 1) {
                key = "January";
            } else if (updateTime.getMonth() + 1 === 2) {
                key = "February";
            } else if (updateTime.getMonth() + 1 === 3) {
                key = "March";
            } else if (updateTime.getMonth() + 1 === 4) {
                key = "April";
            } else if (updateTime.getMonth() + 1 === 5) {
                key = "May";
            } else if (updateTime.getMonth() + 1 === 6) {
                key = "June";
            } else if (updateTime.getMonth() + 1 === 7) {
                key = "July";
            } else if (updateTime.getMonth() + 1 === 8) {
                key = "August";
            } else if (updateTime.getMonth() + 1 === 9) {
                key = "September";
            } else if (updateTime.getMonth() + 1 === 10) {
                key = "October";
            } else if (updateTime.getMonth() + 1 === 11) {
                key = "November";
            } else if (updateTime.getMonth() + 1 === 12) {
                key = "December";
            }
        } else {
            key = `${updateTime.getFullYear()}`
        }
        if (groupMap.has(key)) {
            groupMap.get(key)?.push(item)
        } else {
            groupMap.set(key, [item])
        }
    })
    groupMap.forEach((item) => {
        item.sort((a, b) => b.updateTime - a.updateTime)
    })
    const groupList = Array.from(groupMap).sort(([, list1], [, list2]) => {
        return (
            list2[list2.length - 1].updateTime -
            list1[list1.length - 1].updateTime
        )
    })
    return groupList
}