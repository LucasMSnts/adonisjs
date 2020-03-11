'use strict'

// docker run --name redis -p 6379:6379 -d redis:alpine

/*
|--------------------------------------------------------------------------
| Redis Subscribers
|--------------------------------------------------------------------------
|
| Here you can register the subscribers to redis channels. Adonis assumes
| your listeners are stored inside `app/Listeners` directory.
|
*/

// const Redis = use('Redis')

/**
 * Inline subscriber
 */
// Redis.subscribe('news', async () => {
// })

/**
 * Binding method from a module saved inside `app/Listeners/News`
 */
// Redis.subcribe('news', 'News.onMessage')
