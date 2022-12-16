import { Notification } from '../entities/notification'
import { SendNotification } from './send-notification'

const notifications: Notification[] = []

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification)
  },
}

describe('Send Notification', () => {
  it('Should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository)

    await sendNotification.execute({
      content: 'is a notification',
      category: 'notification',
      recipientId: 'example-recipient-id',
    })

    expect(notifications).toHaveLength(1)
  })
})
