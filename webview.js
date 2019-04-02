module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const notifications = document.querySelector('[class*=header_] [class*=content_] [class*=actions_] [class*=notificationsButton_]').innerText.length
    const numOfMessages = document.querySelector('[class*=header_] [class*=content_] [class*=actions_] [class*=notificationsButton_]').innerText

    Franz.setBadge(notifications, numOfMessages)
  }

  Franz.loop(getMessages)
}
