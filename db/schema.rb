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

ActiveRecord::Schema.define(version: 2020_12_17_000251) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collections", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "title", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_collections_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "body", null: false
    t.bigint "shot_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["shot_id"], name: "index_comments_on_shot_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "shots", force: :cascade do |t|
    t.string "title", null: false
    t.string "description", default: ""
    t.string "image_url", default: "https://cdn.dribbble.com/users/33073/screenshots/14751019/media/46c066bf824f49258ab7f3ae5025f3a6.png?compress=1&resize=1600x1200"
    t.integer "view_count", default: 0
    t.boolean "allow_comment", default: true
    t.boolean "image_or_video", default: true
    t.decimal "price", default: "0.0"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "collection_id"
    t.index ["collection_id"], name: "index_shots_on_collection_id"
    t.index ["user_id"], name: "index_shots_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.integer "tier", default: 0, null: false
    t.text "bio", default: ""
    t.string "location", default: ""
    t.string "personal_url", default: ""
    t.string "portfolio_url", default: ""
    t.string "portfolio_password", default: ""
    t.string "twitter", default: "https://twitter.com"
    t.string "facebook", default: "https://facebook.com"
    t.string "github", default: "https://github.com"
    t.boolean "available", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "avatar_url", default: "https://res.cloudinary.com/willwang/image/upload/v1607723511/avatar_l9tddb.png"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "collections", "users"
  add_foreign_key "comments", "shots"
  add_foreign_key "comments", "users"
  add_foreign_key "shots", "users"
end
