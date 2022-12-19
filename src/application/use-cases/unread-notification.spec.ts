import { makeNotification } from '@test/factories/notification-factory'
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-repository'
import { UnreadNotification } from './unread-notification'
import { NotificationNotFound } from './errors/notification-not-found-error'

describe('Unread Notification', () => {
  it('Should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)

    const notification = makeNotification({ readAt: new Date() })

    await notificationsRepository.create(notification)

    await unreadNotification.execute({
      notificationId: notification.id,
    })

    expect(notificationsRepository.notifications[0].readAt).toEqual(null)
  })

  it('Should not be able to unread a non existing notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      })
    }).rejects.toThrow(NotificationNotFound)
  })
})
