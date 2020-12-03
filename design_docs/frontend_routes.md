- `/`
  > - `<Home />`
- `/signin`
  > - `<SessionForm />`
- `/signup`
  > - `<NewUserForm />`
- `/shots/following/:tag_name`
- `/shots/recent/:tag_name`
- `/shots/popular/:tag_name`
- `/shots/forsale/:tag_name`
- `/users/:user_id/likes`
- `/users/:user_id/shots`
  > - `<Shots />`
- `/shots/:shot_id`
  > - `<Shot />`
- `/shots/new`
  > - `<NewShotForm />`
- `/users/:user_id`
  > - `<Profile />`
- `/users/:user_id/collections`
  > - `<Collections />`
- `/users/:user_id/collections/:collection_id`
- `/collections/:collection_id (maybe not necessarily nested?)`
  > - `<Collection />`
- `/users/:user_id/about`
  > - `<UpdateProfile /> or <Profile /> depending on current_user.id === :user_id`
- `/subscription`
  > - `<Subscription />`
- `/search`
  > - `<Search />`
