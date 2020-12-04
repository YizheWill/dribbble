# HTML
* `GET / StaticPagesController#root`
# API Endpoints
## user
* `GET /api/users/:user_id` - display user's profile page
* `POST /api/users` - sign up
* `DELETE /api/users/:user_id` - delete an account
## session
* `POST /api/session` - log in
* `DELETE /api/session` - log out
## shot
* `GET /api/shots` - returns all relevant shots (filtered by data/params)
* `GET /api/shots/:id` - returns a shot and related info
* `POST /api/shots` - creates a shot
* `PATCH /api/shots/:id` - edit a shot
* `DELETE /api/shots/:id` - remove a shot
## likes
* `POST /api/shots/:shot_id/likes` - like a shot
* `DELETE /api/shots/:shot_id/likes` - unlike a shot
* `POST /api/comments/:comment_id/likes` - like a comment
* `DELETE /api/comments/:comment_id/likes` - unlike a comment
## comments
* `POST /api/shots/:shot_id/comments` - comment a shot
* `DELETE /api/shots/:shot_id/comments` - delete a comment
## collections
* `POST /api/collections` - create a collection
* `GET /api/users/:user_id/collections` - get all the collections of a user
* `DELETE /api/collections/:collection_id` - delete a collection
