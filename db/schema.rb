ActiveRecord::Schema.define(version: 2020_12_18_054543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'collections', force: :cascade do |t|
    t.bigint 'user_id', null: false
    t.string 'title', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['user_id'], name: 'index_collections_on_user_id'
  end

  create_table 'commentlikes', force: :cascade do |t|
    t.bigint 'user_id', null: false
    t.bigint 'comment_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['comment_id'], name: 'index_commentlikes_on_comment_id'
    t.index ['user_id'], name: 'index_commentlikes_on_user_id'
  end

  create_table 'comments', force: :cascade do |t|
    t.bigint 'user_id', null: false
    t.string 'body', null: false
    t.bigint 'shot_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['shot_id'], name: 'index_comments_on_shot_id'
    t.index ['user_id'], name: 'index_comments_on_user_id'
  end

  create_table 'follows', force: :cascade do |t|
    t.bigint 'following_id', null: false
    t.bigint 'follower_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['follower_id'], name: 'index_follows_on_follower_id'
    t.index ['following_id', 'follower_id'], name: 'index_follows_on_following_id_and_follower_id', unique: true
    t.index ['following_id'], name: 'index_follows_on_following_id'
  end

  create_table 'shotlikes', force: :cascade do |t|
    t.bigint 'user_id', null: false
    t.bigint 'shot_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['shot_id'], name: 'index_shotlikes_on_shot_id'
    t.index ['user_id'], name: 'index_shotlikes_on_user_id'
  end

  create_table 'shots', force: :cascade do |t|
    t.string 'title', null: false
    t.string 'description', default: ''
    t.string 'image_url', default: 'https://cdn.dribbble.com/users/33073/screenshots/14751019/media/46c066bf824f49258ab7f3ae5025f3a6.png?compress=1&resize=1600x1200'
    t.integer 'view_count', default: 0
    t.boolean 'allow_comment', default: true
    t.boolean 'image_or_video', default: true
    t.decimal 'price', default: '0.0'
    t.bigint 'user_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.bigint 'collection_id'
    t.index ['collection_id'], name: 'index_shots_on_collection_id'
    t.index ['user_id'], name: 'index_shots_on_user_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'name', null: false
    t.string 'username', null: false
    t.string 'email', null: false
    t.string 'password_digest', null: false
    t.string 'session_token', null: false
    t.integer 'tier', default: 0, null: false
    t.text 'bio', default: ''
    t.string 'location', default: ''
    t.string 'personal_url', default: ''
    t.string 'portfolio_url', default: ''
    t.string 'portfolio_password', default: ''
    t.string 'twitter', default: 'https://twitter.com'
    t.string 'facebook', default: 'https://facebook.com'
    t.string 'github', default: 'https://github.com'
    t.boolean 'available', default: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'avatar_url', default: 'https://res.cloudinary.com/willwang/image/upload/v1607723511/avatar_l9tddb.png'
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['session_token'], name: 'index_users_on_session_token', unique: true
    t.index ['username'], name: 'index_users_on_username', unique: true
  end

  add_foreign_key 'collections', 'users'
  add_foreign_key 'commentlikes', 'comments'
  add_foreign_key 'commentlikes', 'users'
  add_foreign_key 'comments', 'shots'
  add_foreign_key 'comments', 'users'
  add_foreign_key 'shotlikes', 'shots'
  add_foreign_key 'shotlikes', 'users'
  add_foreign_key 'shots', 'users'
end
