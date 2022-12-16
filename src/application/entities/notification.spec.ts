import { Content } from './content'
import { Notification } from './notification'

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'example-recipent-id',
      category: 'friend request',
      content: new Content('New friend request'),
    })

    expect(notification).toBeTruthy()
  })
})
