'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/courses', 'CourseController.getAll')

Route.get('/courses/:id', 'CourseController.show')

Route.post('/courses', 'CourseController.store')

Route.put('/courses/:id', 'CourseController.update')


Route.delete('/courses/:id', 'CourseController.delete')