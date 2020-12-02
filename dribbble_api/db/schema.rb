# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_02_041556) do

  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'collections', force: :cascade do |t|
    t.bigint 'user_id', null: false
    t.bigint 'shot_id', null: false
    t.string 'title', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['shot_id'], name: 'index_collections_on_shot_id'
    t.index ['user_id'], name: 'index_collections_on_user_id'
  end

  create_table 'comments', force: :cascade do |t|
    t.integer 'commenter_id', null: false
    t.bigint 'shot_id', null: false
    t.integer 'commentee_id'
    t.string 'body', null: false
    t.integer 'parent_comment_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['shot_id'], name: 'index_comments_on_shot_id'
  end

  create_table 'image_tags', force: :cascade do |t|
    t.bigint 'tag_id', null: false
    t.bigint 'shot_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['shot_id'], name: 'index_image_tags_on_shot_id'
    t.index ['tag_id'], name: 'index_image_tags_on_tag_id'
  end

  create_table 'likes', force: :cascade do |t|
    t.integer 'liker_id'
    t.integer 'likable_id'
    t.string 'likable_type'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['likable_id', 'likable_type'], name: 'index_likes_on_likable_id_and_likable_type'
  end

  create_table 'shots', force: :cascade do |t|
    t.string 'img_url', null: false
    t.string 'title', null: false
    t.string 'description'
    t.integer 'views_count', default: 0
    t.boolean 'allow_comment', default: true
    t.boolean 'image_or_video', default: true
    t.decimal 'price', default: '1.0'
    t.bigint 'user_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['user_id'], name: 'index_shots_on_user_id'
  end

  create_table 'tags', force: :cascade do |t|
    t.string 'tag_name'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'users', force: :cascade do |t|
    t.string 'name', null: false
    t.string 'username', null: false
    t.string 'email', null: false
    t.string 'password_digest', null: false
    t.string 'session_token', null: false
    t.integer 'tier', default: 0
    t.string 'location'
    t.text 'bio'
    t.string 'personal_website_url'
    t.string 'portfolio_url'
    t.string 'portfolio_password'
    t.string 'twitter_url'
    t.string 'facebook_url'
    t.string 'github_url'
    t.boolean 'work_availability', default: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  add_foreign_key 'collections', 'shots'
  add_foreign_key 'collections', 'users'
  add_foreign_key 'comments', 'shots'
  add_foreign_key 'image_tags', 'shots'
  add_foreign_key 'image_tags', 'tags'
  add_foreign_key 'shots', 'users'
end
